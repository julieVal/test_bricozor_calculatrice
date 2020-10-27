<?php
require_once("modele/modele.inc.php");
session_start();

// Initialisation des variables
$action = 'calculatrice';
if(isset($_GET['action'])){
    $action = $_GET['action'];
}




echo "Post <br>";
var_dump($_POST);
echo "Get <br>";
var_dump($_GET);
// Etapes et traitements
switch ($action) {
    case 'calculatrice':
        require('vues/view_header.php');
        require('vues/view_calculatrice.php');
        require('vues/view_footer.php');
    break;
    case 'calculer':
        
        require('vues/view_header.php');
        require('vues/view_calculatrice.php');
        require('vues/view_footer.php');
    break;

}
