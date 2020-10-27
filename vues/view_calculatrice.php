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

    <form action="<?php echo $_SERVER['PHP_SELF'].'?action=calculer'?>" method="post" class="form-group">
    
        <input class="form-control mb-2" type="text" name="nbr1" id="nbr1" pattern="^[-]?\d+(\.\d+)?" placeholder="Entrez un nombre" required value="<?php echo $nbr1; ?>">

        <select class="form-control mb-2"  name="operator" id="operator">
            <option value="addition" <?php if ($operator == 'addition') echo "selected"; ?> >+</option>
            <option value="soustraction" <?php if ($operator == 'soustraction') echo "selected"; ?>>-</option>
            <option value="multiplication" <?php if ($operator == 'multiplication') echo "selected"; ?>>*</option>
            <option value="division" <?php if ($operator == 'division') echo "selected"; ?>>/</option>
        </select>

        <input class="form-control mb-2" type="text" name="nbr2" id="nbr2" pattern="^[-]?\d+(\.\d+)?" placeholder="Entrez un nombre" required value="<?php echo $nbr2; ?>">

        <input class="btn btn-danger" type="submit" value="Calculer">
  
    </form>

    <form action="<?php echo $_SERVER['PHP_SELF'].'?action=save'?>" method="post" class="form-group <?php echo $classResultat; ?> ">
        
        <input type="text" class="bg-light form-control mb-2" value="Le résulat est <?php echo $resultat;?>" disabled >

        <input type="hidden" name="resultat" id="resultat" value="<?php echo $resultat;?>">

        <input class="btn btn-info" type="submit" value="Enregistrer le résultat">

    </form>

     <form action="<?php echo $_SERVER['PHP_SELF'].'?action=history'?>" method="post" class="form-group ">
    
        <input class="btn btn-info" type="submit" value="Voir l'historique des résultats">
        
    </form>

</div>
</div>         