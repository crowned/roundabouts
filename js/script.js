$('document').ready(function() {   
	//determine number of spiral pairs
	vCount = Math.ceil(1.35*$(window).height() / $("li").first().height());
	hCount = Math.ceil(2.75*$(window).width() / $("li").first().width());
	numberOfBlocks = vCount * hCount;
	
	//populate page with li elements
	for (var i=1;i<numberOfBlocks;i++)
		{ 
			$("li").last().clone().appendTo("ul");
		};

	//scale pairs
	scale= 75 / 100;
	
	$(".elem.A").css("zoom", scale);
	$(".elem.B").css("zoom", 1-scale);

	$("#slider-step").on("change", function(e){
	    scale= $("#slider-step").val() / 100;

	    $(".elem.A").css("zoom", scale);
	    $(".elem.B").css("zoom", 1-scale);
	});
});