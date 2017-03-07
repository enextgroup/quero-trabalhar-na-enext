var request = new XMLHttpRequest();
request.open('GET', 'assets/potions.json', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        // append
        var products = document.getElementById("products")

        for (var i in data.potions) {
            var figure = document.createElement('figure');
            var a = document.createElement('a');
            var img = document.createElement('img');
            var figCaption = document.createElement('figcaption');

            figure.appendChild(a);
            figure.appendChild(figCaption);
            a.appendChild(img);

            a.href = '#';
            img.idLightBox = `light${data.potions[i].id}`
            img.addEventListener('click', e => {
                document.getElementById(e.target.idLightBox).style.display = 'block';
            });

            img.src = `assets/products/${data.potions[i].image}`;
            figCaption.innerHTML = `${data.potions[i].name}  - <span>$ ${data.potions[i].price}</span>`;
            products.appendChild(figure);

            var lightBoxRoot = document.createElement('div');
            lightBoxRoot.id = `light${data.potions[i].id}`;
            lightBoxRoot.className = 'lightbox';
            lightBoxRoot.style.display = 'none';

            var lightBoxContent = document.createElement('div');
            lightBoxRoot.appendChild(lightBoxContent);
            lightBoxContent.className = 'lightbox-content';

            var linkLightBoxContent = document.createElement('a');
            lightBoxContent.appendChild(linkLightBoxContent);
            linkLightBoxContent.href = '#';
            linkLightBoxContent.id = `close-lightbox${data.potions[i].id}`;
            linkLightBoxContent.innerText = 'X';
            linkLightBoxContent.lightBoxToHide = lightBoxRoot.id;
            linkLightBoxContent.addEventListener('click', e => {
                document.getElementById(e.target.lightBoxToHide).style.display = 'none';
            })

            // div left
            var divLeft = document.createElement('div');
            divLeft.className = 'left';
            lightBoxContent.appendChild(divLeft);

            var figureLightBox = document.createElement('figure');
            var imgLightBox = document.createElement('img');
            imgLightBox.src = `assets/products/${data.potions[i].image}`;
            divLeft.appendChild(figureLightBox);
            figureLightBox.appendChild(imgLightBox);
            //

            // div right
            var divRight = document.createElement('div');
            divRight.className = 'right';
            lightBoxContent.appendChild(divRight);

            var nameHeader = document.createElement('h3');
            nameHeader.innerText = data.potions[i].name;
            divRight.appendChild(nameHeader);

            var effectHeader = document.createElement('h3');
            effectHeader.innerText = 'Use/effect:';
            divRight.appendChild(effectHeader);

            var effectParagraph = document.createElement('p');
            effectParagraph.innerText = data.potions[i].effect;
            divRight.appendChild(effectParagraph);

            var ingredientsHeader = document.createElement('h3');
            ingredientsHeader.innerText = 'Ingredients:';
            divRight.appendChild(ingredientsHeader);

            var ingredientsParagraph = document.createElement('p');
            divRight.appendChild(ingredientsParagraph);
            ingredientsParagraph.innerHTML = data.potions[i].ingredients.reduce((curr, next) => {
                                    return curr += next + "<br>"
                                }, '');

            divRight.innerHTML += `
                  <p class="price">Price:<br/> <span>$ ${data.potions[i].price}</span><p>
                  <button>Add to cart</button>`;
            //

            products.appendChild(lightBoxRoot);

        }
        //
    } else {
        console.log('error');
    }
};
request.onerror = function() {
    // There was a connection error of some sort
};
request.send();

//mobile menu
document.getElementById('open-menu').addEventListener('click', function() {
    document.getElementById('header-nav').style.display = 'block';
});
document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('header-nav').style.display = 'none';
});
