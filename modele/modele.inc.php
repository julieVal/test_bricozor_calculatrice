<?php

/**
 * calculer un résultat avec 2 nombres et un opérateur
 *
 * @param float $nbr1
 * @param float $nbr2
 * @param string $operator
 * @return void
 */
function calculer(float $nbr1,float $nbr2,string $operator)
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

/**
 * Sauvegarder un résultat dans un fichier txt
 *
 * @param float $resultat
 * @return void
 */
function save(float $resultat){
    $fichier = fopen ("txt/historique.txt", "a");
    fwrite($fichier, $resultat."\n");
    fclose($fichier);
}

/**
 * lire le fichier txt et renvoyer un response avec la liste de son contenu
 *
 * @return void
 */
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