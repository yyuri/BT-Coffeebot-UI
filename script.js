$(document).ready(function(){
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
  $("#bluet").click(function() {
    $("#bluet").toggleClass('blueton');
});
$(".soil").mousemove(function(){
  var op=(($(".humidity-knob").val())/100);
  var op2=(($(".humidity-knob").val()));
  $("#humidity").css("color","rgba(81, 153, 201,"+op+")");
  $( "#percent" ).text( +op2+ "%" );
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
	});
