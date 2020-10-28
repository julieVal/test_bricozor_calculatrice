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
        <p class="text-light"> Veuillez entrer 2 nombres, choisir l'opérateur de calcul et cliquer sur "Calculer"</p>
        <!-- Formulaire de la calculatrice -->
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