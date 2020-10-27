<div class="container-fluid">
    <div class="col-md-6 mx-auto">
    <h1>Historique des résultats</h1>
        <?php echo $historique; ?>

        <form action="<?php echo $_SERVER['PHP_SELF'].'?action=calculatrice'?>" method="post" class="form-group">
            <input class ="btn btn-info" type="submit" value="Retour à la caluclatrice">
        </form>
    </div>



</div>