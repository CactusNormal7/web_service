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

2. 

3. 

4. 
