<?php
//Si une opératin a déjà été saisie, on les conserve et les place dans le formulaire
if(isset($_POST['nbr1']) && isset($_POST['nbr2']) && isset($_POST['operator'])){
    $nbr1 = $_POST['nbr1'];
    $nbr2 = $_POST['nbr2'];
    $operator = $_POST['operator'];
    //affichage du résultat
    $classResultat ="d-block";
}
else{
    $nbr1 = null;
    $nbr2 = null;
    $operator = null;
    $classResultat ="d-none";
}
?>
<div class="bg-secondary w-100" style="height: 100vh;">
    <div class="container-fluid col-md-6 mx-auto pt-5">
        <h1>Ceci est une calculatrice</h1>
        <!--
        <p class="text-light"> Veuillez entrer 2 nombres, choisir l'opérateur de calcul et cliquer sur "Calculer"</p> 
        -->
        <!-- Formulaire de la calculatrice -->
        <!--
        <form action="<?php echo $_SERVER['PHP_SELF'].'?action=calculer'?>" method="post" class="form-group">
        
            <input class="form-control mb-2" type="text" name="nbr1" id="nbr1" pattern="^[-]?\d+(\.\d+)?" placeholder="Entrez un nombre" required value="<?php echo $nbr1; ?>">

            <select class="form-control mb-2"  name="operator" id="operator">
                <option value="+" <?php if ($operator == '+') echo "selected"; ?> >+</option>
                <option value="-" <?php if ($operator == '-') echo "selected"; ?>>-</option>
                <option value="*" <?php if ($operator == '*') echo "selected"; ?>>*</option>
                <option value="/" <?php if ($operator == '/') echo "selected"; ?>>/</option>
            </select>

            <input class="form-control mb-2" type="text" name="nbr2" id="nbr2" pattern="^[-]?\d+(\.\d+)?" placeholder="Entrez un nombre" required value="<?php echo $nbr2; ?>">

            <input class="btn btn-danger" type="submit" value="Calculer">
    
        </form>
        -->

        <!-- Nouveau visuel calculatrice -->
        <div class="calculatrice col-lg-8 mx-auto">
            <div id="en_cour" class="text-light"></div>
            <div class="calcul bg-light" id="calcul" style="height: 30px";> </div>
            <div class="row">
                <input type="button" class="btn btn-primary col-3" id="7" value="7">
                <input type="button" class="btn btn-primary col-3" id="8" value="8">
                <input type="button" class="btn btn-primary col-3" id="9" value="9">
                <input type="button" class="btn btn-primary col-3" id="/" value="/">
            </div>
            <div class="row">
                <input type="button" class="btn btn-primary col-3" id="4" value="4">
                <input type="button" class="btn btn-primary col-3" id="5" value="5">
                <input type="button" class="btn btn-primary col-3" id="6" value="6">
                <input type="button" class="btn btn-primary col-3" id="*" value="*">
            </div>
            <div class="row">
                <input type="button" class="btn btn-primary col-3" id="1" value="1">
                <input type="button" class="btn btn-primary col-3" id="2" value="2">
                <input type="button" class="btn btn-primary col-3" id="3" value="3">
                <input type="button" class="btn btn-primary col-3" id="-" value="-">
            </div>
            <div class="row">
                <input type="button" class="btn btn-primary col-3" id="." value=".">
                <input type="button" class="btn btn-primary col-3" id="0" value="0">
                <input type="button" class="btn btn-primary col-3" id="=" value="=">
                <input type="button" class="btn btn-primary col-3" id="+" value="+">
            </div>
    


        </div>
        <!-- Affichage et enregistrement du résultat -->
        <form action="<?php echo $_SERVER['PHP_SELF'].'?action=save'?>" method="post" class="form-group <?php echo $classResultat; ?> ">
            
            <input type="text" class="bg-light form-control mb-2" value="Le résulat est <?php echo $resultat;?>" disabled >

            <input type="hidden" name="resultat" id="resultat" value="<?php echo $resultat;?>">

            <input type="hidden" name="nbr1" id="nbr1" value="<?php echo $nbr1;?>">
            <input type="hidden" name="nbr2" id="nbr2" value="<?php echo $nbr2;?>">
            <input type="hidden" name="operator" id="operator" value="<?php echo $operator;?>">

            <!-- Enregistrer le résultat et retour à la calculatrice vide -->
            <input class="btn btn-info" type="submit" value="Enregistrer le résultat">

        </form>

        <!-- formulaire d'accès à l'historique -->
        <form action="<?php echo $_SERVER['PHP_SELF'].'?action=history'?>" method="post" class="form-group ">
        
            <input class="btn btn-info" type="submit" value="Voir l'historique des résultats">
            
        </form>

    </div>
</div>         