$(document).ready(function () {
  // Swiper Slide
  var mainSwiper = new Swiper(".main__swiper", {
    pagination: {
      el: ".slide__roll",
      clickable: true,
    },
  });

  var loungeSwiper = new Swiper(".swiper__lounge", {
    spaceBetween: 60,
    pagination: {
      el: ".slide__pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".btn__next--small",
      prevEl: ".btn__prev--small",
    },
    on: {
      slideChange: function () {
        $(".fraction__cur").text(this.realIndex + 1);
      }
    }
  });

  // Slide next, prev btn effects
  let slideList = $(".slide__lounge").length;
  let slideNum = 1;

  $(".btn__prev--small").click(function () {
    slideNum--;
    if (slideNum < 0) {
      idx = 1;
    } else {
      $(".fraction__cur").text(slideNum);
    }
  });

  $(".btn__next--small").click(function () {
    slideNum++;
    if (slideNum > slideList) {
      slideNum = slideList;
    } else {
      $(".fraction__cur").text(slideNum);
    }
  });
});