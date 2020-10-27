<?php

?>
<div class="container-fluid">
<h1>Ceci est une calculatrice</h1>

    <form action="<?php echo $_SERVER['PHP_SELF'].'?action=calculer'?>" method="post" class="form-group col-md-3 mx-auto">
    
        <input class="form-control mb-2" type="text" name="nbr1" id="nbr1" pattern="^[-]?[0-9]+[.]?[0-9]+" placeholder="Entrez un nombre" required>

        <select class="form-control mb-2"  name="operator" id="operator">
            <option value="addition">+</option>
            <option value="soustraction">-</option>
            <option value="multiplication">*</option>
            <option value="division">/</option>
        </select>

        <input class="form-control mb-2" type="text" name="nbr2" id="nbr2" pattern="^[-]?[0-9]+[.]?[0-9]+" placeholder="Entrez un nombre" required>

        <input class="btn btn-danger" type="submit" value="Caluler">
       
    </form>

</div>
           