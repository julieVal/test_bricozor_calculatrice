<?php

?>
<div class="bg-secondary w-100" style="height: 100vh;">
    <div class="container-fluid col-md-6 mx-auto pt-5">
        <h1>Ceci est une calculatrice</h1>

        <!--  visuel calculatrice -->
        <div class="calculatrice col-lg-8 col-sm-10 mx-auto">
            <!-- Zone d'affichage-->
            <div id="en_cour" class="text-light" style="height: 30px";><?php echo $tabCalcul ?></div>
            <div class="row">
                <div class="calcul bg-light col-10 mx-auto" id="calcul" style="height: 50px"; value="<?php echo $resultat ?>"> <?php echo $resultat ?></div>
               
            </div>
            <!-- Pavé numérique-->
            <div class="row mt-2">
                <input type="button" class="btn btn-warning col-6" id="delete" value="Annuler">
            </div>
            <div class="pave row mt-1">
                <input type="button" class="btn btn-light col-3" id="7" value="7">
                <input type="button" class="btn btn-light col-3" id="8" value="8">
                <input type="button" class="btn btn-light col-3" id="9" value="9">
                <input type="button" class="btn btn-dark col-3" id="/" value="/">
            </div>
            <div class="pave row">
                <input type="button" class="btn btn-light col-3" id="4" value="4">
                <input type="button" class="btn btn-light col-3" id="5" value="5">
                <input type="button" class="btn btn-light col-3" id="6" value="6">
                <input type="button" class="btn btn-dark col-3" id="*" value="*">
            </div>
            <div class=" pave row">
                <input type="button" class="btn btn-light col-3" id="1" value="1">
                <input type="button" class="btn btn-light col-3" id="2" value="2">
                <input type="button" class="btn btn-light col-3" id="3" value="3">
                <input type="button" class="btn btn-dark col-3" id="-" value="-">
            </div>
            <div class="pave row">
                <input type="button" class="btn btn-light col-3" id="." value=".">
                <input type="button" class="btn btn-light col-3 border-light" id="0" value="0">
                <input type="button" class="btn btn-success col-3" id="=" value="=">
                <input type="button" class="btn btn-dark col-3" id="+" value="+">
            </div>
        </div>

        <!-- enregistrement du résultat -->
        <div id="save" class="d-none">
            <form action="<?php echo $_SERVER['PHP_SELF'].'?action=saveHistory'?>" method="post" class="form-group">
                <input class="btn btn-info" type="submit" value="Enregistrer le résultat">
                <input type="hidden" name="resultat" id="resultat" value="">
                <input type="hidden" name="tabCalcul" id="tabCalcul" value="">
            </form>
        </div>
        
        <!-- formulaire d'accès à l'historique -->
        <div class="col-lg-8 mt-3 text-center mx-auto">
            <form action="<?php echo $_SERVER['PHP_SELF'].'?action=history'?>" method="post" class="">
                <input class="btn btn-info col-10 " type="submit" value="Voir l'historique des résultats"> 
            </form>
        </div>
    </div>
</div>         