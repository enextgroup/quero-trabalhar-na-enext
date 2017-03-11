document.addEventListener('DOMContentLoaded', function() {
   
  var close = document.getElementsByClassName('aberto')[0],
      toggle = document.getElementsByClassName('fechado')[0],
      menu = document.getElementById('menu'),
      bar = document.getElementById('bar'),
      logo = document.getElementById('logo'),
      cauldron = document.getElementById('cauldronTag'),
      isOpen = false;
   
  toggle.addEventListener('click', changeMenu);
  close.addEventListener('click', changeMenu);
   
  function changeMenu() {
     
    if(isOpen){
      menu.className = 'menuHide';
      bar.className = 'hide';
      toggle.className = '';
      close.className = 'hide';
      logo.className = 'alinha-left';
      cauldron.className = 'alinha-right cauldron';
      isOpen = false;
     
    } else {
      menu.className = 'area func';
      bar.className = '';
      toggle.className = 'hide';
      close.className = '';
      logo.className = 'hide';
      cauldron.className = 'hide';
      isOpen = true;
    }
  }
   
});