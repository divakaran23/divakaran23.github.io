// Animated scrolling feature
$(document).ready(function() {

    $(".links a, .inner-links a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-166 + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    //WAYPOINTS - INTERACTION

	//Making the header to be smaller when user scrolled down from intro ( from first page)

	$('.intro').waypoint(function(event, direction) {
		   		
				if (direction === 'down') {
					
					$('.top_header').stop().animate({padding:'10px 0px'},1000);
					$('.top_header').css({
						'box-shadow':'0px 2px 15px #CCC',
						'-webkit-box-shadow':'0px 2px 15px #CCC',
						'-moz-box-shadow':'0px 2px 15px #999',
						'-o-box-shadow':'0px 2px 15px #999',
						'-ms-box-shadow':'0px 2px 15px #999'
					},1000);
					
				 }
				 else {
					 
	      			$('.top_header').stop().animate({padding:'50px 0px'},1000);
					$('.top_header').css({
						'box-shadow':'none',
						'-webkit-box-shadow':'none',
						'-moz-box-shadow':'none',
						'-o-box-shadow':'none',
						'-ms-box-shadow':'none'
					},1000);
				 }
		}, {
   offset: '10%', scrollThrottle: 2000, resizeThrottle: 500 
	});
	
	//navigation link class changes on scrolling
	$('#intro').waypoint(function(event, direction) {
		   		
				$('.desktop-nav a').removeClass('def-link');
				$('.desktop-nav a[href="#intro"]').addClass('def-link');
				 
		}, {
   offset: '0px', scrollThrottle: 2000, resizeThrottle: 500 
	});

});