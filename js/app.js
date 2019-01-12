$(function() {

  if($(window).width() < 500){
    $(".frame__pic").removeClass("col-6");
    $(".frame__pic").addClass("col-12");
    $(".frame__pic__color").removeClass("col-6");
    $(".frame__pic__color").addClass("col-12");
    $(".wheels__pic").removeClass("col-6");
    $(".wheels__pic").addClass("col-12");
    $(".wheels__pic__color").removeClass("col-6");
    $(".wheels__pic__color").addClass("col-12");
    $(".steering_wheel__pic").removeClass("col-6");
    $(".steering_wheel__pic").addClass("col-12");
    $("steering_wheel__pic__color").removeClass("col-6");
    $("steering_wheel__pic__color").addClass("col-12");
    $(".spray_efect").removeClass("col-3");
    $(".spray_efect").addClass("col-12");
    $(".spray_efect").css("height","50px");
  }



  start_rider = setInterval ( () => {
    $(".logo").addClass("logo__animation");
    start_rider2 = setInterval ( () => {
      $(".logo").css("display","none");
      $(".rider_animation").css("display","block");
      clearInterval(start_rider);
      clearInterval(start_rider2);
  }, 1000);
}, 300);


var body = $("body");
var vph = $(window).height();
body.css("height",vph);
menu = $(".menu_bar");
menu.css("height",vph);

var clicks = 0;
$(".menu").on("click",function(){
  if(clicks == 0){
  $(".menu_bar").css("margin-right","0");
  $(".menu_bar").css("transition","2s");
  $(this).html("×");
  clicks++;
}
else{
  if($(window).width() < 800){
    $(".menu_bar").css("margin-right","-100px");
    $(".menu_bar").css("transition","2s");
    $(this).html("≡");
    clicks--;
  }else{
  $(".menu_bar").css("margin-right","-200px");
  $(".menu_bar").css("transition","2s");
  $(this).html("≡");
  clicks--;
}
}
})


var position= 0;
var spray_animation;
var blue_animation = "blue";
var green_animation = "green";
var red_animation = "red";
var black_animation = "black";
var spray_animation_pic = "";
var spray_animation_pic2 = "2";
var spray_animation_pic3 = "3";
var spray_animation_step = 100;
var spray_animation_max = 300;
var spray_animation_step2 = 50;
var spray_animation_max2 = 150;
function startSprayAnimation(step,max,color,picture){
  spray_animation = setInterval ( () => {

$(".spray__animation").css("background",`url("./images/spray_efect_${color}${picture}.png")-${position}px 0px`);

if (position < max)
{ position = position + step;}
else{
  clearInterval(spray_animation);
  $(".spray__animation").css("background","none");
  position=0;
  $('.frame__pic').css("background-image",`url("./images/rama_${color}.png")`);
}
}, 100);
}


function startSprayAnimationWidth(step,max,color,picture){
  spray_animation = setInterval ( () => {

$(".spray__animation").css("background",`url("./images/spray_efect_${color}${picture}.png") 0px -${position}px`);

if (position < max)
{ position = position + step;}
else{
  clearInterval(spray_animation);
  $(".spray__animation").css("background","none");
  position=0;
  $('.frame__pic').css("background-image",`url("./images/rama_${color}.png")`);
}
}, 100);
}

var vpw = $(window).width();

$(".frame__pic__color__choice__blue").on("click",function(){
  $('.frame__pic').attr("data-frame","blue");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation").css("margin-top","50px");
    $(".spray__animation").css("background-position","10px");
    startSprayAnimation(spray_animation_step2,spray_animation_max2,blue_animation,spray_animation_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation").css("margin-top","15px");
  $(".spray__animation").css("margin-left","-8%");
  $(".spray__animation").css("background-position","10px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,blue_animation,spray_animation_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation").css("margin-left","-10%");
  $(".spray__animation").css("margin-top","15px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,blue_animation,spray_animation_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation").css("margin-left","-18%");
  $(".spray__animation").css("margin-top","15px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,blue_animation,spray_animation_pic3);
}
else {
  $(".spray__animation").css("margin-top","100px");
  startSprayAnimation(spray_animation_step,spray_animation_max,blue_animation,spray_animation_pic);
}
})
$(".frame__pic__color__choice__green").on("click",function(){
  $('.frame__pic').attr("data-frame","green");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation").css("margin-top","50px");
    startSprayAnimation(spray_animation_step2,spray_animation_max2,green_animation,spray_animation_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation").css("margin-top","15px");
  $(".spray__animation").css("margin-left","0%");
  $(".spray__animation").css("background-position","10px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,green_animation,spray_animation_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation").css("margin-left","-4%");
  $(".spray__animation").css("margin-top","15px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,green_animation,spray_animation_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation").css("margin-left","-10%");
  $(".spray__animation").css("margin-top","15px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,green_animation,spray_animation_pic3);
}
else{
  $(".spray__animation").css("margin-top","100px");
  startSprayAnimation(spray_animation_step,spray_animation_max,green_animation,spray_animation_pic);
}
})
$(".frame__pic__color__choice__red").on("click",function(){
  $('.frame__pic').attr("data-frame","red");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation").css("margin-top","80px");
    startSprayAnimation(spray_animation_step2,spray_animation_max2,red_animation,spray_animation_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation").css("margin-top","15px");
  $(".spray__animation").css("margin-left","-8%");
  $(".spray__animation").css("background-position","10px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,red_animation,spray_animation_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation").css("margin-left","-10%");
  $(".spray__animation").css("margin-top","15px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,red_animation,spray_animation_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation").css("margin-left","-18%");
  $(".spray__animation").css("margin-top","15px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,red_animation,spray_animation_pic3);
}
else{
  $(".spray__animation").css("margin-top","100px");
  startSprayAnimation(spray_animation_step,spray_animation_max,red_animation,spray_animation_pic);
}
})
$(".frame__pic__color__choice__black").on("click",function(){
  $('.frame__pic').attr("data-frame","black");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation").css("margin-top","80px");
    startSprayAnimation(spray_animation_step2,spray_animation_max2,black_animation,spray_animation_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation").css("margin-top","15px");
  $(".spray__animation").css("margin-left","0%");
  $(".spray__animation").css("background-position","10px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,black_animation,spray_animation_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation").css("margin-left","-4%");
  $(".spray__animation").css("margin-top","15px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,black_animation,spray_animation_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation").css("margin-left","-10%");
  $(".spray__animation").css("margin-top","15px");
  startSprayAnimationWidth(spray_animation_step2,spray_animation_max2,black_animation,spray_animation_pic3);
}
else{
  $(".spray__animation").css("margin-top","100px");
  startSprayAnimation(spray_animation_step,spray_animation_max,black_animation,spray_animation_pic);
}
})

var position2= 0;
var spray_animation2;
var blue_animation = "blue";
var green_animation = "green";
var red_animation = "red";
var black_animation = "black";
var spray_animation2_pic = "";
var spray_animation2_pic2 = "2";
var spray_animation2_pic3 = "3";
var spray_animation2_step = 100;
var spray_animation2_max = 300;
var spray_animation2_step2 = 50;
var spray_animation2_max2 = 150;
function startSprayAnimation2(step,max,color,picture){
  spray_animation2 = setInterval ( () => {

$(".spray__animation2").css("background",`url("./images/spray_efect_${color}${picture}.png")-${position2}px 0px`);

if (position2 < max)
{ position2 = position2 + step;}
else{
  clearInterval(spray_animation2);
  $(".spray__animation2").css("background","none");
  position2=0;
  $('.wheels__pic').css("background-image",`url("./images/koło_${color}.png")`);
}
}, 100);
}

function startSprayAnimationWidth2(step,max,color,picture){
  spray_animation2 = setInterval ( () => {

$(".spray__animation2").css("background",`url("./images/spray_efect_${color}${picture}.png") 0px -${position}px`);

if (position < max)
{ position = position + step;}
else{
  clearInterval(spray_animation2);
  $(".spray__animation2").css("background","none");
  position=0;
  $('.wheels__pic').css("background-image",`url("./images/koło_${color}.png")`);
}
}, 100);
}


$(".wheels__pic__color__choice__blue").on("click",function(){
  $('.wheels__pic').attr("data-wheels","blue");
  $(".spray__animation2").css("margin-top","100px");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation2").css("margin-top","50px");
    startSprayAnimation2(spray_animation2_step2,spray_animation2_max2,blue_animation,spray_animation2_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation2").css("margin-top","15px");
  $(".spray__animation2").css("margin-left","-8%");
  $(".spray__animation2").css("background-position","10px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,blue_animation,spray_animation2_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation2").css("margin-left","-10%");
  $(".spray__animation2").css("margin-top","15px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,blue_animation,spray_animation2_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation2").css("margin-left","-18%");
  $(".spray__animation2").css("margin-top","15px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,blue_animation,spray_animation2_pic3);
}
else{
  $(".spray__animation2").css("margin-top","100px");
  startSprayAnimation2(spray_animation2_step,spray_animation2_max,blue_animation,spray_animation2_pic);
}
})
$(".wheels__pic__color__choice__green").on("click",function(){
  $('.wheels__pic').attr("data-wheels","green");
  $(".spray__animation2").css("margin-top","100px");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation2").css("margin-top","50px");
    startSprayAnimation2(spray_animation2_step2,spray_animation2_max2,green_animation,spray_animation2_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation2").css("margin-top","15px");
  $(".spray__animation2").css("margin-left","0%");
  $(".spray__animation2").css("background-position","10px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,green_animation,spray_animation2_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation2").css("margin-left","-4%");
  $(".spray__animation2").css("margin-top","15px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,green_animation,spray_animation2_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation2").css("margin-left","-10%");
  $(".spray__animation2").css("margin-top","15px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,green_animation,spray_animation2_pic3);
}
else{
  $(".spray__animation2").css("margin-top","100px");
  startSprayAnimation2(spray_animation2_step,spray_animation2_max,green_animation,spray_animation2_pic);
}

})
$(".wheels__pic__color__choice__red").on("click",function(){
  $('.wheels__pic').attr("data-wheels","red");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation2").css("margin-top","80px");
    startSprayAnimation2(spray_animation2_step2,spray_animation2_max2,red_animation,spray_animation2_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation2").css("margin-top","15px");
  $(".spray__animation2").css("margin-left","-8%");
  $(".spray__animation2").css("background-position","10px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,red_animation,spray_animation2_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation2").css("margin-left","-10%");
  $(".spray__animation2").css("margin-top","15px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,red_animation,spray_animation2_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation2").css("margin-left","-18%");
  $(".spray__animation2").css("margin-top","15px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,red_animation,spray_animation2_pic3);
}
else{
  $(".spray__animation2").css("margin-top","100px");
  startSprayAnimation2(spray_animation2_step,spray_animation2_max,red_animation,spray_animation2_pic);
}
})
$(".wheels__pic__color__choice__black").on("click",function(){
  $('.wheels__pic').attr("data-wheels","black");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation2").css("margin-top","80px");
    startSprayAnimation2(spray_animation2_step2,spray_animation2_max2,black_animation,spray_animation2_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation2").css("margin-top","15px");
  $(".spray__animation2").css("margin-left","0%");
  $(".spray__animation2").css("background-position","10px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,black_animation,spray_animation2_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation2").css("margin-left","-4%");
  $(".spray__animation2").css("margin-top","-15px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,black_animation,spray_animation2_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation2").css("margin-left","-10%");
  $(".spray__animation2").css("margin-top","-15px");
  startSprayAnimationWidth2(spray_animation2_step2,spray_animation2_max2,black_animation,spray_animation2_pic3);
}
else{
  $(".spray__animation2").css("margin-top","100px");
  startSprayAnimation2(spray_animation2_step,spray_animation2_max,black_animation,spray_animation2_pic);
}
})


var position4= 0;
var spray_animation4;
var blue_animation = "blue";
var green_animation = "green";
var red_animation = "red";
var black_animation = "black";
var spray_animation4_pic = "";
var spray_animation4_pic2 = "2";
var spray_animation4_pic3 = "3";
var spray_animation4_step = 100;
var spray_animation4_max = 300;
var spray_animation4_step2 = 50;
var spray_animation4_max2 = 150;
function startSprayAnimation4(step,max,color,picture){
  spray_animation4 = setInterval ( () => {

$(".spray__animation4").css("background",`url("./images/spray_efect_${color}${picture}.png")-${position4}px 0px`);

if (position4 < max)
{ position4 = position4 + step;}
else{
  clearInterval(spray_animation4);
  $(".spray__animation4").css("background","none");
  position4=0;
  $('.steering_wheel__pic').css("background-image",`url("./images/kierownica_${color}.png")`);
}
}, 100);
}



function startSprayAnimationWidth3(step,max,color,picture){
  spray_animation4 = setInterval ( () => {

$(".spray__animation4").css("background",`url("./images/spray_efect_${color}${picture}.png") 0px -${position}px`);

if (position < max)
{ position = position + step;}
else{
  clearInterval(spray_animation4);
  $(".spray__animation4").css("background","none");
  position=0;
  $('.steering_wheel__pic').css("background-image",`url("./images/kierownica_${color}.png")`);
}
}, 100);
}

$(".steering_wheel__pic__color__choice__blue").on("click",function(){
  $('.steering_wheel__pic').attr("data-steering_wheel","blue");
  $(".spray__animation4").css("margin-top","100px");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation4").css("margin-top","80px");
    startSprayAnimation4(spray_animation4_step2,spray_animation4_max2,blue_animation,spray_animation4_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation4").css("margin-top","15px");
  $(".spray__animation4").css("margin-left","-8%");
  $(".spray__animation4").css("background-position","10px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,blue_animation,spray_animation4_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation4").css("margin-left","-20%");
  $(".spray__animation4").css("margin-top","15px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,blue_animation,spray_animation4_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation4").css("margin-left","-26%");
  $(".spray__animation4").css("margin-top","15px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,blue_animation,spray_animation4_pic3);
}
else{
  $(".spray__animation4").css("margin-top","100px");
  startSprayAnimation4(spray_animation4_step,spray_animation4_max,blue_animation,spray_animation4_pic);
}
})
$(".steering_wheel__pic__color__choice__green").on("click",function(){
  $('.steering_wheel__pic').attr("data-steering_wheel","green");
  $(".spray__animation4").css("margin-top","100px");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation4").css("margin-top","80px");
    startSprayAnimation4(spray_animation4_step2,spray_animation4_max2,green_animation,spray_animation4_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation4").css("margin-top","15px");
  $(".spray__animation4").css("margin-left","0%");
  $(".spray__animation4").css("background-position","10px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,green_animation,spray_animation4_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation4").css("margin-left","-14%");
  $(".spray__animation4").css("margin-top","15px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,green_animation,spray_animation4_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation4").css("margin-left","-20%");
  $(".spray__animation4").css("margin-top","15px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,green_animation,spray_animation4_pic3);
}
else{
  $(".spray__animation4").css("margin-top","100px");
  startSprayAnimation4(spray_animation4_step,spray_animation4_max,green_animation,spray_animation4_pic);
}

})
$(".steering_wheel__pic__color__choice__red").on("click",function(){
  $('.steering_wheel__pic').attr("data-steering_wheel","red");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation4").css("margin-top","80px");
    startSprayAnimation4(spray_animation4_step2,spray_animation4_max2,red_animation,spray_animation4_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation4").css("margin-top","15px");
  $(".spray__animation4").css("margin-left","-8%");
  $(".spray__animation4").css("background-position","10px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,red_animation,spray_animation4_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation4").css("margin-left","-20%");
  $(".spray__animation4").css("margin-top","15px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,red_animation,spray_animation4_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation4").css("margin-left","-26%");
  $(".spray__animation4").css("margin-top","15px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,red_animation,spray_animation4_pic3);
}
else{
  $(".spray__animation4").css("margin-top","100px");
  startSprayAnimation4(spray_animation4_step,spray_animation4_max,red_animation,spray_animation4_pic);
}
})
$(".steering_wheel__pic__color__choice__black").on("click",function(){
  $('.steering_wheel__pic').attr("data-steering_wheel","black");
  if(vpw < 800 && vpw > 500){
    $(".spray__animation4").css("margin-top","80px");
    startSprayAnimation4(spray_animation4_step2,spray_animation4_max2,black_animation,spray_animation4_pic2);
}
else if(vpw < 500 && vpw > 400){
  $(".spray__animation4").css("margin-top","15px");
  $(".spray__animation4").css("margin-left","0%");
  $(".spray__animation4").css("background-position","10px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,black_animation,spray_animation4_pic3);
}
else if(vpw < 400 && vpw > 300){
  $(".spray__animation4").css("margin-left","-14%");
  $(".spray__animation4").css("margin-top","15px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,black_animation,spray_animation4_pic3);
}
else if(vpw < 300 && vpw > 200){
  $(".spray__animation4").css("margin-left","-20%");
  $(".spray__animation4").css("margin-top","15px");
  startSprayAnimationWidth3(spray_animation4_step2,spray_animation4_max2,black_animation,spray_animation4_pic3);
}
else{
  $(".spray__animation4").css("margin-top","100px");
  startSprayAnimation4(spray_animation4_step,spray_animation4_max,black_animation,spray_animation4_pic);
}
})



$(".over_product__button").on("click",function(){
  var frame_color = $('.frame__pic').attr("data-frame");
  var wheels_color = $('.wheels__pic').attr("data-wheels");
  var steering_wheel_color = $('.steering_wheel__pic').attr("data-steering_wheel");
  console.log(steering_wheel_color)
  console.log(wheels_color)
  console.log(frame_color)
  $(".over_product__text").html("Potwierdź wybór elementów przyciskiem i zobacz jak będzie wyglądał twój rower");
  if(frame_color == "blue" && wheels_color == "blue" &&  steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_blue_blue.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "black" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_black_blue.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "blue" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_blue_black.png")`);
  }
  else if(frame_color == "black" && wheels_color == "blue" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_blue_black.png")`);
  }
  else if(frame_color == "black" && wheels_color == "black" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_black_blue.png")`);
  }
  else if(frame_color == "black" && wheels_color == "blue" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_blue_blue.png")`);
  }
  else if(frame_color == "black" && wheels_color == "black" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_black_black.png")`);
  }
  else if(frame_color == "red" && wheels_color == "red" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_red_red.png")`);
  }
  else if(frame_color == "green" && wheels_color == "green" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_green_green.png")`);
  }
  else if(frame_color == "red" && wheels_color == "green" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_green_red.png")`);
  }
  else if(frame_color == "red" && wheels_color == "red" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_red_green.png")`);
  }
  else if(frame_color == "green" && wheels_color == "red" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_red_red.png")`);
  }
  else if(frame_color == "green" && wheels_color == "red" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_red_green.png")`);
  }
  else if(frame_color == "green" && wheels_color == "green" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_green_red.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "green" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_green_red.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "green" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_green_black.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "green" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_green_blue.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "green" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_green_green.png")`);
  }
  else if(frame_color == "green" && wheels_color == "blue" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_blue_blue.png")`);
  }
  else if(frame_color == "green" && wheels_color == "blue" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_blue_green.png")`);
  }
  else if(frame_color == "green" && wheels_color == "green" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_green_blue.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "red" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_red_blue.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "red" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_red_red.png")`);
  }
  else if(frame_color == "red" && wheels_color == "blue" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_blue_blue.png")`);
  }
  else if(frame_color == "red" && wheels_color == "blue" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_blue_red.png")`);
  }
  else if(frame_color == "red" && wheels_color == "red" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_red_blue.png")`);
  }
  else if(frame_color == "red" && wheels_color == "red" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_red_black.png")`);
  }
  else if(frame_color == "red" && wheels_color == "black" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_black_red.png")`);
  }
  else if(frame_color == "black" && wheels_color == "black" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_black_red.png")`);
  }
  else if(frame_color == "black" && wheels_color == "red" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_red_black.png")`);
  }
  else if(frame_color == "black" && wheels_color == "red" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_red_red.png")`);
  }
  else if(frame_color == "black" && wheels_color == "black" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_black_green.png")`);
  }
  else if(frame_color == "black" && wheels_color == "green" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_green_black.png")`);
  }
  else if(frame_color == "green" && wheels_color == "green" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_green_black.png")`);
  }
  else if(frame_color == "green" && wheels_color == "black" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_black_black.png")`);
  }
  else if(frame_color == "green" && wheels_color == "black" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_black_green.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "red" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_red_black.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "red" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_red_green.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "black" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_black_green.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "black" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_black_red.png")`);
  }
  else if(frame_color == "black" && wheels_color == "green" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_green_red.png")`);
  }
  else if(frame_color == "black" && wheels_color == "green" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_green_blue.png")`);
  }
  else if(frame_color == "black" && wheels_color == "red" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_red_blue.png")`);
  }
  else if(frame_color == "black" && wheels_color == "red" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_red_green.png")`);
  }
  else if(frame_color == "black" && wheels_color == "blue" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_blue_green.png")`);
  }
  else if(frame_color == "black" && wheels_color == "blue" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_black_blue_red.png")`);
  }
  else if(frame_color == "red" && wheels_color == "black" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_black_green.png")`);
  }
  else if(frame_color == "red" && wheels_color == "black" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_black_blue.png")`);
  }
  else if(frame_color == "red" && wheels_color == "blue" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_blue_black.png")`);
  }
  else if(frame_color == "red" && wheels_color == "blue" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_blue_green.png")`);
  }
  else if(frame_color == "red" && wheels_color == "green" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_green_blue.png")`);
  }
  else if(frame_color == "red" && wheels_color == "green" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_green_black.png")`);
  }
  else if(frame_color == "green" && wheels_color == "red" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_red_blue.png")`);
  }
  else if(frame_color == "green" && wheels_color == "red" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_red_black.png")`);
  }
  else if(frame_color == "green" && wheels_color == "black" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_black_red.png")`);
  }
  else if(frame_color == "green" && wheels_color == "black" && steering_wheel_color == "blue"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_black_blue.png")`);
  }
  else if(frame_color == "green" && wheels_color == "blue" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_blue_red.png")`);
  }
  else if(frame_color == "green" && wheels_color == "blue" && steering_wheel_color == "black"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_green_blue_black.png")`);
  }
  else if(frame_color == "red" && wheels_color == "green" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_red_green_green.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "blue" && steering_wheel_color == "red"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_blue_red.png")`);
  }
  else if(frame_color == "blue" && wheels_color == "blue" && steering_wheel_color == "green"){
    $(".over_product__picture").html("");
    $(".over_product__picture").css("background-image",`url("./images/over_bike/rower_blue_blue_green.png")`);
  }
  else{
    $(".over_product__text").html("Ustaw kolor wszystkim elementom!!");
  }
})

var vpw = $(window).width();

var rider_position = 0;
var rider_animation;
var rider_step = 120;
var rider_max = 240;
var rider_pic = "rider_all2";
var rider_step2 = 60;
var rider_max2 = 120;
var rider_pic2 = "rider_all3";
function riderAnimation(step,max,picture){
  rider_animation = setInterval ( () => {

$(".rider_animation").css("background",`url("./images/${picture}.png")-${rider_position}px 0px`);

if (rider_position < max)
{ rider_position = rider_position + step;}
else{
  rider_position=0;
}
}, 100);
}

if(vpw > 500){
  riderAnimation(rider_step,rider_max,rider_pic);
}else{
  riderAnimation(rider_step2,rider_max2,rider_pic2);
}
var array_number = [];
$('body').scroll(function(){
  var number = (-($("#header").position().top));
array_number.push(number);
    if(array_number.length > 3){
      array_number.shift();
    }

    var number1 = array_number[array_number.length - 1];
    var number2 = array_number[array_number.length - 2];

    if(number1>number2){
      if($(".logo").hasClass("logo__animation") == false ){
      $(".rider_animation").removeClass("rider_animation__down");
      $(".rider_animation").addClass("rider_animation__up");
    }
  }
    else if(number1 < number2)
    {
      $(".logo").removeClass("logo__animation");
      $(".rider_animation").removeClass("rider_animation__up");
      $(".rider_animation").addClass("rider_animation__down");
    }

});


})
