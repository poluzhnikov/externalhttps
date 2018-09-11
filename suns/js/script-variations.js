// SUNS

//Go to custom home
window.onload = function() {   
   if($("body").hasClass("index")) {
	 	//window.location = "/products/home";
	 }
};


// Dynamic sizes
var windowwidth, documentheight, windowwheight, controlsheight, controls_top;

function setWidth() {
	windowwidth = window.innerWidth;
	windowwheight = window.innerWidth;	 
	controlsheight = $(".single-controls.single").height();   
	controls_top = parseInt($(".single-controls").css("top"), 10);
	documentheight = $(document).height()
}; setWidth();

$(window).resize(setWidth);	


	var rotation_speed = 0;
	$(window).scroll(function(event){
		
	    scroll_top = $(window).scrollTop();
	    
	    // Rotate the logo
	    var rotation_speed = scroll_top * .01;
	
			//Spin menu
			if($(".fun-menu").hasClass("selected")) {
	
			} else {
				TweenLite.to($(".fun-menu.left"), 0.2, {rotation: -rotation_speed});
				TweenLite.to($(".fun-menu.right"), 0.2, {rotation: rotation_speed});			
			}
			
	});	
	

$(document).ready(function() {

	$("#__ttLogo").hide();
	$("#tt_follow").hide();
	

	// Clash fix
	
	$(".single-controls").on('mouseenter ', function(){
		$(".fun-menu.right").addClass("go-down");
	});
	
	$(".single-controls").on('mouseleave ', function(){
		$(".fun-menu.right").removeClass("go-down");
	});	

	// Logo hover
	
	var hover_count = 1;
	var finishedRotation = function () {
	  $(".logo").addClass("spinnable");
	};	
	
	$(".logo").on('mouseover touchstart', function(){
		
		if($(".logo").hasClass("spinnable")) {	
			$(".logo").removeClass("spinnable");	
			TweenLite.to($(this), 0.5, {rotation: hover_count * 180, onComplete: finishedRotation});
			hover_count += 1;	
		}
		
		
	});
	
	/*
	, function(){
		return false;
	});
	*/
			//


	// Fun menu states


	TweenMax.to($(".fun-menu.selected"), 15, {rotation:"360", ease:Linear.easeNone, repeat:-1});	

	$(".fun-menu").not(".selected").hover(function(){
		
			scroll_top = $(window).scrollTop();
			var rotation_speed = scroll_top * .01;
			
			if($(this).hasClass("left")) {
				TweenMax.to($(this), .3, {rotation: -rotation_speed + 8});	
			} else {
				TweenMax.to($(this), .3, {rotation: rotation_speed + 8});
			}	

			
			
			/*
			if($(this).hasClass("left")) {
				TweenMax.to($(this), .1, {x: 16});	
			} else {
				TweenMax.to($(this), .1, {x: -16});	
			}
			*/
			
			
			
	}, function(){
		
			scroll_top = $(window).scrollTop();
			var rotation_speed = scroll_top * .01;

			if($(this).hasClass("left")) {
				TweenMax.to($(this), .3, {rotation: -rotation_speed});	
			} else {
				TweenMax.to($(this), .3, {rotation: rotation_speed});
			}			

			
			/*
			if($(this).hasClass("left")) {
				TweenMax.to($(this), .1, {x: 0});	
			} else {
				TweenMax.to($(this), .1, {x: 0});	
			}	
			*/		
			
	});




	/*
		Single Product
	*/	
			
		//Count variatons
		var variations_count = $(".Product__variations input").length;
		//Hide first 
		if(variations_count > 1) {
			$('.all-images img:lt('+ variations_count +')').hide();
		} else {
			$('.all-images img:lt(1)').hide();	
		}
		
		//Hide first 
		if(variations_count > 1) {
			$('.all-images .home-feed-image:lt('+ variations_count +')').hide();
		} else {
			$('.all-images .home-feed-image:lt(1)').hide();	
		}		
		
		//Hide if no extras exist
		var gallery_count = $(".all-images .home-feed-image").length;
		if(gallery_count <= variations_count ) {
			$('.shop-rest').hide();	
		}				
		
	
		// Single - Fotorama
	  $(function () {
	    // 1. Initialize fotorama manually.
	    var $fotoramaDiv = $('.fotorama').fotorama({
		    width: "100%",
		    height: "100%",
		    allowfullscreen: false,
		    fit: "contain",
		    transition: 'dissolve',
		    hash: true,
		    arrows: false,
		    click: false,
		    nav: false,
		    swipe: false
	    });
	
	    // 2. Get the API object.
	    var fotorama = $fotoramaDiv.data('fotorama');

	    
	    // Get hash value
	    if(window.location.hash) {
		    var hash = window.location.hash.substr(1);
		    var radio_hash = hash - 1;
		    var selected_hash = $('.Product__variations input:radio[data-image-position='+radio_hash+']');
		    
		    selected_hash.prop('checked', true);
	    }
	    
	    $fotoramaDiv.on('fotorama:load', function (e, fotorama) {
		  	TweenMax.to($(".fotorama, .Product__variations"), 0, {opacity: 1}); 
		  	TweenMax.to($(".single-fotorama"), .3, {opacity: 1}); 
		  });  
	
			// Change on click
			$('.Product__variations.single input:radio').change(function(){
				var current_variation = $(this).attr("data-image-position");
				fotorama.show(current_variation);
	    }); 	    
		      
	  });
	  


	/*
		Shop Page
	*/	
			
	  
		// Shop - Fotorama
	  $(function () {
	    // 1. Initialize fotorama manually.
	    
	    

	    $('.shop-featured').each(function(){
		  
		  	var this_product = $(this);
		  	var this_fotorama = $(this).find(".fotorama-shop");
		  	
		  	var this_product_id = this_product.attr("model-id");
		  	
		  	
		  	
		  	// Turn off Radios
		  	$(this).find('input[type="radio"]').prop('checked', false);  

				// Draw Frame
				var the_svg = this_product.find("svg"); 
				var the_frame = this_product.find("svg .svg_frame"); 
				var the_glass = this_product.find("svg .svg_glass"); 
				
				TweenMax.fromTo(the_frame, 3, {drawSVG:"0%", stroke: "#F8F8F8"}, {drawSVG:"100%", stroke: "#E93382"});
				TweenMax.fromTo(the_glass, 3, {drawSVG:"0%", stroke: "#F8F8F8"}, {drawSVG:"100%", stroke: "#E93382"});
			
				//var dynamicVarName = this_product_id;
			     
		   
		   
		    // The fotorama
		    var $fotoramaDivShop = this_fotorama.fotorama({
			    width: "100%",
			    ratio: 2/1,
			    allowfullscreen: false,
			    fit: "contain",
			    transition: 'dissolve',
			    arrows: false,
			    click: false,
			    nav: false,
		    });
		    
		
		    // 2. Get the API object.
		    var dynamicVarName = $fotoramaDivShop.data('fotorama');
		
		    // 3. Inspect it in console.
		    
		    
		    $fotoramaDivShop.on('fotorama:load', function (e, dynamicVarName) {
			  	TweenMax.to(this_product.find(".Product__variations"), 0, {opacity: 1}); 
			  });  
		
				// Change on click
				
				var this_product_radio = this_product.find('.Product__variations.shop input:radio');
				var this_product_radio_label = this_product.find('.Product__variations.shop label'); 
				
				this_product_radio.on('change touch', function(){		
					this_product.addClass("triggered");
					var current_variation = $(this).attr("data-image-position");
					dynamicVarName.show(current_variation);
					this_product.find(".price-tag, .tictail_add_to_cart_button").show();
					TweenMax.to(this_product.find(".fotorama-shop"), 1, {opacity: 1});
					TweenMax.to(the_frame, .5, {drawSVG:"0%"});
					TweenMax.to(the_glass, .5, {drawSVG:"0%"});					
		    }); 
		    
				this_product_radio_label.hover(function(){	
					var this_hover = $(this);	
					if(!this_product.hasClass("triggered")) {				
						var idVal = this_hover.attr("for");
						var current_variation = $('#'+idVal+'').attr("data-image-position");
						
						console.log(current_variation);
						
						dynamicVarName.show(current_variation);
						TweenMax.to(this_product.find(".fotorama-shop"), 1, {opacity: 1});
						TweenMax.to(the_frame, .5, {drawSVG:"0%"});
						TweenMax.to(the_glass, .5, {drawSVG:"0%"});		
					}			
		    }, function(){
					if(!this_product.hasClass("triggered")) {				
						TweenMax.to(this_product.find(".fotorama-shop"), 1, {opacity: 0});
						TweenMax.to(the_frame, .5, {drawSVG:"100%"});
						TweenMax.to(the_glass, .5, {drawSVG:"100%"});		
					}					    
		    }); 
		    
		    
		    // Show just the frame
				the_svg.hover(function(){	

					TweenMax.to(this_product.find(".fotorama-shop"), 1, {opacity: 1});
	
		    }, function(){
					if(!this_product.hasClass("triggered")) {	
						TweenMax.to(this_product.find(".fotorama-shop"), 1, {opacity: 0});
				  }  
		    }); 		    		    
	    
	    });	    
		      
	  });	  


});







$(window).scroll(function(event){
		
		scroll_top = $(window).scrollTop();
		
		if(windowwidth > 768) {	
			if(scroll_top > 48) {
				TweenMax.to($(".single-controls.single"), .1, {opacity: 0});
				//.addClass("detach");
				
			} else {
				TweenMax.to($(".single-controls.single"), .1, {opacity: 1});
				//$(".single-controls.single").removeClass("detach");		
			}
		}
		
		
		// First Intro
	
		
		var intro_div = $(".inner-content.intro ");
		
		
		
		var scroll_top_intro = - scroll_top * 0.5;
		
		
		
		if(windowwidth > 768) {	
			if(scroll_top < windowwheight * 2) {
				TweenMax.set(intro_div, {y: scroll_top_intro});
			} else {
				TweenMax.set(intro_div, {y: - windowwheight});	
			}
		}

		
});





