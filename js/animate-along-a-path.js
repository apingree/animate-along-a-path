// when the DOM is ready...
    (function() {
        var init = function($)
        {
		//Start of active code
		
		// Set up the Raphael paper area
		var r = Raphael("holder", 610, 600);;
		
		// Set up the a dashed black path down for the spaceship to follow
		var p = r.path("M156,367c-45.5,18-45.325,36.188-12,51.5c24.333,11.181,60.483,18.692,108.84,11.181c72.876-11.32,209.017-108.491,226.76-142.723c16.5-31.833,11.566-55.124,10.399-62.958s0.5-18.167,12,2c15.887,27.859,42,83.5,42,83.5")
					.attr("fill", "none")
					.attr("stroke","#E2007A")
					.attr("stroke-width",4);

		var q = r.path("M154.249,365.361c-11.737,1.878-50.235,15.023-47.418,36.15c1.422,10.668,14.56,20.68,35.681,28.169c24.066,8.533,59.132,15.722,103.286,7.512C339.226,419.821,527.019,112.31,535,95.878")
					.attr("fill", "none")
					.attr("stroke","#009EE0")
					.attr("stroke-width",4);
        
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
				
		/*	Global variable used to control what stage we should animate to */
		var counter = 0;
		
		// The function that moves the innerwrapper according to the position of the position variable,
		//hides the tool tips, changes the colours of the divs and shows or hides the prev button
		var moveTimeline = function () {
						
			// Fade in the relvant close up image /or move the space ship to the relevant position along the path
			switch(counter) {
				case 0:
				e.animate({along: 0}, 1000, "<>");
				break;
				case 1:

				e.animate({along: .14}, 1000, "<>");
				break;

				case 2:
				e.animate({along: .21}, 500, "<>");
				break;

				case 3:
				e.animate({along: .48}, 1000, "<>");
				break;

				case 4:
				e.animate({along: .65}, 800, "<>");
				break;

				case 5:
				e.animate({along: .7}, 500, "<>");
				break;

				case 6:
				e.animate({along: .84}, 800, "<>");
				break;

				case 7:
				e.animate({along: 1}, 800, "<>");
				break;
				default: break;
			}
			
			if (counter < 1) {
				$('#prev').css({'background-position':'0 45px'});;
			}
			
			if (counter >= 7 && $('#prev').is(':visible')) {
				$('#next').fadeOut();
			}
			
			if (counter < 8 && $('#next').is(':hidden') ) {
				$('#next').fadeIn();
			}
			
			
		};
		
		
		// Two functions to adjust the value of postion and move the time line for use by the buttons
		var decreasePosition = function () {
			if (counter > 0) {
				counter -= 1;
				moveTimeline();
				}
		};
		
		var increasePosition = function () {
			if (counter < 8) {
				counter += 1;
				moveTimeline();
				}
		};
		
		
		
		$('#prev').hover(function(){$(this).css({'background-position':'0 45px'});},function(){$(this).css({'background-position':'0 0px'})}).click(function(e){
			decreasePosition();
			
			e.preventDefault();
			return false;
			});
		
		
		$('#next').hover(function(){
			
			if (counter > 1) {
			
			$(this).css({'background-position':'0 45px'});
			
			}
			
			},function(){
				
			if (counter > 1) {
			
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