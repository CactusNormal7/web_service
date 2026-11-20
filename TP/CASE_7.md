# CAS 7 — La mise à jour du 3 mars

> Une banque mobile. L'appli est installée sur 200 000 téléphones. Voici les notes de la mise à jour de l'API. Le lendemain, le support reçoit 4 000 appels.

```md
## Version 1 — mise à jour du 3 mars

- Ajout du champ `currency` dans la réponse de GET /v1/accounts/{id}
- Le champ `balance` s'appelle maintenant `availableBalance`
- Suppression du champ `iban` (peu utilisé)
- Nouveau paramètre obligatoire `reason` sur POST /v1/transfers
- Ajout de la route GET /v1/accounts/{id}/cards
```

## Réponses
1.
- Ajout de `currency` : non cassant, l'ancienne appli ignore juste le champ.
- `balance` renommé : cassant, l'ancienne appli ne trouve plus le solde.
- Suppression de `iban` : cassant, l'ancienne appli qui l'affichait ne l'a plus.
- `reason` obligatoire : cassant, l'ancienne appli ne l'envoie pas donc ses virements sont refusés.
- Nouvelle route `/cards` : non cassant, l'ancienne appli ne l'appelle pas.

2. Les clients ne voient plus leur solde et n'arrivent plus à faire de virement, d'où les 4 000 appels au support.

3. Règle 7 : « On ajoute, on ne casse pas. »

4.
- Version 1 : ajout de `currency`, la route `/cards`, et `reason` en optionnel.
- Version 2 : le renommage de `balance`, la suppression de `iban`, `reason` obligatoire.
- La version 1 reste en ligne, marquée comme dépréciée avec une date de fin (en-tête `Sunset`).

5. On ajoute `availableBalance` en gardant `balance` avec la même valeur, et on marque `balance` comme déprécié.
