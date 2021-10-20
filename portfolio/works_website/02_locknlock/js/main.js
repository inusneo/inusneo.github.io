/* main.js */

$(document).ready(function() {
  /* Header Hover Effects */

  $(document).on("mouseenter focus", ".gnb__list > li", function() {
    let menuWd = $(this).width();
    let menuIdx = $(this).index();
    let menuLeft = 0;

    let menuList1 = $(".gnb__list > li").eq(0).width();
    let menuList2 = $(".gnb__list > li").eq(1).width();
    let menuList3 = $(".gnb__list > li").eq(2).width();
    let menuList4 = $(".gnb__list > li").eq(3).width();
    let menuList5 = $(".gnb__list > li").eq(4).width();

    if (menuIdx === 0) {
      $(".gnb__line").stop().animate({width: menuWd, left: 0});
    } else if (menuIdx === 1) {
      $(".gnb__line").stop().animate({width: menuWd, left: menuLeft + menuList1});
    } else if (menuIdx === 2) {
      $(".gnb__line").stop().animate({width: menuWd, left: menuLeft + menuList1 + menuList2});
    } else if (menuIdx === 3) {
      $(".gnb__line").stop().animate({width: menuWd, left: menuLeft + menuList1 + menuList2 + menuList3});
    } else if (menuIdx === 4) {
      $(".gnb__line").stop().animate({width: menuWd, left: menuLeft + menuList1 + menuList2 + menuList3 + menuList4});
    }
    
    let menuHt = $(this).children(".gnb__wrap").height();

    $(".header__wrap").addClass("active").css({height: menuHt});
    $(this).addClass("active");
  });
  
  $(document).on("mouseleave blur", ".gnb__list > li", function() {
    $(".gnb__line").stop().animate({width: 0});
    $(".header__wrap").removeClass("active").css({height: 0});
    $(this).removeClass("active");
  });

  /* Language Settings */

  $(document).on("click", ".top-menu__lang > a", function() {
    $(this).toggleClass("active");
    $(this).next("div").toggleClass("active");
  });

  $(document).on("click", ".top-menu__lang > div", function() {
    alert('언어 변경 기능은 준비중입니다.');
    $(this).removeClass("active");
  });

  /* Search All */

  $(".srch").on("scroll touchmove mousewheel", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  $(document).on("click", ".btn-srch > a", function() {
    $(".srch").addClass("active");
    $(".top-menu__lang > div").removeClass("active");
  });

  $(document).on("click", ".btn-srch__close", function() {
    $(".srch").removeClass("active");
  });

  /* Family Sites */
  $(document).on("click", "#btnFamliy", function() {
    $(".footer__family__cont").toggleClass("active");
    $(".btn-family > span").toggleClass("active");
  });

  /* Scroll Top */
  $(document).on("click", "#btnTop", function() {
    $("html, body").animate({scrollTop: 0});
  });

});