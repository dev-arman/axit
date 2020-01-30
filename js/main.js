$(".contents").hide();

$(".content-1").show();


$("#tab1").click(function(){
	$("#tab1").addClass("active");
	$("#tab2").removeClass("active");
	$("#tab3").removeClass("active");


	$(".content-1").show();
	$(".content-2").hide();
	$(".content-3").hide();
});

$("#tab2").click(function(){
	$("#tab1").removeClass("active");
	$("#tab2").addClass("active");
	$("#tab3").removeClass("active");


	$(".content-1").hide();
	$(".content-2").show();
	$(".content-3").hide();
});

$("#tab3").click(function(){
	$("#tab1").removeClass("active");
	$("#tab2").removeClass("active");
	$("#tab3").addClass("active");


	$(".content-1").hide();
	$(".content-2").hide();
	$(".content-3").show();
});