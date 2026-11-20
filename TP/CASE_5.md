# CAS 5 — La fiche du conducteur

> Une appli de covoiturage. Avant un trajet, le passager voit la fiche du conducteur : son prénom et sa note. Voici ce que l'API renvoie pour afficher ces deux informations.

```http
GET /v1/drivers/12

HTTP/1.1 200 OK

{
  "id": 12,
  "firstName": "Samir",
  "rating": 4.8,
  "phone": "06 44 21 08 77",
  "homeAddress": "8 allée des Tilleuls, Nantes",
  "iban": "FR76 3000 4000 0312 3456 7890 143",
  "passwordHash": "$2b$10$Kq1...",
  "licenseNumber": "14AB12345"
}
```

## Réponses
1. L'API renvoie toute la fiche du conducteur alors que l'écran a juste besoin du prénom et de la note.

2. N'importe quel passager peut récupérer le téléphone, l'adresse, l'IBAN et même le mot de passe haché du conducteur.

3. Règle 5 : « Ne renvoyer que ce que l'écran affiche. »

4.

| Visible par tous | Réservé au conducteur | Ne sort jamais |
|------------------|-----------------------|----------------|
| id               | phone                 | passwordHash   |
| firstName        | homeAddress           |                |
| rating           | iban                  |                |
|                  | licenseNumber         |                |

5. Les données passent quand même sur le réseau, n'importe qui peut les voir avec les outils du navigateur ou un curl.
