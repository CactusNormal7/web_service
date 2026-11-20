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
1. Le nommage des routes n'est pas linéaire / cohérent et mettent l'action dans l'url

2. 

3. 

4. 

GET     /students
DELETE  /students/4
GET     /notes
PATCH   /notes/{id}
GET     /students/4/notes

5. La dernière route supprime avec un get, et a le paramètre qui décide de la suppression à true par défaut, donc si quelqu'un souhaite juste récupérer les notes des étudiants, et ne spécifie aucun paramètre, ça va supprimer des données non intentionnellement.