//Pointer les éléments du DOM
    //Boutons de la calculatrice
var numeric = document.getElementsByClassName("numeric");
var operator = document.getElementsByClassName("operator");
var btnSuppr = document.getElementById("delete");

    //Zone d'affichage
var screen = document.getElementById("calcul");
var small_calc =  document.getElementById("en_cours");

    //Historique
var save = document.getElementById("save");
var inputResultat = document.getElementById("resultat");
var tabCalcul = document.getElementById("tabCalcul");

    //Bouton enregistrement
var input = document.getElementById("inputSave");

    //Si l'écran n'est pas vide après un enregistrement
if(rechargement.value == "true"){
    bResultat =true;
    //Initilialiser la variable avec le contenu de l'écran
    nombre = screen.innerHTML;
}
else{
    initialise();
}


//Abonnement des boutons

    //Bouton supprimer
    //vide les zones de texte et réinitialise les variables
btnSuppr.addEventListener("click",function(){
    initialise();
    //On enlève le focus pour pouvoir utiliser la touche entrée du clavier
    btnSuppr.blur();
});

    //Chiffres à l'écran
        //Ajout d'un chiffre que si ce n'est pas un résultat dans la zone d'affichage 
for (const item of numeric) {
    item.addEventListener("click", function(){
        if(!bResultat){ 
            if(item.value != "."){
                nombre = addNumber(nombre, item.value) ;
            } 
            //Décimale
            //Ajout si un chiffre est déjà entré et que ce n'est pas un résultat
            else if(nombre){
                nombre = addNumber(nombre, item.value);
            }  
        }
    });
}

    //Opérateurs
for (const item of operator) {
    item.addEventListener("click", function(){
        //ajout de l'opérateur si l'écran n'est pas vide
        if(item.value != "="){
            if(screen.textContent.trim().length != 0){
                nombre = addOperator(tCalcul, nombre, item.value);
                screen.innerHTML = nombre;
            }
        }
        //Si l'opérateur est "="
        else{
            if(!bResultat && nombre && tCalcul.length>=2){
                nombre = addOperator(tCalcul, nombre, item.value);
                nombre = calculer(tCalcul);
                screen.innerHTML = nombre;      
            }
        } 
    });
}

//Pave numérique du clavier

document.addEventListener('keyup', (event) => {
    const touche = event.key;
    //Chiffres et décimale
    if ((touche>= 0 && touche<= 9) || touche ==".") {
        if(!bResultat){
            if(touche != "."){
                nombre = addNumber(nombre, touche) ;
            } 
            //Décimale
            //Ajout si un chiffre est déjà entré et que ce n'est pas un résultat
            else if(nombre){
                nombre = addNumber(nombre, touche);                    
            }
        }
    }
    //opérateurs
    else if(touche == "+" || touche =="-" || touche == "*" || touche == "/" ){
        if(screen.textContent.trim().length != 0){
            nombre = addOperator(tCalcul, nombre, touche);
            screen.innerHTML = nombre;
        }
    }
        //Si l'opérateur est "="
    else if (touche == "=" || touche == 'Enter') {
        console.log(tCalcul);
        let resulatoperator = "=";
        if(!bResultat && nombre && tCalcul.length>=2){
            console.log("enter");
            nombre = addOperator(tCalcul, nombre, resulatoperator);
            nombre = calculer(tCalcul);
            screen.innerHTML = nombre;      
        }
    }
}, false);
    
    //Sous Firefox désactivation du raccourcis clavier sur la touche "/" (recherche rapide)
document.addEventListener('keydown', (event) => {
    const touche = event.key;
    if(touche == "/"){
        event.preventDefault();
    }
});
    



//Fonctions

    //Effectue un calcul avec 3 éléments du tableau
    //IN : un tableau (tabInit)
    //OUT : une chaine de caractère
