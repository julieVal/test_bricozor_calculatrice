<div class="bg-secondary w-100" style="height: 100vh;">
    <div class="container-fluid pt-5">
        <div class="col-md-6 mx-auto">
            <h1>Historique des résultats</h1>
            <!-- affichage de l'historique -->
            <div class="bg-light text-dark rounded">
                <p class="pl-2 pt-1"><?php echo $historique; ?></p>
            </div>

            <!-- Retour vers la calculatrice vide -->
            <form action="<?php echo $_SERVER['PHP_SELF'].'?action=calculatrice'?>" method="post" class="form-group">
                <input class ="btn btn-info" type="submit" value="Retour à la calculatrice">
            </form>
        </div>
    </div>
</div>