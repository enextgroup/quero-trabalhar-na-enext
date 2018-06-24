$(document).ready(function(){

/*for (var key in vpotions.potions) {
      var lista = vpotions.potions[key];
      console.log(lista);
  }
*/
var i, j, x, y = "";
var arr = Object.keys(vpotions.potions).map(function(k) { 
  return vpotions.potions[k];
});
//console.log(arr);

for (i in arr) {
    
    x += '<div class="box-produto">';
    x += '  <div class="imagem"><a href="#produto-'+arr[i].id+'" class="modalProduto"><img src="./assets/products/'+arr[i].image+'"/></a></div>';
    x += '  <div class="dados">';
    x += '    <span class="nome">'+arr[i].name+'</span>';
    x += '    <span class="preco">'+arr[i].price+'</span>';
    x += '  </div>';
    x += '</div>';
    
    y += '<div class="lightbox modal" id="modal-'+arr[i].id+'" role="dialog" aria-hidden="false">';
    y += '  <div class="modal-dialog">';
    y += '    <div class="modal-content"><button type="button" class="close" data-dismiss="modal">x</button>';
    y += '      <div class="imagem"><img src="./assets/products/'+arr[i].image+'" /></div>';
    y += '      <div class="dados">';
    y += '        <h3>'+arr[i].name+'</h3>';
    y += '        <h3>Use/Effect:</h3>'; 
    y += '        <p>'+arr[i].effect+'</p>'; 
    y += '        <h3>Ingredients:</h3>'; 
    for (j in arr[i].ingredients) {
        y += arr[i].ingredients[j] + '<br>';
    }
    y += '        <h3>Price:</h3>';
    y += '        <span class="preco">'+arr[i].price+'</span>';y += '</div>';
    y += '      </div>';
    y += '    </div>';
    y += '  </div>';
    y += ' </div>';

    
  }
    
  }
document.getElementById("produto").innerHTML = x;
document.getElementById("box-lightbox").innerHTML = y;



//var count = Object.keys(vpotions.potions).length;

 /* for (i = 0; i <= arr.length; i++){
    var nome = arr.name;
    console.log(nome);
  }*/
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