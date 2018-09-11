// SUNS


// Dynamic sizes
var windowwidth, windowwheight, controlsheight, controls_top;

function setWidth() {
	windowwidth = window.innerWidth;
	windowwheight = window.innerWidth;	 
	controlsheight = $(".single-controls").height();   
	controls_top = parseInt($(".single-controls").css("top"), 10);
}; setWidth();

$(window).resize(setWidth);	


$(document).ready(function() {


	// Style the radios
	//$(".tictail_variation_label").html("<span class='outer'><span class='inner'></span></span>");

	// Single - Fotorama
  $(function () {
    // 1. Initialize fotorama manually.
    var $fotoramaDiv = $('.fotorama').fotorama({
	    width: "100%",
	    height: "100%",
	    allowfullscreen: false,
	    fit: "cover",
	    transition: 'dissolve',
	    hash: true,
	    arrows: false,
	    click: false,
	    nav: false,
    });

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');

    // 3. Inspect it in console.
    console.log(fotorama);
    
    // Get hash value
    if(window.location.hash) {
	    var hash = window.location.hash.substr(1);
	    var radio_hash = hash - 1;
	    var selected_hash = $('.Product__variations input:radio[data-image-position='+radio_hash+']');
	    
	    selected_hash.prop('checked', true);
    }
    
    $fotoramaDiv.on('fotorama:load', function (e, fotorama) {
	  	TweenMax.to($(".fotorama, .Product__variations"), 0, {opacity: 1}); 
	  });  

		// Change on click
		$('.Product__variations input:radio').change(function(){
			var current_variation = $(this).attr("data-image-position");
			fotorama.show(current_variation);
    }); 	    

	      
  });


});




$(window).scroll(function (event) {
    var scroll_top = $(window).scrollTop();
    
    // Rotate the logo
    var rotation_speed = scroll_top * .05;
			
		// Introduce the spinning
		if($("body").hasClass("home")) {
			if(scroll_top > 112) {
				TweenMax.to($(".top-menu"), .1, {opacity: 0, display: "none"});	
				TweenMax.to($(".fun-menu"), .1, {opacity: 1, display: "block"});
				
				//Spin menu
				TweenLite.to($(".fun-menu.left"), .7, {rotation: rotation_speed});
				TweenLite.to($(".fun-menu.right"), .7, {rotation: -rotation_speed});				
			} else {
				TweenMax.to($(".top-menu"), .1, {opacity: 1, display: "block"});	
				TweenMax.to($(".fun-menu"), .1, {opacity: 0, display: "none"});			
			}
		} else {
			TweenLite.to($(".logo"), .7, {rotation: rotation_speed});	
		}
		
		
		
		if(scroll_top > (windowwheight/2 - controlsheight - controls_top + 48)) {
			$(".single-controls").addClass("detach");
			
		} else {
			$(".single-controls").removeClass("detach");		
		}

		
});





