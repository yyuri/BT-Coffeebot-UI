$(document).ready(function(){
  $('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})

	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)

	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 4000);
})

$("#bulb").click(function() {
  $("#bulb").toggleClass('bulbon');
  	if ($("#tot").hasClass("night")) {
		$("#tot").removeClass("night");
		$("#tot").removeClass("switched");
	}
  	else {
		$("#tot").addClass("night");
		$("#tot").addClass("switched");

	}
});
$("#water").click(function() {
  $("#water").toggleClass('wateron');
});
    $(".day-knob").knob({
        'min':0,
        'max':24,
        'step': 1,
        'width': 80,
        'height': 80,
        'fgColor': '#e0b336',
        'bgColor': '#595252',
        'value': 5,
        'format' : function (v) { return v + 'h';},
        'change' : function (v) { console.log(v); }
    });
    $(".night-knob").knob({
        'min':0,
        'max':48,
        'step': 1,
        'width': 80,
        'height': 80,
        'fgColor': '#C66',
        'bgColor': '#595252',
        'format' : function (v) { return v + 'h';},
        'change' : function (v) { console.log(v); }
    });
    $(".humidity-knob").knob({
        'min':0,
        'max':100,
        'step': 1,
        'width': 80,
        'height': 80,
        'value' : 42,
        'fgColor': '#5199c9',
        'bgColor': '#595252',
        'change' : function (v) { console.log(v); }
    });
    $(".pulse-knob").knob({
        'min':1,
        'max':10,
        'step': 0.1,
        'width': 80,
        'height': 80,
        'fgColor': '#5199c9',
        'bgColor': '#595252',
        'format' : function (v) { return v + 's';},
        'change' : function (v) { console.log(v); }
    });
    $(".threshold-knob").knob({
        'min':0,
        'max':80,
        'step': 1,
        'width': 80,
        'height': 80,
        'fgColor': '#5199c9',
        'bgColor': '#595252',
        'format' : function (v) { return v + '%';},
        'change' : function (v) { console.log(v); }

    });


    $('.day-knob')
        .val(14)
        .trigger('format')
        .trigger('change');
    $('.night-knob')
        .trigger('format')
        .val(8)
        .trigger('change');
    $('.pulse-knob')
        .trigger('format')
        .val(2)
        .trigger('change');
    $('.threshold-knob')
        .trigger('format')
        .val(46)
        .trigger('change');
        // Variables
    	  var clickedTab = $(".tabs > .active");
      	var tabWrapper = $(".tab__content");
      	var activeTab = tabWrapper.find(".active");
      	var activeTabHeight = activeTab.outerHeight();

      	// Show tab on page load
      	activeTab.show();

      	// Set height of wrapper on page load
      	tabWrapper.height(activeTabHeight);

      	$(".tabs > li").on("click", function() {

      		// Remove class from active tab
      		$(".tabs > li").removeClass("active");

      		// Add class active to clicked tab
      		$(this).addClass("active");

      		// Update clickedTab variable
      		clickedTab = $(".tabs .active");

      		// fade out active tab
      		activeTab.fadeOut(250, function() {

      			// Remove active class all tabs
      			$(".tab__content > li").removeClass("active");

      			// Get index of clicked tab
      			var clickedTabIndex = clickedTab.index();

      			// Add class active to corresponding tab
      			$(".tab__content > li").eq(clickedTabIndex).addClass("active");

      			// update new active tab
      			activeTab = $(".tab__content > .active");

      			// Update variable
      			activeTabHeight = activeTab.outerHeight();

      			// Animate height of wrapper to new tab height
      			tabWrapper.stop().animate({
      				height: activeTabHeight
      			}, 100, function() {

      				// Fade in active tab
      				activeTab.fadeIn(250);

      			});
      		});
      	});

        var ctx = document.getElementById('myChart').getContext('2d');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                yAxisID: 'hora',
              datasets: [{
                    label: 'Hours of light',
                    backgroundColor: '#5e4708',
                    borderColor: '#e3e6d1',
                    pointStyle: 'line',
                    data: [7,8,8,9,11,12,13,12,11,9,8,7]
                }]},
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    min: 0,
                    max: 24
                  }
                }]
              }
            }
        });

        var ctx2 = document.getElementById('RangeChart').getContext('2d');
        var myRangeChart = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
              datasets: [
                {
                label: 'Max humidity',
                borderColor: '#e3e6d1',
                backgroundColor: 'rgba(81,153,201,0.9)',
                data: [47,58,28,89,45,42,59,70,75,99,58,47],
                pointStyle: 'line',
                fill: 1
                },
                {
                    label: 'Min humidity',
                    data: [27,28,18,9,11,12,13,12,11,9,8,7],
                    borderColor: 'rgba(192, 192, 192, 1)',
                    pointStyle: 'line'

                }
              ]


            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    min: 0,
                    max: 100
                  }
                }]
              },
           }
        });
	});

        'min':0,
        'max':100,
        'step': 1,
        'width': 80,
        'height': 80,
        'value' : 42,
        'fgColor': '#5199c9',
        'bgColor': '#595252',
        'change' : function (v) { console.log(v); }
    });
    $(".pulse-knob").knob({
        'min':1,
        'max':10,
        'step': 0.1,
        'width': 80,
        'height': 80,
        'fgColor': '#5199c9',
        'bgColor': '#595252',
        'format' : function (v) { return v + 's';},
        'change' : function (v) { console.log(v); }
    });
    $(".threshold-knob").knob({
        'min':0,
        'max':80,
        'step': 1,
        'width': 80,
        'height': 80,
        'fgColor': '#5199c9',
        'bgColor': '#595252',
        'format' : function (v) { return v + '%';},
        'change' : function (v) { console.log(v); }

    });


    $('.day-knob')
        .val(14)
        .trigger('format')
        .trigger('change');
    $('.night-knob')
        .trigger('format')
        .val(8)
        .trigger('change');
    $('.pulse-knob')
        .trigger('format')
        .val(2)
        .trigger('change');
    $('.threshold-knob')
        .trigger('format')
        .val(46)
        .trigger('change');
	});
