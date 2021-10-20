$(document).ready(function () {
  $("#header").addClass("active");

  $(".agree__expand").click(function () {
    $(this).toggleClass("active");
    $(this).siblings(".agree__cont").toggleClass("active");
  });

  $("#agreeAll").click(function () {
    if ($("#agreeAll").is(":checked")) {
      $("input[type='checkbox']").prop("checked", true);
      $(".agree__warning").css({"display": "none"});
      $(".agree__list .check-wrap").css({"padding-bottom": "30px"});
    } else {
      $("input[type='checkbox']").prop("checked", false);
      $(".agree__warning").css({"display": "block"});
      $(".agree__list .check-wrap").css({"padding-bottom": 0});
    }
  });

});