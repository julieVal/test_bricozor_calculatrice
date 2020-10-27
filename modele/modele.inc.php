<?php

function calculer($nbr1, $nbr2, $operator)
{
    switch($operator){
        case "addition":
            $resultat = $nbr1 + $nbr2;
        break;
        case "soustraction":
            $resultat = $nbr1 - $nbr2;
        break;
        case "multiplication":
            $resultat = $nbr1 * $nbr2;
        break;
        case "division":
            if($nbr2 == 0){
                $resultat = 0;
            }
            else{
                $resultat = $nbr1 / $nbr2;
            }
    }

    return $resultat;
}

function save($resultat){
    $fichier = fopen ("txt/historique.txt", "a");
    fwrite($fichier, $resultat."\n");
    fclose($fichier);
}

function read(){
    $fichier = "txt/historique.txt";

    $reponse ="";
    if(file_exists($fichier)){
      
        $historique = fopen ("txt/historique.txt", "r");
        while(!feof($historique)){
            $ligne = fgets($historique);
            $reponse .= $ligne. '<br>';
        }

        if(strlen($reponse) == 4){
            $reponse ="Aucun historique.";
        }
        
        
    }
    else{
        $reponse ="Aucun historique.";
    }

    return $reponse;
    
}

?>