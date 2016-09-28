console.log("You're code starts here !");

var species = {
	cat    : "http://placekitten.com/300/300",
	bear   : "https://placebear.com/300/300",
	fish   : "http://www.fillmurray.com/300/300"
};

function main(){
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	$('button').on('click', function(){
		var selected = $(this).data('animal');
		console.log(selected)
		$('#holder').html('<img src="' + species[selected] + '">')
	});
}

$(document).ready(function(){
	main();
});