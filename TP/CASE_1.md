# CAS 1 — Les routes de l'intranet

> Une appli de gestion de notes pour une école. Un développeur junior a livré ces cinq routes. Elles fonctionnent toutes.

```http
GET   /getStudents
POST  /student/delete?id=4
GET   /Notes_list
POST  /updateNote
GET   /getStudentNotes?student=4&delete=true
```

## Réponses
1. Le nommage des routes n'est pas cohérent et met l'action dans l'URL au lieu du verbe HTTP.

2. Sécurité : Des actions peuvent mener à des résultats inattendus, s'il y a une différence entre l'action et le verbe.

3. Règle 1 : « Des noms dans l'URL, l'action dans le verbe HTTP. »

4.
```http
GET     /students
DELETE  /students/4
GET     /notes
PATCH   /notes/{id}
GET     /students/4/notes
```

5. La dernière route supprime avec un GET : quelqu'un qui veut juste récupérer les notes d'un étudiant peut supprimer des données sans le vouloir.
