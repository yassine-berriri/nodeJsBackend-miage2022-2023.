# Mon projet Angular

Ce projet Angular a été créé pour apprendre les bases de Angular.

## Fonctionnalités

- on a créé un site de gestion d'assignments qui nous permet d'avoir un accès en tant que 
visiteur ou bien se connecter en tant qu'utilisateur autorisé ou admin  
si l'acteur est un visiteur alors il peut que consulter la liste des assignments 
si l'acteur est un utilisateur autorisé il peut que consulter créer et modifier un assignment 
si l'acteur est un admin il peut  consulter, modifier, créer et supprimer un assignment 

- on a ajouté  auteur, note, et matière(nom matière, image prof, image matière) pour chaque assignment 
et on a modifié les composants add-assignments, edit-assignment, assignment-detail et assignment pour ne pas avoir des conflits 

- on a amélioré l'affichage des assignments:
en fait on a affiché les assignments dans un tableau trié avec la pagination et la data Source qui montre 
le nom de devoir, l'image de prof, l'image de la matière, le nom de l'eleve, le note et si  le devoir est rendu ou bien non

## Comment démarrer

Pour démarrer ce projet, vous aurez besoin de:

- Node.js (version v16.17.0
- Angular CLI (version 14.2.4 )

1. Clonez ce dépôt sur votre ordinateur
2. Ouvrez un terminal et naviguez jusqu'à la racine du projet
3. Exécutez la commande `npm install` pour installer les dépendances du projet
4. Exécutez la commande `ng serve` pour démarrer le serveur de développement
5. Ouvrez votre navigateur et accédez à l'URL `http://localhost:4200` pour accéder à l'application


## Ressources

- [Angular documentation](https://angular.io/docs)
- [Node.js](https://nodejs.org/en/)
- [Angular material] (https://material.angular.io/)