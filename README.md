# CinéManager

## Contexte du projet

CinéManager est un projet visant à créer une application frontend en utilisant React pour gérer les réservations de séances de cinéma. L'objectif principal est d'offrir une expérience utilisateur fluide pour la connexion, l'inscription, la gestion des réservations et le rétablissement des mots de passe.

## Fonctionnalités

- **Inscription et connexion** : Formulaires d'inscription et de connexion avec validation des entrées.
- **Gestion des réservations** : Les utilisateurs peuvent réserver des séances de cinéma, visualiser les films et les séances disponibles.
- **Réinitialisation de mot de passe** : Les utilisateurs peuvent réinitialiser leur mot de passe en cas d'oubli.
- **Affichage des réservations** : Les utilisateurs peuvent consulter leurs réservations précédentes.
- **Filtrage des films** : Fonctionnalité pour filtrer les films par genre, date ou autres critères.

## Technologies utilisées

- **React** : Pour le développement de l'interface utilisateur en utilisant des composants réutilisables.
- **React Router** : Pour la gestion des routes et de la navigation dans l'application.
- **Axios** : Pour effectuer des requêtes HTTP vers le backend.
- **Context API / Redux (optionnel)** : Pour la gestion de l'état global de l'application, notamment pour l'authentification.
- **Formik ou React Hook Form** : Pour la gestion des formulaires (ou implémentation native).

## Étapes de développement

1. Créer une nouvelle application React en utilisant Create React App ou une méthode de votre choix.
2. Développer le formulaire d'inscription avec gestion de la validation des entrées côté frontend.
3. Implémenter la connexion en récupérant le jeton JWT généré par le backend.
4. Gérer la réponse du backend pour le token JWT.
5. Stocker le jeton JWT dans les cookies ou le stockage local.
6. Permettre la réinitialisation de mot de passe via un formulaire.
7. Envoyer une requête au backend pour générer un lien de réinitialisation de mot de passe.
8. Implémenter la déconnexion des utilisateurs.
9. Ajouter la fonctionnalité de réservation de séances de cinéma.
10. Afficher la liste des films disponibles et des séances.
11. Filtrer les films par genre, date, ou autre critère.
12. Afficher les réservations de chaque client.

## Dockerisation

Pour dockeriser le projet avec Docker Compose, suivez ces étapes :

1. Créez un fichier `Dockerfile` pour le frontend React.
2. Configurez le `docker-compose.yml` pour inclure les services nécessaires.
3. Démarrez les conteneurs Docker et accédez au frontend via votre navigateur.

## Installation

Pour installer les dépendances du projet, exécutez la commande suivante dans le répertoire de votre projet :

```bash
npm install
```
