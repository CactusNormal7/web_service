# CAS 6 — La facture de mars

> Une API météo gratuite, ouverte à tous sans inscription, qui revend les prévisions d'un fournisseur facturant chaque appel. En mars, un site partenaire interroge l'API toutes les secondes pour chacun de ses visiteurs. La facture du fournisseur est multipliée par 40.

```js
app.get('/v1/forecast', async (req, res) => {
  const meteo = await fournisseur.previsions(req.query.ville);  // 0,002 € par appel
  res.json(meteo);
});
```

## Réponses
1. 

2. 

3. 

4. 

5. 

6. 
