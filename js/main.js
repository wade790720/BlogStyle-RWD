$(function(){
	$(".menu-switch").on('click', function(){
		$(".menu").toggle();
		// 可以把底下的註解打開，觀看選單的動畫效果
		// $(".menu").slideToggle(500);
	})

	// 在 JS 使用 media query，解決視窗縮放時，選單消失的問題
	if(matchMedia) {
    var mq = window.matchMedia( "(min-width: 992px)" );
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
  
  function WidthChange(mq){
    if (mq.matches) {
    	$(".menu").css("display", "block");
    }
    else {
    }
  }
})