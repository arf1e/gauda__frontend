$(function(){


  /* Button up */
  $("body").append('<button class="btn_up"/>');
  $(".btn_up").click(function(){
    $("body").animate({"scrollTop": 0}, 300);
    $("html").animate({"scrollTop": 0}, 300);
  });
  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $(".btn_up").addClass("active");
    }
    else{
      $(".btn_up").removeClass("active");
    }
  });


  /* Progress Bar */
  $(window).scroll (function(){
    var progress = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
    $("#progress").width(progress+ "%");
  });


  /* Smooth Scroll */


});
