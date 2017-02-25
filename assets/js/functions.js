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
                    console.error('Erro de requisição');
                }
            }
        }

        return{
            get: function (method, url, async, setHeader) {
                xhr.open(method, url, async);
                if(setHeader) {
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                }
                xhr.onreadystatechange = stateChange();
                xhr.send();
                return xhr.responseText;
            },
            post: function (method, url, async, data, setHeader) {
                xhr.open(method, url, async);
                if(setHeader) {
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                }
                xhr.onreadystatechange = stateChange();
                xhr.send(data);
                return xhr.responseText;
            }
        };
    })();

function getJsonInfo(urlJson) {
    var info = request.get('GET', urlJson, false);
    !localStorage.getItem('potionsInfo') ? localStorage.setItem('potionsInfo', info): false;
}

function createBoxA() {
    var info = JSON.parse(localStorage.getItem('potionsInfo')),
        element = document.createElement('div'),
        figure = document.createElement('div');

    element.setAttribute('class', 'l-gridA_item');
    figure.setAttribute('class', 'm-boxA');

    for(var counter = 1; counter < 7; counter++) {
        figure.setAttribute('data-id', info.potions[counter].id);
        console.log(figure.getAttribute('data-id'));
    }
}
createBoxA();

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
    closeOpenMenu();
};

//função que chama todas as outras
document.addEventListener('DOMContentLoaded', function () {
    init();
});
