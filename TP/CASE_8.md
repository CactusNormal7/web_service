# CAS 8 — La conversation

> Une startup, deux développeurs. Extrait de la messagerie interne de l'équipe.

```text
Sarah (front)  10:02   Tu renvoies quoi pour une commande ? J'ai besoin du prix et de la date
Tom (back)     10:15   {price, date} en gros
Sarah (front)  10:16   ok je pars là-dessus
        ... trois semaines plus tard ...
Sarah (front)  16:40   pourquoi j'ai "amount_cents": 2490 et "created": 1795000000 ???
Tom (back)     16:52   bah c'est le prix et la date
Sarah (front)  16:53   moi j'affiche "2490 €" et "Invalid Date" sur tous les écrans
Tom (back)     17:05   ah. et le champ s'appelle amount_cents depuis lundi, j'avais prévenu Karim
```

## Réponses
1. Le front et le back ne se sont jamais mis d'accord par écrit sur ce que renvoie la route, chacun a fait à sa façon.

2. Tous les écrans affichent un prix faux et une date invalide, et il faut reprendre trois semaines de travail.

3. Règle 8 : « Le contrat d'abord, le code ensuite. »

4. Un contrat OpenAPI dans le dépôt Git, avec la route `GET /v1/orders/{id}`, le nom et le type de chaque champ (par exemple `amount_cents` en entier et en centimes, `created_at` en date ISO 8601), et les erreurs possibles.

5.
- « en gros » : la réponse est vague, rien n'est précis.
- Le nom du prix : `price` annoncé, `amount_cents` reçu.
- L'unité du prix : Sarah attend des euros, elle reçoit des centimes.
- Le nom de la date : `date` annoncé, `created` reçu.
- Le format de la date : elle attend une date lisible, elle reçoit un timestamp Unix.
- Le renommage a été annoncé à Karim mais pas au front.
