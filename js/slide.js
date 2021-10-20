$(document).ready(function () {
  // Swiper Slide

  var skillSwiper = new Swiper(".skills__swiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: "#skillsNext",
      prevEl: "#skillsPrev",
    },
    observer: true,
    observeParents: true,
  });
  
  var portfolioSwiper = new Swiper(".portfolio__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    },
    pagination: {
      el: "#portfolioPage",
      type: "fraction",
    },
    navigation: {
      nextEl: "#portfolioNext",
      prevEl: "#portfolioPrev",
    }
  });
  
});