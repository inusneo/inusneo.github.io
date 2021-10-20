/* main.js */
$(document).ready(function() {

  /* gnb hover */
  $(document).on("mouseover focus", "#gnb > ul > li > a", function() {
    var ht = $(this).next().height();
    //console.log(ht);
    $('#gnb > ul > li').removeClass("on");
    $(this).parent().addClass("on");
    
    $(".header_wrap").stop().animate({"height": 70 + ht}, 300, "linear");
  });

  $("#gnb").bind("mouseleave focus", function() {
      $('#gnb > ul > li').removeClass("on");
      $(".header_wrap").stop().animate({"height": "70px"}, 300, "linear");
  });

  // search btn
  $(".btn_srch").click(function() {
    $(".srch_wrap").addClass("on");
    $(this).addClass("on");
  });

  $(".btn_srch_close").click(function() {
    $(".srch_wrap").removeClass("on");
    $(".btn_srch").removeClass("on");
  });

  // main_visual slide
  var bnrNum = 0;
  var lastNum = $(".slide_wrap > li").size()-1;

  // next, prev btn
  $(".btn_next").click(function(e) {
    e.preventDefault();
    bnrNum++;
    if (bnrNum > lastNum) {
      bnrNum = 0;
    }
    
    $(".slide").removeClass("active");
    $(".slide").eq(bnrNum).addClass("active");
    
    $(".slide_roll li").removeClass("active");
    $(".slide_roll li").eq(bnrNum).addClass("active");
  });

  $(".btn_prev").click(function(e) {
    e.preventDefault();
    bnrNum--;
    if (bnrNum < 0) {
      bnrNum = lastNum;
    }
    $(".slide").removeClass("active");
    $(".slide").eq(bnrNum).addClass("active");

    $(".slide_roll li").removeClass("active");
    $(".slide_roll li").eq(bnrNum).addClass("active");
  });

  // auto rolling
  function autoBanner() {
    bnrNum++;
    if (bnrNum > lastNum) {
      bnrNum = 0;
    }
    
    $(".slide").removeClass("active");
    $(".slide").eq(bnrNum).addClass("active");
    
    $(".slide_roll li").removeClass("active");
    $(".slide_roll li").eq(bnrNum).addClass("active");
  };

  var autoBnr = setInterval(autoBanner, 5000);

  // play, pause
  var flag = true;

  $(".btn_play").click(function(e) {
    e.preventDefault();
    if (flag) {
      clearInterval(autoBnr);
      $(this).addClass("pause");
      flag = false;
    } else {
      autoBnr = setInterval(autoBanner, 5000);
      $(this).removeClass("pause");
      flag = true;
    }
  });

  // rolling navigation
  $(".slide_roll li a").click(function(e) {
    e.preventDefault();
    var rollNum = $(this).parent().index();
    $(".slide").removeClass("active");
    $(".slide").eq(rollNum).addClass("active");
    
    $(".slide_roll li").removeClass("active");
    $(".slide_roll li").eq(rollNum).addClass("active");
  });

  // aside Top btn
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 0 && scroll < 70) {
      $(".btn_top").fadeOut();
    } else if (scroll >= 70) {
      $(".btn_top").fadeIn();
    }
  });
});
