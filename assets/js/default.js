$(document).ready(function(){

/*for (var key in vpotions.potions) {
      var lista = vpotions.potions[key];
      console.log(lista);
  }
*/
var arr = Object.keys(vpotions.potions).map(function(k) { 
  return vpotions.potions[k];
  var nome = vpotions.potions[k].name;
});


console.log(arr);
//var count = Object.keys(vpotions.potions).length;
var i = "";
  for (i = 0; i <= arr.length; i++){
    var x = arr.nome[i];
    console.log(x);
  }
/*var count = Object.keys(json.potions).length;
//console.log(count);
for (i = 0; i <= count; i++){
  for (var key in json) {
      var lista = json[key][i];
      console.log(lista);
  }
}
*/
/*var count = Object.keys(vpotions.potions).length;
var i = "";
  for (i = 0; i <= count; i++){
    var x = vpotions.potions[i];
    console.log(x);
  }
*/
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