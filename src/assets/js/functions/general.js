(function ( $ ) {
	'use strict';

	// Carousel Home
	// ------------------------- 		
	$(function carouselHome() {
	    $(".owl-carousel").owlCarousel({
	        items: 1,
	        autoplaySpeed: 1000,
	        autoplayTimeout: 7000,
	        autoplay: true,
	        nav: true,
	        navText: ['<','>'],
	        loop: true             
	    });
	});	

	// Responsive YouTube
	// ------------------------- 		
	$(function responsiveYouTube() {
		var all_oembed_videos = $("iframe[src*='youtube'], iframe[src*='vimeo']");
		all_oembed_videos.each(function(){
			$(this).removeAttr('height').removeAttr('width').wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
		});
	});

}( jQuery ));