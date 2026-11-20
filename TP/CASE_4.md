# CAS 4 — Trois dons de 20 €

> Une cagnotte en ligne. Léa donne 20 € depuis le train. Le réseau coupe au moment où elle valide, l'appli réessaie automatiquement. Son relevé affiche trois débits de 20 €.

```js
app.post('/v1/donations', async (req, res) => {
  const don = await db.donations.insert({
    cagnotteId: req.body.cagnotteId,
    montant: req.body.montant,
  });
  await banque.debiter(req.user.carte, req.body.montant);
  res.status(201).json(don);
});
```

## Réponses
1. À chaque nouvel essai le serveur recrée un don et redébite, il ne sait pas que c'est la même demande.

2. Léa a payé 60 € au lieu de 20 €, elle doit demander à se faire rembourser.

3. Règle 4 : « Rejouer une requête ne rejoue pas l'effet. »

4.
- L'appli crée une clé unique et l'envoie dans l'en-tête `Idempotency-Key`, la même à chaque essai.
- Au premier envoi le serveur ne connaît pas la clé, il crée le don, débite et garde la clé avec la réponse.
- Au deuxième envoi il connaît déjà la clé, il renvoie juste la même réponse sans rien refaire.

5. Le don est enregistré mais l'argent n'est pas débité, donc la cagnotte affiche un don qui n'existe pas.
