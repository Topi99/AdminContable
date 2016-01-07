$(document).ready(function(){
  $("#banner").css({"height":$(window).height() + "px"});

  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 200){
      if(!flag){
        $("#logo").css({"margin-top": "13px", "width": "50px", "height": "50px"});
        $("header").css({"background-color": "#4C565E", "box-shadow": "0px 1px 10px rgb(50, 50, 50)"});
        $("#body").css({"box-shadow": "0px -40px 100px #16191b"});
        flag = true;
      }
    }else{
      if(flag){
        $("header").css({"background-color": "transparent", "box-shadow": "none"})
        $("#logo").css({"margin-top": "180px", "width": "250px", "height": "250px"});
        $("#body").css({"box-shadow": "0px -3px 50px #2a2f33"});
        flag = false;
      }
    }
  });
});
