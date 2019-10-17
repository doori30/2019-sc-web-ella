/* Ready-페이지가 로드될 때 일어날 일들. */
//상단 배너 가리기
var topClose = $.cookie("top-banner-close");
if(topClose) $(".top-banner").hide();

/* header */
/* header의 x버튼 클릭 */
/* 
//cookie를 사용하지 않고 닫을 때 ->새로고침하면 보여진다.
$("#bt-top-close").click(function(){
  $(".top-banner").stop().slideUp(300);
}); */

// //cookie로 제한시간을 10분 줄 때
// $("#bt-top-close").click(function(){
//   $(".top-banner").stop().slideUp(300);
//   var d = new Date();
//   d.setTime(d.getTime() + 10*60*1000); //5분 60초 *1000ms
//   //+10분 동안 쿠키 유지
//   $.cookie("top-banner-close", true, {expires: d}); 
//   //expires:1하루/ 시간을 바꿀 때 데이트 객체(d)를 넣어 지정해줌.
// });

// cookie로 제한시간을 10분 줄 때 
$("#bt-top-close").click(function(){
	$(".top-banner").stop().slideUp(300);
	var d = new Date();
	d.setTime(d.getTime() + 1*60*1000);	// 10분동안 쿠키 유지
	$.cookie("top-banner-close", true, {expires: d});
});

//언어 , 통화 선택
$(".sel-top .fa-angle-down").click(function(){
  $(this).next().stop().slideToggle(300);
  $(this).toggleClass("fa-angle-down fa-angle-up");
  // $(this).toggleClass("fa-angle-down");
  // $(this).toggleClass("fa-angle-up");
});
$(".sel-top li").click(function(){
  $(this).parent().parent().children(".sel-top-img").attr("src",$(this).children("img").attr("src"));
  $(this).parent().parent().children(".sel-top-txt").text($(this).children("span").text());
  $(this).parent().prev().trigger("click");
});

// init Masonry
var $grid = $('.grid-wrap').imagesLoaded( function() {
$grid.masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true
});
});