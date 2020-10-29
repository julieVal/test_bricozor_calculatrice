<?php

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

/**
 * sauvegarder un calcul et son résultat dans un fichier txt
 *
 * @param string $tab
 * @param float $resultat
 * @return void
 */
function saveHistory(string $tab, float $resultat){
    $fichier = fopen ("txt/historique.txt", "a");
    $enregistrement = str_replace(","," ",$tab);
    $enregistrement = str_replace(". ",".0",$enregistrement);
    $enregistrement .=" = ".$resultat;
    fwrite($fichier, $enregistrement."\n");
    fclose($fichier);
}
?>