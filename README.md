# test_bricozor_calculatrice

## Description du projet

Un calculatrice réalisant les quatre opérations de base : addition, soustraction, multiplication et division

Elle offre la possiblité d'enregistrer le résultat d'un calcul et affiche l'historique des résultats enregistrés

## Technologies

Ce projet a été développé en php.
La librairie Bootstrap a été utilisée.

## Environnement d'exécution

Pour utiliser cette calculatrice, vous devez disposez d'un serveur et placer le dossier du projet sur celui-ci.

## Version
### V1
La calculatrice permet d'effectuer un calcul avec deux nombres entrés par l'utilisateur via un formulaire.
L'utilisateur clique sur 'Calculer' pour lancer le calcul.

L'utilisateur peut entrer des nombres entiers ou décimaux, positifs ou négatifs. La décimale est marquée par un point ".".

Lorsqu'un résultat est affiché, il peut être enregistré dans un fichier historique.txt via le bouton "Enregistrer le résultat"

L'utilisateur peut voir l'historique des résultats enregistrés en cliquant sur "Voir l'historique des résultats".

### V2
Le visuel est de type calculatrice avec un pavé numérique cliquable.
Une zone de texte au dessus de la zone d'écriture rappelle le calcul en cours. 
Les calculs se font uniquement via le pavé numérique.

L'utilisateur ne peut entrer que des nombres (entiers ou décimaux) positifs.

Les calculs se font de gauche à droite sans tenir compte des priorités de calcul.

Le bouton "Annuler" permet de vider les zones de texte et de démarrer un nouveau calcul.

Le bouton "Enregistrer" est actif uniquement lorsqu'un résultat est affiché.
Il permet d'enregistrer le calcul et le résultat.

L'historique est consutable à tout moment.

### V3
Prise en charges des priorités de calcul.
Les multiplications et divisions sont faites en priorités sur les additions et soustractions.

Les multiplications et divisions sont exécutées sont l'ordre de lecture, de gauche à droite.

## Amélirations visées
Possibilité d'écrire directement dans la zone de calcul,
Possibilité d'entrer des valeurs négatives,
Améliorer la zone d'écriture du calcul (gérer les débordements),
Afficher un message de confirmation lors de l'enregistrement d'un résultat,
Enregistrer un résultat sans rechargement de page (AJAX ou JS),
Possibilité de vider l'historique.