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
1. 

2. 

3. 

4. 

5. 
