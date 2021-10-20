/* main.js */
$(function () {
  $('.gnb > li').eq(0).click(function () {
     $('.landing').fadeIn();
     $('.desktop, .tablet, .mobile').fadeOut();
  });
  $('.gnb > li').eq(1).click(function () {
     $('.desktop').fadeIn();
     $('.landing, .tablet, .mobile').fadeOut();
  });
  $('.gnb > li').eq(2).click(function () {
     $('.tablet').fadeIn();
     $('.landing, .desktop, .mobile').fadeOut();
  });
  $('.gnb > li').eq(3).click(function () {
     $('.mobile').fadeIn();
     $('.landing, .desktop, .tablet').fadeOut();
  });
});