$('document').ready(function() {   
	var updateZoom = function(scale) {
		var oppositeScale = 1 - scale;
		boxA.attr("style","transform:scale3d("+scale+","+scale+", "+scale+");-webkit-transform:scale3d("+scale+","+scale+", "+scale+")");
		boxB.attr("style","transform:scale3d("+oppositeScale+","+oppositeScale+", "+oppositeScale+");-webkit-transform:scale3d("+oppositeScale+","+oppositeScale+", "+oppositeScale+")");
		// boxA.css("transform", "scale("+scale+","+scale+")");
		// boxB.css("transform", "scale("+(1-scale)+","+(1-scale)+")");
	};

	//determine number of spiral pairs
	vCount = Math.ceil(1.55*$(window).height() / $("li").first().height());
	hCount = Math.ceil(2.75*$(window).width() / $("li").first().width());
	numberOfBlocks = vCount * hCount;
	//populate page with li elements
	for (var i=1;i<numberOfBlocks;i++)
		{ 
			$("li").last().clone().appendTo("ul");
		};
		var boxA = $(".box.A");
		var boxB = $(".box.B");



	//scale pairs
	scale= 75 / 100;
    boxA.css("transform", "scale("+scale+","+scale+")");
	boxB.css("transform", "scale("+(1-scale)+","+(1-scale)+")");

	$("#slider-step").on("change", function(e){
		scale= $("#slider-step").val() / 100;
    	updateZoom(scale); 
	});
});