//funções iniciais
var getId = function (el) {
        return document.getElementById(el);
    },
    detectIe = (function () {
        //classe que detecta navegadores IE em geral
        window.navigator.userAgent.match('Trident') ? true : false;
    })(),
    getAll = function(el){
        var item = document.querySelectorAll(el),
            itemArray = [].slice.call(item);

        return itemArray;
    },
    getElem = function (elem) {
        return document.querySelector(elem);
    },
    addClass = function (el, className) {
        return el.classList.add(className);
    },
    removeClass = function (el, className) {
        el.classList.remove(className);
    },
    toggleClass = function (el, className) {
        el.classList.toggle(className);
    },
    request = (function () {
        var xhr = new XMLHttpRequest();

        function stateChange() {
            if (xhr.readyState === 4) {
                // 4 = "loaded"
                if (xhr.status === 200) {
                    // 200 = OK
                    // ...our code here...
                    return xhr.response;
                } else {
                    console.error('Erro de requisição:' + xhr.status);
                }
            }
        }

        return{
            get: function (method, url) {
                xhr.open(method, url, false);
                xhr.onreadystatechange = stateChange();
                xhr.send();
                return xhr.responseText;
            }
        };
    })();

function getJsonInfo(urlJson) {
    var info;

    if(!localStorage.getItem('potionsInfo')){
        info = request.get('GET', urlJson, false);
        localStorage.setItem('potionsInfo', info)
    }
}

function createBox() {
    var getInfo = JSON.parse(localStorage.getItem('potionsInfo')),
        info = getInfo.potions,
        box;

    function mountedBox(idValue, imgSource, potionName, potionValue) {
        //criação de elementos
        this.element = document.createElement('div');
        this.figureBox = document.createElement('figure');
        this.wrap = document.createElement('div');
        this.img = document.createElement('img');
        this.content = document.createElement('figcaption');
        this.contentText = document.createElement('p');
        this.contentValue = document.createElement('span');

        //setando atributos necessários para os elementos
        this.element.setAttribute('class', 'l-gridA_item');
        this.figureBox.setAttribute('class', 'm-boxA');
        this.wrap.setAttribute('class', 'm-boxA_wrap');
        this.img.setAttribute('class', 'm-boxA_wrap_img');
        this.content.setAttribute('class', 'm-boxA_content');
        this.contentText.setAttribute('class', 'm-boxA_content_text');
        this.contentValue.setAttribute('class', 'm-boxA_content_value');

        //criação de atributos e textos de acordo com objeto
        this.figureBox.setAttribute('data-id', idValue);
        this.img.setAttribute('src', 'assets/img/' + imgSource);
        this.img.setAttribute('alt', potionName);
        this.wrap.appendChild(this.img);
        this.figureBox.appendChild(this.wrap);
        this.contentText.innerText = potionName + ' - ';
        this.contentValue.innerText = '$' + potionValue;
        this.contentText.appendChild(this.contentValue);
        this.content.appendChild(this.contentText);
        this.figureBox.appendChild(this.content);
        this.element.appendChild(this.figureBox);

        return this.element;
    }

    for(var counter = 0; counter < Object.keys(info).length; counter++) {
        box = new mountedBox(info[counter+1].id, info[counter+1].image, info[counter+1].name, info[counter+1].price);

        getId('l-grid').appendChild(box);
    }
}

function closeOpenMenu() {
    var width;
    getId('l-header_iconMenu').addEventListener('click', function () {
        width = window.innerWidth;
        width <= 767 ? toggleClass(getId('l-header'), 's-menuOpen') : false;
    });

    window.addEventListener('resize', function () {
        width = window.innerWidth;
        width >= 768 ? removeClass(getId('l-header'), 's-menuOpen') : false;
    })
}

//chamadas de funções
var init = function () {
    getJsonInfo('https://raw.githubusercontent.com/enextgroup/quero-trabalhar-na-enext/master/assets/potions.json');
    createBox();
    closeOpenMenu();
};

//função que chama todas as outras
document.addEventListener('DOMContentLoaded', function () {
    init();
});
