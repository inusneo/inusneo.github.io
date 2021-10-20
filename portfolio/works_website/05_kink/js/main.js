/* main.js */
$(function () {
  //윈도우 시작 시 화면 맨위로 이동
  $("body,html").stop().animate({
   "scrollTop": 0
  }, 1500, "swing");

  //브라우저의 높이값을 div의 높이값으로 
  var ht = $(window).height();
  $("#container > div").height(ht);

  $(window).resize(function () {
    var ht = $(window).height();
    $("#container > div").height(ht);
  });

  // 처음 시작시 최초 1번 실행
  var start = setTimeout(function () {
    $("#content1 > section").addClass("on");
    alert("본 페이지는 1920 x 1080의 해상도에 최적화 되어 있습니다. 반드시 'F11'키를 눌러 '전체화면'으로 감상해 주세요!");
  }, 700);

  $(window).scroll(function (e) {
    e.preventDefault();
    var scroll = $(this).scrollTop(); //현재scroll위치값 
    ht = $(window).height();

    //content1
    if (scroll >= 0 && scroll < 1 * ht) { // header의 높이 값 빼기
      //내용물 움직임 시작
      $("#content1 > section").addClass("on");
    } else { //움직임 취소
      $("#content1 > section").removeClass("on");
    }

    //content2
    if (scroll >= 1 * ht && scroll < 2 * ht) {
      $("#content2 > section").addClass("on");
    } else {
      $("#content2 > section").removeClass("on");
    }

    //content3
    if (scroll >= 2 * ht && scroll < 3 * ht) {
      $("#content3 > section").addClass("on");
    } else {
      $("#content3 > section").removeClass("on");
    }

    //content4
    if (scroll >= 3 * ht && scroll < 4 * ht) {
      $("#content4 > section").addClass("on");
    } else {
      $("#content4 > section").removeClass("on");
    }

    //content5
    if (scroll >= 4 * ht && scroll < 5 * ht) {
      $("#content5 > section").addClass("on");
    } else {
      $("#content5 > section").removeClass("on");
    }

    //content6
    if (scroll >= 5 * ht && scroll < 6 * ht) {
      $("#content6 > section").addClass("on");
    } else {
      $("#content6 > section").removeClass("on");
    }

    //content7
    if (scroll >= 6 * ht && scroll < 7 * ht) {
      $("#content7 > section").addClass("on");
    } else {
      $("#content7 > section").removeClass("on");
    }

    //content8
    if (scroll >= 7 * ht && scroll < 8 * ht) {
      $("#content8 > section").addClass("on");
    } else {8
      $("#content8 > section").removeClass("on");
    }

    //content9
    if (scroll >= 8 * ht && scroll < 9 * ht) {
      $("#content9 > section").addClass("on");
    } else {
      $("#content9 > section").removeClass("on");
    }

    //content10
    if (scroll >= 9 * ht && scroll < 10 * ht) {
      $("#content10 > section").addClass("on");
    } else {
      $("#content10 > section").removeClass("on");
    }

    $("#container > div").each(function(index) {
      $(this).attr("data-index", ht * index); // 각 div마다 data 값으로 윈도우 높이
    });

    $("#container > div").mousewheel(function(event, delta) {
      event.preventDefault();
      var divPos = parseInt($(this).attr("data-index"));

      if (delta > 0) {
        $("html, body").stop().animate({"scrollTop": divPos - ht}, 700, "linear");
      } else if (delta < 0) {
        $("html, body").stop().animate({"scrollTop": divPos + ht}, 700, "linear");
      } 
    });
    
    /*
    $("#container > div").mousewheel(function(event, delta) {
      event.preventDefault();
      if (delta > 0) {
        var prev = $(this).prev().offset().top;
        $("html, body").stop().animate({"scrollTop": prev}, 1000, "linear");
      } else if (delta < 0) {
        var next = $(this).next().offset().top;
        $("html, body").stop().animate({"scrollTop": next}, 1000, "linear");
      } 
    });
    */
  });
  //scroll
});