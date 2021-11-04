/* main.js */

$(document).ready(function () {
  $('.tab-bar ul > li').eq(4).click(function () {
    alert('Comming Soon...');
  });

  $('.btn-drawer').click(function () {
    $('.drawer').toggleClass('on');
  });
});