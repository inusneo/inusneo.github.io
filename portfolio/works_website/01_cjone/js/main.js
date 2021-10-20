/* main.js */

$(document).ready(function () {
  var $devWidth;
  var $limitsize = 768;

  $devWidth = $("body").width();

  $(window).resize(function () {
    $devWidth = $("body").width();
  })

  $("html, body").stop().animate({scrollTop: 0}, 500, "linear");
  
  /* mobile hamburger */
  $(".btn-mobile").click(function () {
    $("body").addClass("on");
    $(".modal").addClass("on");
    $(".mobile").addClass("on");
    $(".btn-close").addClass("on");
    $(this).hide();
  });

  $(".btn-close").click(function () {
    $("body").removeClass("on");
    $(".modal").removeClass("on");
    $(".mobile").removeClass("on");
    $(".btn-close").removeClass("on");
    $(".btn-mobile").show();
  });

  /* mobile top menu */
  $(".mobile_top-menu dd").eq(4).click(function () {
    $(this).toggleClass("on");

    if($(this).hasClass("on")) {
      $(this).children("a").attr("title", "고객센터 닫기");
    } else {
      $(this).children("a").attr("title", "고객센터 열기");
    }
  });

  /* mobile gnb */
  $(".mobile_gnb > ul > li").click(function () {
    $(this).siblings().removeClass("on");
    $(this).toggleClass("on");
  });

  /* customer center */
  $(".top_menu > dd").eq(4).click(function () {
    $(this).toggleClass("on");
  });

  /* gnb */
  $(".gnb > ul > li > a").bind("mouseenter focus", function () {
    if ($devWidth < $limitsize) return false;
    if ($(".srch").is(":visible")) { // visible은 선택자가 보이는지 체크
      $(".srch_open").removeClass("on");
      $(".srch").removeClass("on");
    }
    if ($(".top_menu > dd").eq(4).hasClass("on")) {
      $(".top_menu > dd").eq(4).removeClass("on");
    }
    $(".header_wrap").animate({"height":"445px"}, 300, "linear", function () {
      $(".gnb > ul > li > ul").css("display", "block");
    });
  });

  $(".gnb").bind("mouseleave blur", function () {
    if ($devWidth < $limitsize) return false;

    $(".header_wrap").animate({"height":"120px"}, 300, "linear", function () {
      $(".gnb > ul > li > ul").css("display", "none");
    });
  });

  /* srch open */
  $(".srch_open").click(function () {
    $(this).toggleClass("on");
    $(".srch").toggleClass("on");
  });

  /* login images */
  var appear = "";
  for (var i = 0; i < 57; i++) {
    if (i < 10) {
      appear += `<img src="images/appear/appear_0000${i}.png" alt="로그인 버튼${i}" />`;
    } else {
      appear += `<img src="images/appear/appear_000${i}.png" alt="로그인 버튼${i}" />`;
    }
  }
  $(".appear").html(appear);

  /* login animation */
  for (var k = 0; k < 57; k++) {
    $(".appear img").eq(k).css({"animation":"appear 2.85s linear " + 0.05 * k + "s 1 normal"});
  }

  /* loop images */
  var loop = "";
  for (var j = 0; j < 82; j++) {
    if (j < 10) {
      loop += `<img src="images/loop/loop_0000${j}.png" alt="로그인 버튼${j}" />`;
    } else {
      loop += `<img src="images/loop/loop_000${j}.png" alt="로그인 버튼${j}" />`;
    }
  }
  $(".loop").html(loop);

  /* login animation */
  for (var m = 0; m < 82; m++) {
    $(".loop img").eq(m).css({"animation":"appear 4.1s linear " + (2.85 + 0.05 * m) + "s normal infinite"}, {"animation-delay":"2.85s"});
  }
  // 이미지 갯수 x 0.05 (82 x 0.05)

  /* banner */
  var bnnNum = 0;
  var lastNum = $(".banner_frame > section").size()-1;
  var bannerW = $("body > section").width();
  
  $(window).resize(function () {
    bannerW = $("body > section").width();
  });

  $(".btn_next").click(function () {
    bnnNum++;
    if (bnnNum > lastNum) bnnNum = 0;
    $(".banner_frame").stop().animate({"left":-bnnNum * bannerW}, 500, "linear", function () {
      if ($(".banner_frame > section").eq(bnnNum).hasClass("white")) {
        $(this).siblings().find("a").addClass("btn-white");
      } else {
        $(this).siblings().find("a").removeClass("btn-white");
      }
      $(".banner_roll a").removeClass("on");  
      $(".banner_roll a").eq(bnnNum).addClass("on");  
    });
  });

  $(".btn_prev").click(function () {
    bnnNum--;
    if (bnnNum < 0) bnnNum = lastNum;
    $(".banner_frame").stop().animate({"left":-bnnNum * bannerW}, 500, "linear", function () {
      if ($(".banner_frame > section").eq(bnnNum).hasClass("white")) {
        $(this).siblings().find("a").addClass("btn-white");
      } else {
        $(this).siblings().find("a").removeClass("btn-white");
      }
      $(".banner_roll a").removeClass("on");  
      $(".banner_roll a").eq(bnnNum).addClass("on");  
    });
  });

  /* auto banner */
  function autoBanner() {
    bnnNum++;
    if (bnnNum > lastNum) bnnNum = 0;
    $(".banner_frame").stop().animate({"left":-bnnNum * bannerW}, 500, "linear", function () {
      if ($(".banner_frame > section").eq(bnnNum).hasClass("white")) {
        $(this).siblings().find("a").addClass("btn-white");
      } else {
        $(this).siblings().find("a").removeClass("btn-white");
      }
      $(".banner_roll a").removeClass("on");  
      $(".banner_roll a").eq(bnnNum).addClass("on");  
    });
  };

  var autoBnr = setInterval(autoBanner, 5000);

  /* play & pause */
  var flag = true;
  $(".play").click(function () {
    if (flag) {
      // pause
      clearInterval(autoBnr);
      $(this).addClass("pause");
      flag = false;
    } else {
      // play
      autoBnr = setInterval(autoBanner, 5000);
      $(this).removeClass("pause");
      flag = true;
    }
  });

  /* rolling control */
  var rollNum = $(".banner_roll a").click(function () {
    bnnNum = rollNum.index(this);
    $(".banner_frame").stop().animate({"left":-bnnNum * bannerW}, 500, "linear", function () {
      if ($(".banner_frame > section").eq(bnnNum).hasClass("white")) {
        $(this).siblings().find("a").addClass("btn-white");
      } else {
        $(this).siblings().find("a").removeClass("btn-white");
      }
      $(".banner_roll a").removeClass("on");  
      $(".banner_roll a").eq(bnnNum).addClass("on");  
    });
  });

  /* mobile 기기의 방향을 전환 할 때 화면의 너비가 달라지는 것에 대비해 항상 바른 위치에 있도록 animation 적용 */
  $('body > section').bind('orientationchange', function(e) {
    bannerW = $("body > section").width();
    $(".banner_frame").animate({"left":-bnnNum * bannerW}, 500, "linear");
  });
  // in mobile
  $('body > section').bind('swipeleft', function() {
    $('.next').trigger('click'); // trigger()를 사용해 클릭한 것처럼 강제로 이벤트 발생 하도록
  });
  $('body > section').bind('swiperight', function() {
    $('.prev').trigger('click'); 
  });

  var quick1= "";
  for (var i = 0; i < 20; i++) {
    if (i < 10) {
      quick1 += `<img src="images/quick01/quick01_0000${i}.png" alt="쿠폰혜택안내${i}" />`
    } else {
      quick1 += `<img src="images/quick01/quick01_000${i}.png" alt="쿠폰혜택안내${i}" />`
    }
  }
  $(".quick1").html(quick1);

  var quick2= "";
  for (var i = 0; i < 20; i++) {
    if (i < 10) {
      quick2 += `<img src="images/quick02/quick02_0000${i}.png" alt="쿠폰혜택안내${i}" />`
    } else {
      quick2 += `<img src="images/quick02/quick02_000${i}.png" alt="쿠폰혜택안내${i}" />`
    }
  }
  $(".quick2").html(quick2);

  var quick3= "";
  for (var i = 0; i < 20; i++) {
    if (i < 10) {
      quick3 += `<img src="images/quick03/quick03_0000${i}.png" alt="보너스 포인트 안내${i}" />`
    } else {
      quick3 += `<img src="images/quick03/quick03_000${i}.png" alt="보너스 포인트 안내${i}" />`
    }
  }
  $(".quick3").html(quick3);

  var quick4= "";
  for (var i = 0; i < 20; i++) {
    if (i < 10) {
      quick4 += `<img src="images/quick04/quick04_0000${i}.png" alt="쿠폰혜택안내${i}" />`
    } else {
      quick4 += `<img src="images/quick04/quick04_000${i}.png" alt="쿠폰혜택안내${i}" />`
    }
  }
  $(".quick4").html(quick4);

  /* content1 */
  $(".content1  a").hover(function () {
    // mouseenter
    for (var k = 0; k < 20; k++) {
      $(this).find("span").children().eq(k).css({"animation": `appear 1s linear ${0.05 * k}s 1 normal`});
    }
  }, function () {
    // mouseleave
    $(this).find("span").children().css({"animation":"none"});
  });

  /* content3 tab_cont */
  $(".tab_cont > ul > li").hover(function () {
    $(this).addClass("on");
  }, function () {
    $(this).removeClass("on");
  });

  /* tab menu click */
  $(".tab_menu li a").bind("click focus", function (e) {
    e.preventDefault();
    $(".tab_menu li").removeClass("on");
    $(this).parent().addClass("on");

    var idx = $(this).parent().index();

    $(".tab_cont li").hide();
    switch (idx) {
      case 0:
        $(".tab_cont li").show();
        break;
      case 1:
        $(".tab_cont ul").find(".ent").show();
        break;
      case 2:
        $(".tab_cont ul").find(".shop").show();
        break;
      case 3:
        $(".tab_cont ul").find(".dinner").show();
        break;
      case 4:
        $(".tab_cont ul").find(".box").show();
        break;
    }
  });

  /* family site click */
  $(".family_site").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
    
    if ($(this).hasClass("on")) {
      $(this).children("a").attr("title", "닫기");
    } else {
      $(this).children("a").attr("title", "열기");
    }
  });

  /* scroll event */
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll < 200) {
      $(".top").removeClass("on fix");
    }
    if (scroll >= 200 && scroll < 2800) {
      $(".top").removeClass("fix");
      $(".top").addClass("on");
    }
    if (scroll >= 2800) {
      $(".top").addClass("fix");
    }

    /* circle movement */
    
    $(".circle_diamond_left").css({"top":71 + scroll * 0.5});
    //$(".circle_small_left").css({"top":796 + scroll * 1.1});
    //$(".circle_large").css({"top":1726 - scroll * 0.3});

    //$(".circle_micro").css({"top":720 + scroll * 0.1});
    //$(".circle_mid").css({"top":990 + scroll * 1.1});

    $(".circle_small").css({"top":365 + scroll * 0.5});
    $(".circle_medium").css({"top":947 + scroll * 0.1});
    $(".circle_diamond_right").css({"top":-300 + scroll * 0.7});
    
  });

  /* scroll top */
  $(".top").click(function () {
    $("body, html").stop().animate({scrollTop : 0}, 300);
  })
});