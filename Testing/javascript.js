$(document).ready(function() {
	$(".artist_img_portrait.first").mousemove(function(e){
		var newvalueX = 0.01 * e.pageX;
		var newvalueY = 0.01 * (e.pageY - $(document).scrollTop());
		$('.artist_img_bg.first').css("background-position", newvalueX + "px " + newvalueY + "px");
		$('.artist_img_portrait.first').css("background-position", (-newvalueX) +"px "+ (-newvalueY) + "px");
	});
	$(".artist_img_portrait.second").mousemove(function(e){
		var newvalueX = 0.01 * e.pageX;
		var newvalueY = 0.01 * (e.pageY - $(document).scrollTop());
		$('.artist_img_bg.second').css("background-position", newvalueX + "px " + newvalueY + "px");
		$('.artist_img_portrait.second').css("background-position", (-newvalueX) +"px "+ (-newvalueY) + "px");
	});
	$(".artist_img_portrait.third").mousemove(function(e){
		var newvalueX = 0.01 * e.pageX;
		var newvalueY = 0.01 * (e.pageY - $(document).scrollTop());
		$('.artist_img_bg.third').css("background-position", newvalueX + "px " + newvalueY + "px");
		$('.artist_img_portrait.third').css("background-position", (-newvalueX) +"px "+ (-newvalueY) + "px");
	});
});