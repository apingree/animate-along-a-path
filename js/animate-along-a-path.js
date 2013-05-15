// when the DOM is ready...
    (function() {
        var init = function($)
        {
		//Start of active code
		
		var duration = 100;
		var marginTop = 0;
		var	marginRight = 0;
		var	marginBottom = 0;
		var	marginLeft = 0;
		var	width = 630 - marginRight - marginLeft;
		var	height = 630 - marginTop - marginBottom;
		var strokeWidth = 3;

		/*	Global variable used to control what stage we should animate to */
		var counter = 0;
		var numStages = 10;

		/*	Create the SVG and its elements */
		var chart = d3.select(".holder")
						.append("svg")
						.attr("width", width + marginRight + marginLeft )
						.attr("height", height + marginTop + marginBottom )
						.attr("class", "chart");		
		
		// Set up the two paths down for the voyager probes to follow
		var v1Path = chart.append("path")
					.attr("d","M154.249,365.361c-11.737,1.878-50.235,15.023-47.418,36.15c1.422,10.668,14.56,20.68,35.681,28.169c24.066,8.533,59.132,15.722,103.286,7.512C339.226,419.821,527.019,112.31,535,95.878")
					.style("fill", "none")
					.style("stroke","#009EE0")
					.style("stroke-width", strokeWidth)
					.style("opacity",0.5);

		var v2Path = chart.append("path")
					.attr("d","M156,367c-45.5,18-45.325,36.188-12,51.5c24.333,11.181,60.483,18.692,108.84,11.181c72.876-11.32,209.017-108.491,226.76-142.723c16.5-31.833,11.566-55.124,10.399-62.958s0.5-18.167,12,2c15.887,27.859,42,83.5,42,83.5")
					.style("fill", "none")
					.style("stroke","#E2007A")
					.style("stroke-width", strokeWidth)
					.style("opacity",0.5);


        
		// Store the length of the path as in the variable len
		var v1Length = v1Path.node().getTotalLength();
		var v2Length = v2Path.node().getTotalLength();

		function getV1Point () {
			return v1Path.node().getPointAtLength((counter/numStages)*v1Length);
		}

		function getV2Point () {
			return v2Path.node().getPointAtLength((counter/numStages)*v1Length);
		}		

		var v1 = chart.append("circle")
			.style("fill", "#009EE0")
			.attr("r", 5)
			.attr("cx", getV1Point().x)
			.attr("cy", getV1Point().y);

		var v2 = chart.append("circle")
			.style("fill", "#E2007A")
			.attr("r", 5)
			.attr("cx", getV2Point().x)
			.attr("cy", getV2Point().y);

				
		// The function that moves the innerwrapper according to the position of the position variable,
		//hides the tool tips, changes the colours of the divs and shows or hides the prev button
		function moveTimeline() {
			v1.transition()
				.duration(duration)
				.ease("linear")
				.attr("cx", getV1Point().x)
				.attr("cy", getV1Point().y);

			v2.transition()
				.duration(duration)
				.ease("linear")
				.attr("cx", getV2Point().x)
				.attr("cy", getV2Point().y);
			
			
		};

		// var myVar = setInterval(function(){myTimer()}, duration	);

		// function myTimer() {
		// 	if (counter < numStages) {
		// 		console.log(counter);
		// 		counter += 0.1;
		// 		moveTimeline();
		// 	}

		// 	if (counter % 2 === 0) {
		// 		clearInterval(myVar);
		// 	}
		// }

		// function myStopFunction() {
		// 	clearInterval(myVar);
		// }

		// Two functions to adjust the value of postion and move the time line for use by the buttons
		// var decreasePosition = function () {
		// 	if (counter > 0) {
		// 		counter -= 1;
		// 		moveTimeline();
		// 		}
		// };
		
		// var increasePosition = function () {
		// 	if (counter < numStages) {
		// 		counter += 0.1;
		// 		moveTimeline();
		// 		}
		// };


		function setIntervalX(callback, delay, repetitions) {
		    var x = 0;
		    var intervalID = window.setInterval(function () {

		       callback();

		       if (++x === repetitions) {
		           window.clearInterval(intervalID);
		       }
		    }, delay);
		}
		
		
		$('#prev').click(function(e){
			setIntervalX(function () {
				if (counter < numStages) {
							console.log(counter);
							counter -= 0.1;
							moveTimeline();
						}
				}, duration, 10);
			
			e.preventDefault();
			return false;
			});
		
		
		$('#next').click(function(e){
			setIntervalX(function () {
				if (counter < numStages) {
							console.log(counter);
							counter += 0.1;
							moveTimeline();
						}
				}, duration, 10);
			
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