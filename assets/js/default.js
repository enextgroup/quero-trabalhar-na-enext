$(document).ready(function(){

var i, j, x, y = "";
var arr = Object.keys(vpotions.potions).map(function(k) { 
  return vpotions.potions[k];
});
//console.log(arr);

for (i in arr) {
    
    x += '<div class="box-produto">';
    x += '  <div class="imagem"><img src="./assets/products/'+arr[i].image+'" onclick="openModal();"/></div>';
    x += '  <div class="dados">';
    x += '    <span class="nome">'+arr[i].name+' - </span>';
    x += '    <span class="preco">'+arr[i].price+'</span>';
    x += '  </div>';
    x += '</div>';
    
    y += '<div class="lightbox" id="myModal" style="display: none;">';
    y += '  <span class="close" onclick="closeModal()">&times;</span>';
    y += '  <div class="imagem"><img src="./assets/products/'+arr[i].image+'" /></div>';
    y += '    <div class="dados">';
    y += '      <h3>'+arr[i].name+'</h3>';
    y += '      <h3>Use/Effect:</h3>'; 
    y += '      <p>'+arr[i].effect+'</p>'; 
    y += '      <h3>Ingredients:</h3>'; 
    for (j in arr[i].ingredients) {
        y += arr[i].ingredients[j] + '<br>';
    }
    y += '      <h3 class="preco">Price:</h3>';
    y += '      <span class="preco">'+arr[i].price+'</span>';
    y += '      <button class="btn-comprar">Add to cart</button>';
    y += '    </div>';
    y += '</div>';
   
}
document.getElementById("produto").innerHTML = x;
document.getElementById("box-lightbox").innerHTML = y;

$(".openbtn").click(function(){
        $('#mySidenav').css({'display':'block', 'width':'100%'});
      $(this).hide();
        $(".closebtn").show();
        $("body").css("overflow","hidden");
    });

    $(".closebtn").click(function(){
         $('#mySidenav').hide();
      $(this).hide();
        $(".openbtn").show();
        $("body").css("overflow","visible");
    });

})