var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){
	$("button").click(function(){
	  var animal=$(this).data("animal");
	  console.log(animal);
	  $("img").attr("src","img/"+species[animal]);
    });
      console.log(species.cat); 
}
	

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	
	 


$().ready(function(){
	main();
});