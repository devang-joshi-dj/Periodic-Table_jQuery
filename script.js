$(document).ready(function(){
	var alkali = $(".alkali"); // alkali metal
	var alkaline = $(".alkaline"); // alkaline metal
	var transition = $(".transition"); // transition metal
	var basic = $(".basic"); // basic metal
	var semi = $(".semi"); // semi metal
	var non = $(".non"); // non metal
	var halogen = $(".halogen"); // halogen
	var nobel = $(".nobel"); // nobel gas
	var lanthanide = $(".lanthanide"); // lanthanide
	var actinide = $(".actinide"); // actinide

	alkali.hover(function(){
		alkali.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#c75f7f"}, 100 );
	}, function(){
		alkali.css({"background": "#E47A9A", "border": "1px solid", "border-color": "#aa0033"});
	});

	alkaline.hover(function(){
		alkaline.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#d9bb34"}, 100 );
	}, function(){
		alkaline.css({"background": "#EBD366", "border": "1px solid", "border-color": "#9c8d4b"});//
	});

	transition.hover(function(){
		transition.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#c7b16b"}, 100 );
	}, function(){
		transition.css({"background": "#FFE89D", "border": "1px solid", "border-color": "#c49e21"});
	});

	basic.hover(function(){
		basic.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#2fbd46"}, 100 );
	}, function(){
		basic.css({"background": "#61FF7B", "border": "1px solid", "border-color": "#00c020"});
	});

	semi.hover(function(){
		semi.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#3e9bc2"}, 100 );
	}, function(){
		semi.css({"background": "#66D3FF", "border": "1px solid", "border-color": "#0096d1"});
	});

	non.hover(function(){
		non.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#147dcc"}, 100 );
	}, function(){
		non.css({"background": "#38A9FF", "border": "1px solid", "border-color": "#005ba1"});
	});

	halogen.hover(function(){
		halogen.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#4732d1"}, 100 );
	}, function(){
		halogen.css({"background": "#6048FF", "border": "1px solid", "border-color": "#3824b6"});
	});

	nobel.hover(function(){
		nobel.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#7b6296"}, 100 );
	}, function(){
		nobel.css({"background": "#B19DC7", "border": "1px solid", "border-color": "#694096"});
	});

	lanthanide.hover(function(){
		lanthanide.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#785625"}, 100 );
	}, function(){
		lanthanide.css({"background": "#9F7537", "border": "1px solid", "border-color": "#794c09"});
	});

	actinide.hover(function(){
		actinide.animate({borderWidth: "2px", borderColor: "black", backgroundColor: "#cf7727"}, 100 );
	}, function(){
		actinide.css({"background": "#FF9A3F", "border": "1px solid", "border-color": "#c05a00"});
	});


});