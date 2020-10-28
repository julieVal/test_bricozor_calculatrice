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
        case "+":
            $resultat = $nbr1 + $nbr2;
        break;
        case "-":
            $resultat = $nbr1 - $nbr2;
        break;
        case "*":
            $resultat = $nbr1 * $nbr2;
        break;
        case "/":
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
function save(float $nbr1, float $nbr2, string $operator, float $resultat){
    $fichier = fopen ("txt/historique.txt", "a");
    $enregistrement = $nbr1." ".$operator." ".$nbr2." = ".$resultat;
    fwrite($fichier, $enregistrement."\n");
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

function saveHistory(string $tab, float $resultat){
    $fichier = fopen ("txt/historique.txt", "a");
    $enregistrement = str_replace(","," ",$tab);
    
    $enregistrement .=" = ".$resultat;
    fwrite($fichier, $enregistrement."\n");
    fclose($fichier);
}
?>