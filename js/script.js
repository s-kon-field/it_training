$(function(){

	var agent = navigator.userAgent;
	var list = $(".mod_nav ul"); 
	
	function menuslide(){
	//メニュー表示非表示
	$(".mod_nav p.navtitle").click(function(){
	if($(list).css("display")=="none"){
	$(list).slideDown("fast");
	}else{
	$(list).slideUp("fast");
	}
	});
	}

	if(agent.search(/iPhone/) != -1){
		menuslide();
	
	}else if(agent.search(/Android/) != -1){
		menuslide();
	
	}else{
//resize
	$(window).resize(function(){
	var w = $(window).width();
	var x = 600;
		if (w <= x) {
		$(list).css("display","none");
		} else {
		$(list).css("display","block");
		}
	});
		menuslide();
	}
});