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
var tCalcul = [];
var nombre = "";
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
    addOperator(tCalcul, nombre, calcAdd.value);
    screen.innerHTML = nombre;
});
calcSous.addEventListener("click", function(){
    addOperator(tCalcul, nombre, calcSous.value);
    screen.innerHTML = nombre;
});
calcDiv.addEventListener("click", function(){
    addOperator(tCalcul, nombre, calcDiv.value);
    screen.innerHTML = nombre;
});
calcMulti.addEventListener("click", function(){
    addOperator(tCalcul, nombre, calcMulti.value);
    screen.innerHTML = nombre;
});
calcDec.addEventListener("click", function(){
    nombre = addNumber(nombre, calcDec.value) ;
});
calcResultat.addEventListener("click", function(){
    addOperator(tCalcul, nombre, calcResultat.value);
    let calcul = calculer(tCalcul);
    screen.innerHTML = calcul;
});

//Fonctions
function calculer(tab){
    let nbr1 = parseFloat(tab[0]);
    let nbr2 = parseFloat(tab[2]);
    let operator = tab[1].trim();
    let resulat = "";
    switch (operator) {
        case "+":
            resulat = nbr1 + nbr2;
        break;
        case "-":
            resulat = nbr1 - nbr2;
        break;
        case "*":
            resulat = nbr1 * nbr2;
        break;
        case "/":
            if (nbr2 == 0) {
                resulat = 0;
            } else {
                resulat = nbr1 / nbr2;
            }
        break;
    }
    console.log(resulat);
    //Arrondir à 2 chiffres après la virgule
    return resulat;
}

function addOperator(tab, nb, operateur){
    tab.push(nb);
    if(operateur != "="){
        tab.push(operateur);
    }
    console.log(tab);
    return nb="";
    
}

function addNumber(nb, value){
    nb+=value ;
    screen.innerHTML = nb; 
    return nb; 
}
