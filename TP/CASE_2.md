# CAS 2 — La place F7

> Une billetterie de cinéma. Deux personnes réservent la même place au même moment. Voici ce que reçoit la seconde. Son appli affiche « Réservation confirmée ».

```http
POST /v1/bookings
{ "movieId": 12, "seat": "F7" }

HTTP/1.1 200 OK
Content-Type: application/json

{ "ok": false, "error": "E42" }
```

## Réponses
1. L'API renvoie 200 OK alors que la réservation a échoué.

2. La seconde personne pense avoir sa place alors qu'elle n'a rien / deux personnes se retrouvent devant la même place F7 le jour de la séance

3. Règle 2 : « Le code HTTP dit la vérité. »

4.
```http
HTTP/1.1 409 Conflict
Content-Type: application/problem+json

{
  "response": "Place déjà réservée",
  "status": 409,
  "detail": "La place F7 est déjà réservée pour la séance 12."
}
```

5. E42 voulait dire « place déjà prise ». Seuls les développeurs le savent, voire uniquement le développeur responsable de ce message.