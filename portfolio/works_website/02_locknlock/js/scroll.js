$(document).ready(function() {
  /* Scroll Events */

  $(window).scroll(function () {
    let scroll = $(this).scrollTop(); // present scroll top 
    let cont1 = $(".content1").position().top / 5;
    let cont2 = $(".content2").position().top;
    let cont3 = $(".content3").position().top;
    let cont4 = $(".content4").position().top;
    let cont5 = $(".content5").position().top;
    let cont6 = $(".content6").position().top;
    let cont7 = $(".content7").position().top;
    let contBnr = $(".full-banner").position().top;
    let cont8 = $(".content8").position().top;

    //content1
    if (scroll >= cont1 && scroll < cont2) {
      $(".content1").addClass("active");
      $(".content1 .content-box").addClass("active");
    } else {
      $(".content1 .content-box").removeClass("active");
      $(".content1").removeClass("active");
    }
    
    //content2
    if (scroll >= cont2 - 700 && scroll < cont3) {
      $(".content2").addClass("active");
      $(".content2 .content-box").addClass("active");
    } else {
      $(".content2 .content-box").removeClass("active");
      $(".content2").removeClass("active");
    }
      //content3
    if (scroll >= cont3 - 700 && scroll < cont4) {
      $(".content3").addClass("active");
      $(".content3 .content-box").addClass("active");
    } else {
      $(".content3 .content-box").removeClass("active");
      $(".content3").removeClass("active");
    }

    //content4
    if (scroll >= cont4 - 700 && scroll < cont5) {
      $(".content4").addClass("active");
      $(".content4 .content-box").addClass("active");
    } else {
      $(".content4 .content-box").removeClass("active");
      $(".content4").removeClass("active");
    }
    
    //content5
    if (scroll >= cont5 - 700 && scroll < cont6) {
      $(".content5 .content__title").addClass("active");
      $(".content5 .news__wrap ul > li").addClass("active");
    } else {
      $(".content5 .news__wrap ul > li").removeClass("active");
      $(".content5 .content__title").removeClass("active");
    }

    //content6
    if (scroll >= cont6 - 700 && scroll < cont7) {
      $(".content6 .content__title").addClass("active");
      $(".content6 .slide__lounge").addClass("active");
      $(".slide__controller").addClass("active");
    } else {
      $(".slide__controller").removeClass("active");
      $(".content6 .slide__lounge").removeClass("active");
      $(".content6 .content__title").removeClass("active");
    }

    //content7
    if (scroll >= cont7 - 700 && scroll < contBnr) {
      $(".content7 .content__title").addClass("active");
      $(".career").addClass("active");
      $(".contact").addClass("active");
    } else {
      $(".contact").removeClass("active");
      $(".career").removeClass("active");
      $(".content7 .content__title").removeClass("active");
    }

    //content8
    if (scroll >= contBnr - 700 && scroll < cont8) {
      $(".full-banner").addClass("active");
    } else {
      $(".full-banner").removeClass("active");
    }
    //content8
    if (scroll >= cont8 - 700) {
      $(".content8 .content__title").addClass("active");
      $(".now__list > li").addClass("active")
    } else {
      $(".now__list > li").removeClass("active")
      $(".content8 .content__title").removeClass("active");
    }
  });
});