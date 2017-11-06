$(function(){
	$(document).scroll(function(event){
		console.log($(".new").offset().top)
		if($(document).scrollTop()>200){
			$(".img_left").animate({
				top:"0px",
				left:"0px"
			},800)
			$(".img_right").animate({
				top:"0px",
				right:"5%"
			},800)
		}
		
		if($(document).scrollTop()>500){
			$(".a_img").animate({
				top:"0px"
			},500)
		}
		if($(document).scrollTop()>400){
			$(".new").fadeIn()
		}
		if($(document).scrollTop()>710){
			$(".limit").fadeIn()
		}
	})
	
	//
	$(function(){
		$(".a_img a").hover(function(){
			$(this).animate({
				top:"-5px"
			},300)
		},function(){
			$(this).animate({
				top:"0px"
			},300)
		})
	})
	
})
