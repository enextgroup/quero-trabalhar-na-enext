$(document).ready(function(){

var json =
{
  "potions": {
    "1": {
      "id": 1,
      "name": "Aging Potion",
      "image": "aging-potion.png",
      "price": 29.99,
      "effect": "Causes the drinker to advance in age",
      "ingredients": [
        "Red Wine",
        "Prune Juice",
        "Hairy Fungus",
        "Tortoise Shell",
        "Caterpillar",
        "Bat Tongue"
      ]
    },
    "2": {
      "id": 2,
      "name": "Bulgeye Potion",
      "image": "bulgeye-potion.png",
      "price": 19.99,
      "effect": "It affects one's eyes, causing them to swell",
      "ingredients": [
        "Beetle eyes",
        "Eel eyes"
      ]
    },
    "3": {
      "id": 3,
      "name": "Dragon Tonic",
      "image": "dragon-tonic.png",
      "price": 64.99,
      "effect": "A tonic used to cure sick dragons",
      "ingredients": [
        "Eagle Owl feathers",
        "Peacock feathers",
        "Giant Purple Toad warts"
      ]
    },
    "4": {
      "id": 4,
      "name": "Love Potion",
      "image": "love-potion.png",
      "price": 29.99,
      "effect": "The one who drinks it falls deeply in love with the first person they see",
      "ingredients": [
        "Petals from a red rose",
        "Essence of violet",
        "Canary flight and down feathers",
        "Newt eyes"
      ]
    },
    "5": {
      "id": 5,
      "name": "Polyjuice Potion",
      "image": "polyjuice-potion.png",
      "price": 99.99,
      "effect": "Allows the drinker to assume the form of someone else",
      "ingredients": [
        "Lacewing flies",
        "Leeches",
        "Powdered bicorn horn",
        "Knotgrass",
        "Fluxweed",
        "Shredded Boomslang skin"
      ]
    },
    "6": {
      "id": 6,
      "name": "Sleeping Draught",
      "image": "sleeping-draught.png",
      "price": 29.99,
      "effect": "Causes the drinker to fall almost instantaneously into a deep but temporary sleep",
      "ingredients": [
        "Sprigs of Lavender",
        "Measures of Standard Ingredient",
        "Blobs of Flobberworm Mucus",
        "Valerian sprigs"
      ]
    }
  }
};

var count = Object.keys(json.potions).length;
//console.log(count);
for (i = 0; i <= count; i++){
  for (var key in json) {
      var lista = json[key][i];
      console.log(lista);
  }
}

//document.getElementById("teste").innerHTML = "<div>"+id+"</div><div>"+nome+"</div>";

// Pega botão com id "btn"
var openbtn = document.querySelector('#openbtn');
var closebtn = document.querySelector('#closebtn');
// Atribui evento de click para o btn
openbtn.addEventListener("click", function(){
   // Mostra no log, após o click
  document.getElementById("openbtn").style.display = "none";
  document.getElementById("mySidenav").style.display = "block";  
  document.getElementById("mySidenav").style.width = "100%"; 
  document.getElementById("closebtn").style.display = "block";
  document.getElementsByTagName("body").style.overflow = "hidden";
  console.log("Clicou");
})


closebtn.addEventListener("click", function(){
  document.getElementById("closebtn").style.display = "none";
  document.getElementById("mySidenav").style.display = "none";    
  document.getElementById("openbtn").style.display = "block";
  document.getElementsByTagName("body").style.overflow = "scroll";
})

})