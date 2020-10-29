//Pointer les éléments du DOM
    //Boutons de la calculatrice
var calc1 = document.getElementById("1");
var calc2 = document.getElementById("2");
var calc3 = document.getElementById("3");
var calc4 = document.getElementById("4");
var calc5 = document.getElementById("5");
var calc6 = document.getElementById("6");
var calc7 = document.getElementById("7");
var calc8 = document.getElementById("8");
var calc9 = document.getElementById("9");
var calc0 = document.getElementById("0");
var calcAdd = document.getElementById("+");
var calcSous = document.getElementById("-");
var calcDiv = document.getElementById("/");
var calcMulti = document.getElementById("*");
var calcResultat = document.getElementById("=");
var calcDec = document.getElementById("virgule");
var btnSuppr = document.getElementById("delete");

    //Zone d'affichage
var screen = document.getElementById("calcul");
var small_calc =  document.getElementById("en_cours");
var tCalcul = [];
var nombre = "";

    //booléen
var bResultat =false;

    //Historique
var save = document.getElementById("save");
var inputResultat = document.getElementById("resultat");
var tabCalcul = document.getElementById("tabCalcul");
        //Si l'écran n'est pas vide après un enregistrement
if(rechargement.value == "true"){
    bResultat =true;
    //Initilialiser la variable avec le contenu de l'écran
    nombre = screen.innerHTML;
}

//Bouton enregistrement
var input = document.getElementById("inputSave");
    //Désactivé par défaut
input.disabled = true;

//Abonnement des boutons
    //Chiffres
        //Ajout d'un chiffre que si ce n'est pas un résultat dans la zone d'affichage 
calc1.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc1.value) ;
    }   
});
calc2.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc2.value) ;
    }
});
calc3.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc3.value) ;
    }
});
calc4.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc4.value) ;
    }
});
calc5.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc5.value) ;
    }
});
calc6.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc6.value) ;
    }
});
calc7.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc7.value) ;
    }
});
calc8.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc8.value) ;
    }
});
calc9.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc9.value) ;
    }
});
calc0.addEventListener("click", function(){
    if(!bResultat){
        nombre = addNumber(nombre, calc0.value) ;
    }
});

    //Opérateurs
        //ajout de l'opérateur si l'écran n'est pas vide
calcAdd.addEventListener("click", function(){
    if(screen.textContent.trim().length != 0){
        nombre = addOperator(tCalcul, nombre, calcAdd.value);
        screen.innerHTML = nombre;
    }
});
calcSous.addEventListener("click", function(){
    if(screen.textContent.trim().length != 0){
        nombre = addOperator(tCalcul, nombre, calcSous.value);
        screen.innerHTML = nombre;
    }
});
calcDiv.addEventListener("click", function(){
    if(screen.textContent.trim().length != 0){
        nombre = addOperator(tCalcul, nombre, calcDiv.value);
        screen.innerHTML = nombre;
    }
});
calcMulti.addEventListener("click", function(){
    if(screen.textContent.trim().length != 0){
        nombre = addOperator(tCalcul, nombre, calcMulti.value);
        screen.innerHTML = nombre;
    }
});

    //Décimale
        //Ajout si un chiffre est déjà entré et que ce n'est pas un résultat
calcDec.addEventListener("click", function(){
    if(nombre && !bResultat){
        nombre = addNumber(nombre, calcDec.value);
        screen.innerHTML = nombre;
    } 
});

    //Bouton égale "="
        //Les fonctions sont lancées si ce n'est pas un résultat qui est affiché et si il y a au moin 2 éléments dans le tableau de calcul
calcResultat.addEventListener("click", function(){
    if(!bResultat && nombre && tCalcul.length>=2){
        nombre = addOperator(tCalcul, nombre, calcResultat.value);
        nombre = calculer(tCalcul);
        screen.innerHTML = nombre;      
    }
});

    //Bouton supprimer
        //vide les zones de texte et réinitialise les variables
btnSuppr.addEventListener("click",function(){
    bResultat =false;
    screen.innerHTML = "";
    nombre ="";
    small_calc.innerHTML="";
    tCalcul = [];
    input.disabled = true;
});

//Fonctions

    //Effectue un calcul sur les 3 premiers élements du tableau
    //IN : un tableau (tab)
    //OUT : un nombre (tab[0])
