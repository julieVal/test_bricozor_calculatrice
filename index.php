<?php
require_once("modele/modele.inc.php");
session_start();

// Initialisation des variables
$action = 'calculatrice';

if(isset($_GET['action'])){
    $action = $_GET['action'];
}

    //Elements de calcul et resultat de l'opération
if(isset($_POST['resultat']) && isset($_POST['tabCalcul'])){
    $resultat = $_POST['resultat'];
    $tabCalcul = $_POST['tabCalcul'];
}
else{
    $resultat ="";
    $tabCalcul="";
}

// Etapes et traitements
switch ($action) {
    //accueil de la calulatrice vide
    case 'calculatrice':
        $rechargement = "false";
        require('vues/view_header.php');
        require('vues/view_calculatrice.php');
        require('vues/view_footer.php');
    break;
    //Sauvegarder un résultat
    case 'saveHistory':
        $rechargement = "true";
        saveHistory($tabCalcul, $resultat);
        $resultat;
        $tabCalcul = str_replace(",","",$tabCalcul);
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
    break;
}
