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

    //Historique
var save = document.getElementById("save");
var inputResultat = document.getElementById("resultat");
var tabCalcul = document.getElementById("tabCalcul");


    //booléen
var bResultat =false;

//Abonnement des boutons
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
calcAdd.addEventListener("click", function(){
    if(nombre){
        nombre = addOperator(tCalcul, nombre, calcAdd.value);
        screen.innerHTML = nombre;
    }

});
calcSous.addEventListener("click", function(){
    if(nombre){
        nombre = addOperator(tCalcul, nombre, calcSous.value);
        screen.innerHTML = nombre;
    }
});
calcDiv.addEventListener("click", function(){
    if(nombre){
        nombre = addOperator(tCalcul, nombre, calcDiv.value);
        screen.innerHTML = nombre;
    }
});
calcMulti.addEventListener("click", function(){
    if(nombre){
        nombre = addOperator(tCalcul, nombre, calcMulti.value);
        screen.innerHTML = nombre;
    }
});
calcDec.addEventListener("click", function(){
    if(nombre && !bResultat){
        nombre = addNumber(nombre, calcDec.value);
        screen.innerHTML = nombre;
    }
    
});
calcResultat.addEventListener("click", function(){
    if(!bResultat && nombre && tCalcul.length>=2){
        nombre = addOperator(tCalcul, nombre, calcResultat.value);
        nombre = calculer(tCalcul);
        screen.innerHTML = nombre;      
    }
});

//Fonctions
function calculer(tab){  
    let tComplet = [];
    for (let index = 0; index < tab.length; index++) {
        tComplet[index] = tab[index];  
    }

    if(tab.length >= 3) {
        while (tab.length > 1) {
            let nbr1 = parseFloat(tab[0]);
            let nbr2 = parseFloat(tab[2]);
            let operator = tab[1].trim();
            let resultat = "";
            switch (operator) {
                case "+":
                    resultat = nbr1 + nbr2;
                    tab.splice(0,3,resultat);
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
 
        save.className = "d-block";
        tabCalcul.value = tComplet;
        inputResultat.value = tab[0];
        bResultat = true;
        return  tab[0];
    }         
}
    
function addOperator(tab, nb, operateur){
    save.className = "d-none";
    let length = tab.length;
    if(nb.length != 0 ){
        if(length == 0){
            tab.push(nb);
            tab.push(operateur);
            small_calc.innerHTML = tab.join('');
            nb="";
            return nb;
        }
        else if(tab[length - 1] != "+" || tab[length - 1]!= "-" || tab[length - 1]!= "*"  || tab[length - 1]!= "/" ){
            if(!bResultat){ 
                if(operateur != "="){
                    tab.push(nb);
                    tab.push(operateur);
                } 
                else{
                    tab.push(nb);
                }
            }
            else{
                bResultat=false;
                tab.push(operateur);
            }
            small_calc.innerHTML = tab.join('');
            nb="";
            return nb;
        }
    }
    else{
        nb="";
    } 
}

function addNumber(nb, value){
    let flag =false;
    if(value != "."){
       flag = true;
    }
    else if(nb.indexOf(".") == -1){
        console.log("virgule");
        flag = true;
    }
    if(flag){
        nb+=value ;
        screen.innerHTML = nb; 
        return nb;
    }
    else{
        return nb;
    }
}