function calculer(tab){  
    let tComplet = [];
    //Sauvegarde du tableau complet
    for (let index = 0; index < tab.length; index++) {
        tComplet[index] = tab[index];  
    }

    // Vérification que le tableau contient au moin 3 éléments
    if(tab.length >= 3) {
        let nbr1 = "";
        let nbr2 = "";
        let operator = "";
        let resultat = "";
        let index = ""
        //Tant que la taille du tableau est supérieure à 1, on effectue un calcul avec les  3 élements
        //on les supprime et les remplace par le réultat du calcul
        while (tab.length > 1) {
            //Si il y a une multiplication dans le calcul
            if(tab.indexOf("*")!= -1){
                index = tab.indexOf("*");
                nbr1 = parseFloat(tab[index-1]);
                nbr2 = parseFloat(tab[index+1]);
                //Si il n'y a pas de divion ou qu'elle est après la multiplication on effectue la multiplication
                if( tab.indexOf("/") == -1 || tab.indexOf("*") < tab.indexOf("/")){
                    resultat = nbr1 * nbr2;
                    tab.splice(index-1,3,resultat);
                } 
                //Sinon on fais la division
                else{
                    index = tab.indexOf("/");
                    nbr1 = parseFloat(tab[index-1]);
                    nbr2 = parseFloat(tab[index+1]);
                    if (nbr2 == 0) {
                        resultat = 0;
                        tab.splice(index-1,3,resultat);

                    } else {
                        resultat = nbr1 / nbr2;
                        tab.splice(index-1,3,resultat);
                    }
                }              
                
            }
            //Si il ny une division (et pas de miltiplication) on fait la division
            else if(tab.indexOf("/")!= -1){
                index = tab.indexOf("/");
                nbr1 = parseFloat(tab[index-1]);
                nbr2 = parseFloat(tab[index+1]);
                if (nbr2 == 0) {
                    resultat = 0;
                    tab.splice(index-1,3,resultat);
                } else {
                    resultat = nbr1 / nbr2;
                    tab.splice(index-1,3,resultat);
                }
               
            }
            //On fait une addition ou une soustraction
            else{
                nbr1 = parseFloat(tab[0]);
                nbr2 = parseFloat(tab[2]);
                operator = tab[1].trim();
                resultat = "";
                switch (operator) {
                    case "+":
                        resultat = nbr1 + nbr2;
                        tab.splice(0,3,resultat);
                    break;
                    case "-":
                        resultat = nbr1 - nbr2;
                        tab.splice(0,3,resultat);
                    break;
                }
            }      
        }
 
        //Affichage du bouton de sauvegarde du calcule 
        tabCalcul.value = tComplet;
        inputResultat.value = tab[0];
    
        //On indique que ce quie st écrit est un résultat
        bResultat = true;
        //Activation du bouton enregistrer
        input.disabled = false;
        //retourne le dernier résultat
        return  tab[0];
    }         
}

    //Ajouter un opérateur
    //IN: tableau (tab),  2 chaines de caracteres (nb et operator)
    //OUT : string (nb)
function addOperator(tab, nb, operateur){
    //désactive le bouton enregistrer
    input.disabled = true;

    let length = tab.length;
    //Si la chaine n'est pas vide
    if(nb.length != 0 ){
        
        //Si le tableau est vide
        if(length == 0){
            //Dans le cas d'un rechergement après un enregistrement,on passe le booléen à false
            bResultat=false;
            //Ajouter au tableau le nombre et l'operateur
            tab.push(nb);
            tab.push(operateur);
            //Afficher le contenu du tableau au dessus
            small_calc.innerHTML = tab.join('');
            //Vider le contenu de l'ecran et le retourner
            nb="";
            
            return nb;
        }
        //Si le tableau contient des éléments dont le dernier n'est pas un opérateur(+ - * /)
        else if(tab[length - 1] != "+" || tab[length - 1]!= "-" || tab[length - 1]!= "*"  || tab[length - 1]!= "/" ){
            //Si ce n'est pas un résultat affiché
            if(!bResultat){ 
                //et si l'opérateur n'est pas "="
                if(operateur != "="){
                    //On ajoute le nombre entré et l'opérateur
                    tab.push(nb);
                    tab.push(operateur);
                } 
                //Sinon,  on ajoute que le nombre
                else{
                    tab.push(nb);
                }
            }
            //Si c'est un résultat qui est affiché
            else{
                //On ajoute l'opérateur
                tab.push(operateur);
                //on passe le booléen à false (ce n'est plus un résultat affiché)
                bResultat=false;
            }
            //Afficher le contenu du tableau au dessus
            small_calc.innerHTML = tab.join('');
            //Vider le contenu de l'ecran et le retourner
            nb="";
            return nb;
        }
    }

}

    //Ajouter un nombre
    //IN: string (nb et value)
    //OUT : string (nb)
function addNumber(nb, value){
    //désactive le bouton enregistrer
    input.disabled = true;
    //Initilisation d'un booléen
    let flag =false;
    //Si la valeur n'est pas une décimale
    if(value != "."){
       flag = true;
    }
    //Si une décimale n'est pas déjà présente dans la chaine nb
    else if(nb.indexOf(".") == -1){
        flag = true;
    }
    //Booléen vaut true
    if(flag){
        //On concatène la value dans nb
        nb+=value ;
        //Affichage du contenu et on le retourne
        screen.innerHTML = nb; 
        return nb;
    }
    else{
        //Retourne nb sans modification
        return nb;
    }
}