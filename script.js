//$(function(){
//
//var currIndex;
//
////$("#header").hide();
//
////$("ul li img").click(function() {
////
////    currIndex = $(this).parent();
////
////   var selectsrc = $(this).attr("src");
////    $("#display").attr("src", selectsrc);
////
////    $("#gray").slideDown();
////    $("#white").fadeIn();
////});
////
////$("#gray").click(function(){
////    $("#gray").slideToggle();
////    $("#white").fadeOut();
////});
//
//$("#right").click(function(){
//
//    var numOfItems = $("ul li img").length;
//    console.log(numOfItems);
//    var nextIndex = currIndex.next();
//    var nextImg = nextIndex.children("img").attr("src");
//    $("#display").attr("src", nextImg);
//    currIndex = nextIndex;
//
//    currIndex++;
//
//   if (currIndex >= numOfItems){
//    currIndex = 0;
//   }
//
//
//})
//
//
//
//});

$( document ).ready(function(){
console.log('document READY!');
    
$('.dragon-gif').first().addClass('active');
var totalGifs = 0;
$('.dragon-gif').each(function(){
totalGifs++;
 $(this).attr('data-index',totalGifs);
})

$('.hit-box').click(function() {
 var index = $('.dragon-gif.active').attr('data-index');
 $('.dragon-gif.active').removeClass('active');
 
 if(index < totalGifs){
  index++;
  $('.dragon-gif[data-index="'+index+'"]').addClass('active');
 }else{
  $('.dragon-gif[data-index="1"]').addClass('active');
 }
});
});
