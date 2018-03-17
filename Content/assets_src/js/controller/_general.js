/*
|--------------------------------------------------------------------------
| Geral
|--------------------------------------------------------------------------
*/

var resquest = new XMLHttpRequest(),
    jsonProdutos;
    resquest.overrideMimeType('application/json');
    resquest.open("GET", "http://localhost:8000/Content/assets_src/js/vendor/potions.json", true);
    resquest.send();

    //abrir modal
    var modal = document.getElementById('modal-bg');

    function abrirModalProduto(potionId) {

        modal.style.display = "block";

        // popular modal com infos do produto clicado
        var infoProdutoModal = jsonProdutos.potions[potionId];
        document.getElementById("potionImage").src = 'Content/assets/images/products/' + infoProdutoModal.image;
        document.querySelector("#modal-bg").querySelector(".potionTitle").innerHTML = infoProdutoModal.name;

        var ingredients, text, ingredientsLenght, i;
        ingredients = infoProdutoModal.ingredients;
        ingredientsLenght = ingredients.length;
        for (i = 0; i < ingredientsLenght; i++) {
            text += ingredients[i] + "<br>";
        }

        document.querySelector("#modal-bg").querySelector(".ingredients").innerHTML = text;
        document.querySelector("#modal-bg").querySelector(".useeffect").innerHTML = infoProdutoModal.effect;
        document.querySelector("#modal-bg").querySelector(".price").innerHTML = '$' + infoProdutoModal.price;
    }

    // fechar modal no click do X ou ao clicar fora da modal
    var span = document.getElementsByClassName("fechar_modal")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    //menu mobile
    function abrirMenuMobile() {
        var element = document.getElementById('menuHamburger');
        var menuMobile = document.getElementById('menu_mobile');

        if (menuMobile.classList && element.classList) {
            element.classList.toggle('is-active');
            menuMobile.classList.toggle('is-active');
        }
    }

    resquest.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        jsonProdutos = JSON.parse(this.responseText);

        // funcao adicionar infos nas thumbnails
        for (var i in jsonProdutos) {
            for (potions in jsonProdutos[i]) {
                var infoProduto = jsonProdutos[i][potions];
                document.getElementById('produtos').insertAdjacentHTML('beforeend', '<div class="col-xs-6 col-sm-4 produto text-center" id="' + infoProduto.id + '" onclick="abrirModalProduto(this.id)"> <img src="Content/assets/images/products/' + infoProduto.image + '" alt="' + infoProduto.name + ' Foto" title="' + infoProduto.name + '"/> <div class="info_geral-produto"><h3>' + infoProduto.name + '</h3> - <span class="price cor-primaria"> $' + infoProduto.price + '</span></div> </div>');
            }
        }

        // funcao adicionar pocoes no link do menu
        for (var i in jsonProdutos) {
            for (potions in jsonProdutos[i]) {
                var infoProduto = jsonProdutos[i][potions];
                document.getElementById('menuPotions').insertAdjacentHTML('beforeend', '<li><a href="#">' + infoProduto.name + '</li></a>');
            }
        }

    }
};
