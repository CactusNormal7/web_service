# CAS 6 — La facture de mars

> Une API météo gratuite, ouverte à tous sans inscription, qui revend les prévisions d'un fournisseur facturant chaque appel. En mars, un site partenaire interroge l'API toutes les secondes pour chacun de ses visiteurs. La facture du fournisseur est multipliée par 40.

```js
app.get('/v1/forecast', async (req, res) => {
  const meteo = await fournisseur.previsions(req.query.ville);  // 0,002 € par appel
  res.json(meteo);
});
```

## Réponses
1. L'API est ouverte à tout le monde sans limite, alors que chaque appel nous coûte de l'argent.

2. Un seul site partenaire suffit à faire exploser la facture, et rien ne l'en empêche.

3. Règle 6 : « Un compteur à l'entrée. »

4. On compte par clé d'API (inscription gratuite), avec une limite de 60 requêtes par minute. Au-delà l'API répond `429 Too Many Requests` avec un en-tête `Retry-After`.

5. Les 800 étudiants partagent le même compteur, donc ils se retrouvent bloqués ensemble alors que chacun fait peu de requêtes.

6. Non, on peut garder la météo de chaque ville en cache quelques minutes et appeler le fournisseur une seule fois.
