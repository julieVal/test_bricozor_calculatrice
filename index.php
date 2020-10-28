<?php
require_once("modele/modele.inc.php");
session_start();

// Initialisation des variables
$action = 'calculatrice';
if(isset($_GET['action'])){
    $action = $_GET['action'];
}
    //Elements de calcul
if(isset($_POST['nbr1']) && isset($_POST['nbr2']) && isset($_POST['operator'])){
    $nbr1 = $_POST['nbr1'];
    $nbr2 = $_POST['nbr2'];
    $operator = $_POST['operator'];
}

    //resultat de l'opération
if(isset($_POST['resultat'])){
    $resultat = $_POST['resultat'];
}
var_dump($_POST);
// Etapes et traitements
switch ($action) {
    //accueil de la calulatrice vide
    case 'calculatrice':
        require('vues/view_header.php');
        require('vues/view_calculatrice.php');
        require('vues/view_footer.php');
    break;
    //affiche le résultat du calcul
    case 'calculer':
        $resultat = calculer($nbr1, $nbr2, $operator);
        require('vues/view_header.php');
        require('vues/view_calculatrice.php');
        require('vues/view_footer.php');
    break;
    //Sauvegarder un résultat
    case 'save':
        save($nbr1, $nbr2, $operator,$resultat);
        require('vues/view_header.php');
        require('vues/view_calculatrice.php');
        require('vues/view_footer.php');
    break;
    //Afficher l'historique des résultat
    case "history":
        $historique = read();
        require('vues/view_header.php');
        require('vues/view_historique.php');
        require('vues/view_footer.php');

}
