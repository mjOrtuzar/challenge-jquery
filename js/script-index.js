$(document).ready( function(){
 $("#arrow-back").hide();
 
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

$(document).ready(function printNews(){
	$("p").append("<i>NUEVAS RECETAS</i>");
	
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	var size = recipesArray.length;  // se crea una variable que almacena el largo del array
	for (i =0 ; i<=size ;i++){   // el for itera a lo largo del array para luego abrir su condicion
		if(recipesArray[i].highlighted){  // si la propiedad llamada desde el indice del array es verdad
			renderRecipe(recipesArray[i]);  //se llama a la funcion renderRecipe colocando como parametro, el contenido del indice que resulto verdadero.
		}
	}

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) { //lo que se da como parametro es el resultado de renderHighlightedRecipes(recipesArray) que contiene el array con el que se trabajara.
	console.log('Voy a pintar la receta: ', recipe);
	// se toma el div vacio con clase list-recipes y se añaden etiquetas html.
	//para que sea dinamico, en los titulos se coloca el nombre del array y su metodo para ingresar a los objetos que contiene.
	$(".list-recipes").append('<a class="item-recipe" href="#">'+
	'<span class="attribution">'+
	'<span class="title-recipe">'+ recipe.title +'</span>'+
	'<span class="metadata-recipe">'+
	'<span class="author-recipe">'+ recipe.source.name +'</span>'+
	'<span class="bookmarks-recipe">'+
	'<span class="icon-bookmark"></span>'+
	'</span>'+'</span>'+'</span>'+
	'<img src="img/recipes/640x480/' + recipe.name + '.jpg"/>'+'</a>');

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


