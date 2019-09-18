$("#bulb").click(function() {
  $("#bulb").toggleClass('bulbon');
});
$("#water").click(function() {
  $("#water").toggleClass('wateron');
});

    $(".day-knob").knob({
        'min':0,
        'max':48,
        'step': 1,
        'width': 100,
        'height': 100,
        'fgColor': '#fcba03',
        'bgColor': '#333',      
        'change' : function (v) { console.log(v); }
    });
    $(".night-knob").knob({
        'min':0,
        'max':48,
        'step': 1,
        'width': 100,
        'height': 100,
        'fgColor': '#C66',
        'bgColor': '#333',
        'change' : function (v) { console.log(v); }
    });