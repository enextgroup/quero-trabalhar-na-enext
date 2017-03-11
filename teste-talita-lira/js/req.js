var xobj = new XMLHttpRequest();

xobj.overrideMimeType('application/json');

xobj.open('GET', 'assets/potions.json', true);

xobj.onreadystatechange = function(){
	if(xobj.readyState == 4 && xobj.status == "200"){
		var seuJSON = JSON.parse(xobj.responseText);

		for(i = 0; i <= 6; i++){
			var s = i + 1;
			var nameTag = document.getElementsByClassName('name')[i];
			var priceTag = document.getElementsByClassName('price')[i];


			document.getElementsByClassName('image')[i].src = "images/products/" + [seuJSON.potions[s].image];
			nameTag.innerHTML = [seuJSON.potions[s].name];
			priceTag.innerHTML = " - $" + [seuJSON.potions[s].price];


		}
		
	}
};

xobj.send();