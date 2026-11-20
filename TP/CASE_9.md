# CAS 9 — Le test qui dit toujours oui

> Un site de vente. Ce test tourne à chaque mise en production. Il est vert.

```js
test('le panier applique la remise de 10 %', async () => {
  const res = await api.post('/v1/carts/7/checkout', { promoCode: 'BIENVENUE10' });
  expect(res.status).toBe(200);
});

// En production : le total d'un panier de 50 € est de 40,50 € au lieu de 45 €.
// La remise est appliquée deux fois. Le test est vert depuis deux mois.
```

## Réponses
1. 

2. 

3. 

4. 

5. 
