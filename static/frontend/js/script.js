jQuery(document).ready(function(){
	"use strict";

	// responsive menu 

    $("body").on( "click" , '.navbar-toggler' , function(){
    
      $(".nav-menu").css({"width" : "300px" });
    });
    $("body").on( 'click' , '.cross-wrap' , function(){
      $(".nav-menu").css({"width" : "0px"});
    });


    	//for menu
      $('body').on( 'click' , '.nav-menu li' , function(){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
      else{
        $('.nav-menu li').removeClass('active');
        $(this).addClass('active');
      }
    })




	/*****************************
		Button Hover
	*****************************/
	$('.theme-btn, .theme-btn-secondary')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
	});

	/*****************************
		Main Slider
	*****************************/
	if ($.isFunction($.fn.owlCarousel)) {
		var mainSlider = $('.main-slider');
		mainSlider.owlCarousel({
		    center: true,
		    items:1,
		    loop:false,
		    dots: false,
		    margin:80,
		    autoplay:true,
    		animateOut: 'slideOutLeft',
    	});
		mainSlider.on('changed.owl.carousel', function(event, owlCarousel, currentSlide, nextSlide){
	        var sliderTitle = $('.slider-txt h2');
	        var currentTitle = $('.owl-item.active .slider-txt h2');
	        sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
	        currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
	    });
	}

	/*****************************
		Main Slider
	*****************************/
	if ($.isFunction($.fn.owlCarousel)) {
		$('.banner-slider').owlCarousel({
		    center: true,
		    items:1,
		    loop:false,
		    dots: false,
		    margin:80,
		});
	}
	/*****************************
	popups
	*****************************/
    
       $("body").on( 'click' , '#popups' , function(){
      $(".popup-items").css({"transform" : "translateX(0%)" });
    });
    $("body").on( 'click' , '.cross-bar' , function(){
      $(".popup-items").css({"transform" : "translateX(100%)"});
    });

	/*****************************
		Recipe Carousel
	*****************************/
	if ($.isFunction($.fn.owlCarousel)) {
		$('.recipe-carousel').owlCarousel({
		    center: true,
		    items:3,
		    loop:true,
		    dots: true,
		    margin:80,
		    responsive:{
		    	0: {
		    		items:1,
		    		center: false,
		            margin: 0
		    	},
		        600:{
		            items:2,
		            center: false,
		            margin: 0
		        },
		        1024: {
		        	items:3,
		        	margin:30
		        },
		        1366: {
		        	margin:50
		        }
		    }
		});

	/*****************************
		Recipe Carousel
	*****************************/

		$('.branchs-caro').owlCarousel({
		    items:1,
		    loop:true,
		    dots: true,
		     responsive:{
		    	1000:{
		            items:1,
		            margin: 30
		        },
		        768:{
		            items:1,
		            margin: 0
		        }
		    }
		});


		
              // PRELOADER
            var width = 100,
              perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
              EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
              time = parseInt((EstimatedTime / 1000) % 60) * 60;

            $(".spinner").animate({
              width: width + "%"
            }, time);


	/*****************************
		Testimonial Carousel
	*****************************/

		$('.testi-caro').owlCarousel({
		    items:1,
		    loop:true,
		    dots: false,
		    nav: true,
		    margin:30,
		    responsive:{
		    	1000:{
		            items:1,
		            margin: 30
		        },
		        768:{
		            items:1,
		            margin: 0
		        }
		    }
		});
	}

	/*****************************
		WOW Js
	*****************************/
	new WOW().init();

	/*****************************
		Tilt 
	*****************************/
	if ($.isFunction($.fn.tilt)) {
		$('.tilt-img').tilt({
		    glare: true,
		    maxGlare: .5
		});
	}

	/*****************************
		Masonry
	*****************************/
	if ($.isFunction($.fn.isotope)) {
		$('.masonry').isotope({
		  
		});
	}



	$(".kenburn-slider").owlCarousel({
		items:1,
	    loop:true,
	    dots: false,
	    nav: false,
	    autoplay: true,
	    autoplayTimeout: 7500,
	    animateOut: 'fadeOut',
   	    animateIn: 'fadeIN',
	});

});


/*=====================
sub manu
 ==========================*/
function submenu( val ) {
	        


	      var len= $(".home-click").length;
	     
	        for(var i=0; i<= len; i++ ) {
	          if( i == val ) {
	            console.log( val );
	            $(".home-page-2").eq(i).toggleClass("togglesubmenu");
	          }

	        }

	     }
	      $('.js-preloader').preloadinator();