function calculer(tabInit){  
    let tComplet = [];
    //Sauvegarde du tableau complet
    for (let index = 0; index < tabInit.length; index++) {
        tComplet[index] = tabInit[index];  
    }

    // Vérification que le tableau contient au moin 3 éléments
    if(tabInit.length >= 3) {
        let nbr1 = "";
        let nbr2 = "";
        let operator = "";
        let resultat = "";
        let index = ""
        //Tant que la taille du tableau est supérieure à 1, on effectue un calcul avec les  3 élements
        //on les supprime et les remplace par le réultat du calcul
        while (tabInit.length > 1) {
            //Si il y a une multiplication dans le calcul
            if(tabInit.indexOf("*")!= -1){
                index = tabInit.indexOf("*");
                nbr1 = parseFloat(tabInit[index-1]);
                nbr2 = parseFloat(tabInit[index+1]);
                //Si il n'y a pas de divion ou qu'elle est après la multiplication on effectue la multiplication
                if( tabInit.indexOf("/") == -1 || tabInit.indexOf("*") < tabInit.indexOf("/")){
                    resultat = nbr1 * nbr2;
                } 
                //Sinon on fais la division
                else{
                    index = tabInit.indexOf("/");
                    resultat = diviser(tabInit, index);
                }              
                tabInit.splice(index-1,3,resultat);   
            }
            //Si il ny une division (et pas de miltiplication) on fait la division
            else if(tabInit.indexOf("/")!= -1){
                index = tabInit.indexOf("/");
                resultat = diviser(tabInit, index);
                tabInit.splice(index-1,3,resultat);
            }
            //On fait une addition ou une soustraction
            else{
                nbr1 = parseFloat(tabInit[0]);
                nbr2 = parseFloat(tabInit[2]);
                operator = tabInit[1].trim();
                resultat = "";
                if( operator == "+"){
                    resultat = nbr1 + nbr2;
                }
                else{
                    resultat = nbr1 - nbr2;
                }
                tabInit.splice(0,3,resultat);
            }      
        }
 
        //Affichage du bouton de sauvegarde du calcule 
        tComplet.push(' = ');
        tabCalcul.value = tComplet;
        inputResultat.value = resultat;
        //Ajout signe égal
        small_calc.innerHTML = tComplet.join('');
        //On indique que ce quie st écrit est un résultat
        bResultat = true;
        //Activation du bouton enregistrer
        input.disabled = false;
        
        //Arrondir à 2 décimales
        if (resultat.toString().indexOf(".") != -1) {
            resultat = resultat.toFixed(2);
        }
        //retourne le dernier résultat
        return  resultat;
    }         
}

    //Diviser
    //IN : Tableau, entien
    //OUT: un nombre
function diviser(tab, index){
   
    let number1 = parseFloat(tab[index-1]);
    let number2 = parseFloat(tab[index+1]);
    let result ="";
    if (number2 == 0) {
        result = 0;
    } else {
        result = number1 / number2;
    }
    return result;
}

    //Ajouter un opérateur
    //IN: tableau (tab),  2 chaines de caracteres (nb et operator)
    //OUT : string (nb)
function addOperator(tabOperator, nb, operateur){
    //désactive le bouton enregistrer
    input.disabled = true;

    let length = tabOperator.length;
    //Si la chaine n'est pas vide
    if(nb.length != 0 ){
        
        //Si le tableau est vide
        if(length == 0){
            //Dans le cas d'un rechergement après un enregistrement,on passe le booléen à false
            bResultat=false;
            //Ajouter au tableau le nombre et l'operateur
            tabOperator.push(nb);
            tabOperator.push(operateur);
            //Afficher le contenu du tableau au dessus
            small_calc.innerHTML = tabOperator.join('');
            //Vider le contenu de l'ecran et le retourner
            nb="";
            
            return nb;
        }
        //Si le tableau contient des éléments dont le dernier n'est pas un opérateur(+ - * /)
        else if(tabOperator[length - 1] != "+" || tabOperator[length - 1]!= "-" || tabOperator[length - 1]!= "*"  || tabOperator[length - 1]!= "/" ){
            //Si ce n'est pas un résultat affiché
            if(!bResultat){ 
                //et si l'opérateur n'est pas "="
                if(operateur != "="){
                    //On ajoute le nombre entré et l'opérateur
                    tabOperator.push(nb);
                    tabOperator.push(operateur);
                } 
                //Sinon,  on ajoute que le nombre
                else{
                    tabOperator.push(nb);
                }
            }
            //Si c'est un résultat qui est affiché
            else{
                //On ajoute l'opérateur
                tabOperator.push(operateur);
                //on passe le booléen à false (ce n'est plus un résultat affiché)
                bResultat=false;
            }
            //Afficher le contenu du tableau au dessus
            small_calc.innerHTML = tabOperator.join('');
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

//Initialiser les variables
function initialise(){
    bResultat = false;
    screen.innerHTML = "";
    nombre ="";
    small_calc.innerHTML="";
    tCalcul = [];
    input.disabled = true;
}