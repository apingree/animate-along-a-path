// when the DOM is ready...
    (function() {
        var init = function($)
        {
		//Start of active code
		
		// Set up the Raphael paper area
		var r = Raphael("holder", 610, 625);
		
		// Set up the a dashed black path down for the spaceship to follow
		var p = r.path("M29.529,147.04l209.053,275.319c25.117,30.276,63.157,36.194,75.975,38.656l97.086,13.567l84.551,47.279l4.076,1.868l70.562-29.711").attr({fill: "none", stroke: "black", opacity: .5, "stroke-dasharray": "--"});
        
		// Store the lenght of the path as in the variable len
		var len = p.getTotalLength();
		
		/* 	Make a custom attribute that will facilitate animating the spaceship along the path.
			The attribute is a function that takes a value between 0 and 1.
			This value is multiplied but the total length of the path, to give effectively a percentage.
			'getPointAtLength' is called with this percentage and the returned object is is stored in the variable point.
			The custom attribute returns a transform with the x, y and alpha(rotation) values of point
		*/
		r.customAttributes.along = function (v) {
													var point = p.getPointAtLength(v * len);
													
													/*if(point.alpha < 380) {
														point.alpha = 380;
													};*/
													
													return {
														transform: "t" + [point.x, point.y] // + "r" + point.alpha - remove the rotation based on the angle of the curve derivative
													};
												};
												
												
		// The image of the space ship is applied to a Raphael image. By passing values into ".attr({along: .5})" the spaceship can now be moved along the path
		
		var e = r.image("images/c8.png", 0, -10, 34, 37).attr({along: 0});
		
		var eventWidth = $('#innerWrapper').width();
		
		//A variable that is used to postion the the innerWrapper div via scrollLeft
		var position = 0;
		
		// The function that moves the innerwrapper according to the position of the position variable,
		//hides the tool tips, changes the colours of the divs and shows or hides the prev button
		var moveTimeline = function () {
			
			$('#innerWrapper').animate({scrollLeft: position}, 'slow');
			
			//Fade out the visible close up image
			$('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9').fadeOut();
			
			// Fade in the relvant close up image /or move the space ship to the relevant position along the path
			switch(position) {
				case eventWidth*0:
				e.animate({along: 0}, 1000, "<>");
				/*$('#c1').fadeIn();*/
				 break;
				case eventWidth*1:
				e.animate({along: .14}, 1000, "<>");
				/*$('#c2').fadeIn();*/
				break;
				case eventWidth*2:
				e.animate({along: .21}, 500, "<>");
				/*$('#c3').fadeIn();*/
				break;
				case eventWidth*3:
				e.animate({along: .48}, 1000, "<>");
				/*$('#c4').fadeIn();*/
				break;
				case eventWidth*4:
				e.animate({along: .65}, 800, "<>");
				/*$('#c5').fadeIn();*/
				break;
				case eventWidth*5:
				e.animate({along: .7}, 500, "<>");
				/*$('#c6').fadeIn();*/
				break;
				case eventWidth*6:
				e.animate({along: .84}, 800, "<>");
				/*$('#c7').fadeIn();*/
				break;
				case eventWidth*7:
				e.animate({along: 1}, 800, "<>");
				/*$('#c8').fadeIn();
				$('#c9').fadeIn();*/
				break;
				default: break;
			}
			
			
			/*if (position > 0 && $('#prev').is(':hidden') ) {
				$('#prev').fadeIn();
			}*/
			
			/*if (position < (eventWidth*1) && $('#prev').is(':visible')) {
				$('#prev').fadeOut();
			}*/
			
			if (position < (eventWidth*1)) {
				$('#prev').css({'background-position':'0 45px'});;
			}
			
			if (position >= (eventWidth*7) && $('#prev').is(':visible')) {
				$('#next').fadeOut();
			}
			
			if (position < (eventWidth*8) && $('#next').is(':hidden') ) {
				$('#next').fadeIn();
			}
			
			
		};
		
		
		// Two functions to adjust the value of postion and move the time line for use by the buttons
		var decreasePosition = function () {
			if (position > 0) {
				position -= eventWidth;
				moveTimeline();
				}
		};
		
		var increasePosition = function () {
			if (position < (eventWidth*8)) {
				position += eventWidth;
				moveTimeline();
				}
		};
		
		
		
		$('#prev').hover(function(){$(this).css({'background-position':'0 45px'});},function(){$(this).css({'background-position':'0 0px'})}).click(function(e){
			decreasePosition();
			
			e.preventDefault();
			return false;
			});
		
		
		$('#next').hover(function(){
			
			if (position > (eventWidth*1)) {
			
			$(this).css({'background-position':'0 45px'});
			
			}
			
			},function(){
				
			if (position > (eventWidth*1)) {
			
			$(this).css({'background-position':'0 0px'})
			
			}
			
			}).click(function(e){
			increasePosition();
			
			e.preventDefault();
			return false;
			});
			
		
		//End of active of active code
		};

        setTimeout(function()
        {
        if (typeof jQuery !== 'undefined')
        {
          init(jQuery);
        } else
        {
          setTimeout(arguments.callee, 60);
        }
        }, 60);
        
    
        
        
      }
)
();