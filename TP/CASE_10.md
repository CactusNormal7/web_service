# CAS 10 — Sept lignes, combien de problèmes ?

> Cas de synthèse. Cette route renvoie un client et ses commandes. Elle est en production. Il y a au moins six problèmes, et ils ne viennent pas tous de la même règle.

```js
app.get('/getUserOrders', async (req, res) => {
  const user = await db.users.findById(req.query.id);
  const orders = await db.orders.find({ userId: user.id });
  res.status(200).json({ user: user, orders: orders });
});
```

## Réponses
1.
- Un verbe dans l'URL et l'id en paramètre (`/getUserOrders?id=`) : règle 1.
- Pas de version dans l'URL : règle 7.
- Si l'utilisateur n'existe pas ça plante au lieu de renvoyer un 404 : règle 2.
- Toutes les commandes sont renvoyées sans limite : règle 3.
- L'utilisateur est renvoyé en entier, mot de passe haché compris : règle 5.
- Aucune limite de requêtes : règle 6.
- Pas de contrat ni de test : règles 8 et 9.

2. `findById` renvoie `null`, puis `user.id` plante. Le client reçoit une erreur 500 (ou pas de réponse du tout) au lieu d'un 404.

3.
1. L'utilisateur renvoyé en entier, parce que des données sensibles fuitent.
2. La liste sans limite, parce qu'elle peut ralentir tout le serveur.
3. Le plantage sur un id qui n'existe pas, parce que le client reçoit une 500 au lieu d'un 404.
4. Pas de limite de requêtes, parce que n'importe qui peut surcharger l'API.
5. L'URL et la version, c'est gênant mais rien ne casse aujourd'hui.
6. Pas de contrat ni de test, le problème arrivera à la prochaine modif.

4.
```js
app.get('/v1/users/:id/orders', rateLimit, async (req, res) => {
  const user = await db.users.findById(req.params.id);
  if (!user) {
    return res.status(404).type('application/problem+json').json({
      title: 'Utilisateur introuvable',
      status: 404,
      detail: `Aucun utilisateur avec l'id ${req.params.id}.`,
    });
  }

  const limit = Math.min(Number(req.query.limit) || 20, 100);
  const orders = await db.orders.find(
    { userId: user.id },
    { limit, cursor: req.query.cursor },
  );

  res.status(200).json({
    user: { id: user.id, firstName: user.firstName },
    orders: orders.items.map(o => ({ id: o.id, total: o.total, createdAt: o.createdAt })),
    nextCursor: orders.nextCursor,
  });
});
```
