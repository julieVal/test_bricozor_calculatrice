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

?>