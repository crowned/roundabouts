$('document').ready(function() {   
	    scale= 75 / 100;

	    $(".elem.A").css("zoom", scale);
	    $(".elem.B").css("zoom", 1-scale);

	$("#slider-step").on("change", function(e){
	    scale= $("#slider-step").val() / 100;

	    $(".elem.A").css("zoom", scale);
	    $(".elem.B").css("zoom", 1-scale);
	});

});