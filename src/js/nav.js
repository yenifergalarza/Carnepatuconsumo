jQuery(document).ready(function(){

	jQuery(".hamb").click(function(e){
	 	e.preventDefault();
	 	jQuery("header nav").toggleClass("abrir");
	 	jQuery(".hamb i").toggleClass("fa-times");
	});

});