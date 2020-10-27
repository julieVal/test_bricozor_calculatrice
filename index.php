<?php
require_once("modele/modele.inc.php");
session_start();

// Initialisation des variables

$action = 'calculatrice';
/*
echo'Session ';var_dump ($_SESSION);
echo'Post ';var_dump($_POST);
echo'GET ';var_dump($_GET);
echo'files ';var_dump($_FILES);
echo "userID : ".$userID.'</br>';
*/
// Etapes et traitements
switch ($action) {
    case 'calculatrice':
    
}
require('vues/view_header.php');
require('vues/view_calculatrice.php');
require('vues/view_footer.php');