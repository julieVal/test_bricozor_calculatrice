console.log ("ok");

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
var calcDec = document.getElementById(".");

    //Zone d'affichage
var screen = document.getElementById("calcul");
var small_calc =  document.getElementById("en_cour");
var tCalcul = [];
var nombre = "";

    //booléen
var bResultat =false;
//Abonnement des boutons
calc1.addEventListener("click", function(){
    nombre = addNumber(nombre, calc1.value) ;

});
calc2.addEventListener("click", function(){
    nombre = addNumber(nombre, calc2.value) ;
});
calc3.addEventListener("click", function(){
    nombre = addNumber(nombre, calc3.value) ;
});
calc4.addEventListener("click", function(){
    nombre = addNumber(nombre, calc4.value) ;
});
calc5.addEventListener("click", function(){
    nombre = addNumber(nombre, calc5.value) ;
});
calc6.addEventListener("click", function(){
    nombre = addNumber(nombre, calc6.value) ;
});
calc7.addEventListener("click", function(){
    nombre = addNumber(nombre, calc7.value) ;
});
calc8.addEventListener("click", function(){
    nombre = addNumber(nombre, calc8.value) ;
});
calc9.addEventListener("click", function(){
    nombre = addNumber(nombre, calc9.value) ;
});
calc0.addEventListener("click", function(){
    nombre = addNumber(nombre, calc0.value) ;
});
calcAdd.addEventListener("click", function(){
    nombre = addOperator(tCalcul, nombre, calcAdd.value);
    screen.innerHTML = nombre;
});
calcSous.addEventListener("click", function(){
    nombre =addOperator(tCalcul, nombre, calcSous.value);
    screen.innerHTML = nombre;
});
calcDiv.addEventListener("click", function(){
    nombre = addOperator(tCalcul, nombre, calcDiv.value);
    screen.innerHTML = nombre;
});
calcMulti.addEventListener("click", function(){
    nombre = addOperator(tCalcul, nombre, calcMulti.value);
    screen.innerHTML = nombre;
});
calcDec.addEventListener("click", function(){
    nombre = addNumber(nombre, calcDec.value) ;
});
calcResultat.addEventListener("click", function(){
    addOperator(tCalcul, nombre, calcResultat.value);
    nombre="";
    nombre = calculer(tCalcul);
    
});

//Fonctions
function calculer(tab){
    while (tab.length > 1) {
        console.log(tab);
        let nbr1 = parseFloat(tab[0]);
        let nbr2 = parseFloat(tab[2]);
        let operator = tab[1].trim();
        let resultat = "";
        switch (operator) {
            case "+":
                resultat = nbr1 + nbr2;
                tab.splice(0,3,resultat);
                console.log(tab);
            break;
            case "-":
                resultat = nbr1 - nbr2;
                tab.splice(0,3,resultat);
            break;
            case "*":
                resultat = nbr1 * nbr2;
                tab.splice(0,3,resultat);
            break;
            case "/":
                if (nbr2 == 0) {
                    resultat = 0;
                    tab.splice(0,3,resultat);
                } else {
                    resultat = nbr1 / nbr2;
                    tab.splice(0,3,resultat);
                }
            break;
        }
    }
    
    screen.innerHTML = tab[0];
    bResultat = true;
    
}

function addOperator(tab, nb, operateur){
    if(!bResultat){
        tab.push(nb);
    }
    bResultat = false;
    if(operateur != "=" ){
        tab.push(operateur);
    }
    
    small_calc.innerHTML = tab.join('');

    nb="";
    return nb;
    
}

function addNumber(nb, value){
    nb+=value ;
    screen.innerHTML = nb; 
    return nb; 
}
