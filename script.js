$("document").ready(function(){

	$(".btn").hover(function(){
		$("#header").toggleClass("active");
	})
	$("#header .spec-btn").click(function(){
		$("#header .btns-left").toggleClass("active")
	})
})