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
1. Le test vérifie juste que la route répond 200, pas que le total est bon.

2. Les clients paient moins que prévu depuis deux mois et personne ne s'en est rendu compte.

3. Règle 9 : « Ce qui n'est pas testé est déjà cassé. »

4.
```js
test('le panier applique la remise de 10 %', async () => {
  // le panier 7 vaut 50 €
  const res = await api.post('/v1/carts/7/checkout', { promoCode: 'BIENVENUE10' });
  expect(res.status).toBe(200);
  expect(res.body.total).toBe(45);
});
```

5. Un code promo invalide doit renvoyer une erreur 4xx sans remise, et le même code envoyé deux fois ne doit appliquer la remise qu'une fois.
