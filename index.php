<?php
require_once("modele/modele.inc.php");
session_start();

// Initialisation des variables
$action = 'calculatrice';
if(isset($_GET['action'])){
    $action = $_GET['action'];
}

if(isset($_POST['nbr1']) && isset($_POST['nbr2']) && isset($_POST['operator'])){
    $nbr1 = $_POST['nbr1'];
    $nbr2 = $_POST['nbr2'];
    $operator = $_POST['operator'];
}


/*
echo "Post <br>";
var_dump($_POST);
echo "Get <br>";
var_dump($_GET);
*/
// Etapes et traitements
switch ($action) {
    case 'calculatrice':
        require('vues/view_header.php');
        require('vues/view_calculatrice.php');
        require('vues/view_footer.php');
    break;
    case 'calculer':
        $resultat = calculer($nbr1, $nbr2, $operator);
        require('vues/view_header.php');
        require('vues/view_calculatrice.php');
        require('vues/view_footer.php');
    break;

}
