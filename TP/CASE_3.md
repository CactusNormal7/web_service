# CAS 3 — La page d'accueil met 9 secondes

> Une boutique en ligne. Elle a démarré avec 40 produits, elle en a 80 000 aujourd'hui. La page d'accueil affiche 12 produits. Le code n'a pas changé depuis le lancement.

```js
app.get('/v1/products', async (req, res) => {
  const products = await db.query('SELECT * FROM products');
  res.json(products);
});
```

## Réponses
1. La route récupère les 80 000 produits à chaque fois alors que la page en affiche que 12.

2. Plus il y a de produits, plus la page est lente, et à un moment le serveur ne tient plus.

3. Règle 3 : « Jamais de liste sans limite. »

4.
```http
GET /v1/products?limit=12

HTTP/1.1 200 OK
Content-Type: application/json

{
  "data": [ ...les 12 produits... ],
  "nextCursor": "abc123"
}
```

5. L'API plafonne à son maximum (par exemple 100), elle n'en renvoie jamais plus.
