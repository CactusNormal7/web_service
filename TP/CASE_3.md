# CAS 3 — La page d'accueil met 9 secondes

> Une boutique en ligne. Elle a démarré avec 40 produits, elle en a 80 000 aujourd'hui. La page d'accueil affiche 12 produits. Le code n'a pas changé depuis le lancement.

```js
app.get('/v1/products', async (req, res) => {
  const products = await db.query('SELECT * FROM products');
  res.json(products);
});
```

## Réponses
1. 

2. 

3. 

4. 

5. 
