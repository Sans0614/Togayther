$("#navbarMenuBtn").click(function(){
  $("#navbarMenubg,#navbarMenuText").css("animation","fade-right 0.8s 1 forwards");
  $("#navbarMenubg,#navbarMenuText").css("display","block");
});

$("#navbarMenuCloseBtn").click(function(){
  $("#navbarMenubg,#navbarMenuText").css("animation","fade-left 0.8s 1 forwards");
  function closebtn(){
    $("#navbarMenubg,#navbarMenuText").css("display","none");
  }
  setTimeout(closebtn,800)
});

$("#searchbtn").click(function(){
  $("#navbarSearchPage").css("display","block");
  $("#navbarSearchPage").css("animation","fade-in 0.5s 1 forwards");
});

$("#navbarSearchCloseBtn").click(function(){
  $("#navbarSearchPage").css("animation","fade-out 0.5s 1 forwards");
  function closebtn(){
    $("#navbarSearchPage").css("display","none");
  }
  setTimeout(closebtn,500)
});


function menudisplay(){
  $(".loading").css("display","none")
  $(".load").css("animation-play-state","paused")
}
setTimeout(menudisplay,1000)

/*社群換圖*/
$("#facebookIcon").mouseenter(function(){
  $("#facebookIcon").attr("src","./img/navbar/FacebookIconHover.svg");
});

$("#facebookIcon").mouseleave(function(){
  $("#facebookIcon").attr("src","./img/navbar/FacebookIcon.svg");
});

$("#instagramIcon").mouseenter(function(){
  $("#instagramIcon").attr("src","./img/navbar/InstagramIconHover.svg");
});

$("#instagramIcon").mouseleave(function(){
  $("#instagramIcon").attr("src","./img/navbar/InstagramIcon.svg");
});

$("#navbar-go-to-social-btn").mouseenter(function(){
  $("#navbar-go-to-social-btn").attr("src","./img/navbar/go_to_social_fill_black.svg");
});

$("#navbar-go-to-social-btn").mouseleave(function(){
  $("#navbar-go-to-social-btn").attr("src","./img/navbar/go_to_social_outline_black.svg");
});

$("[data-hover-text]").mouseenter(function(){
  $(this).data('original-text', $(this).text());
  $(this).text($(this).data('hover-text'));
});
$("[data-hover-text]").mouseleave(function(){
  $(this).text($(this).data('original-text'));
});


// /*熱門主打*/
// $(".cate01").mouseenter(function(){
//   $(".cate01").text("發燒話題");
// });

// $(".cate01").mouseleave(function(){
//   $(".cate01").text("HOT ISSUE");
// });

// /*精選頻道*/
// $(".cate02").mouseenter(function(){
//   $(".cate02").text("精選頻道");
// });

// $(".cate02").mouseleave(function(){
//   $(".cate02").text("YOUTUBE");
// });

// /*品味職人*/
// $(".cate03").mouseenter(function(){
//   $(".cate03").text("品味職人");
// });

// $(".cate03").mouseleave(function(){
//   $(".cate03").text("CRAFTSMAN");
// });

// /*影音娛樂*/
// $(".cate04").mouseenter(function(){
//   $(".cate04").text("影音娛樂");
// });

// $(".cate04").mouseleave(function(){
//   $(".cate04").text("MEDIA ENTERTAINMENT");
// });

// /*生活消費*/
// $(".cate05").mouseenter(function(){
//   $(".cate05").text("生活消費");
// });

// $(".cate05").mouseleave(function(){
//   $(".cate05").text("LIVING CONSUMPTION");
// });

// /*美食旅遊*/
// $(".cate06").mouseenter(function(){
//   $(".cate06").text("美食旅遊");
// });

// $(".cate06").mouseleave(function(){
//   $(".cate06").text("FOOD&TRAVEL");
// });

// /*潮流時尚*/
// $(".cate07").mouseenter(function(){
//   $(".cate07").text("潮流時尚");
// });

// $(".cate07").mouseleave(function(){
//   $(".cate07").text("FASHION");
// });

// /*運動健康*/
// $(".cate08").mouseenter(function(){
//   $(".cate08").text("運動健康");
// });

// $(".cate08").mouseleave(function(){
//   $(".cate08").text("SPORTS");
// });

// /*友善連結*/
// $(".cate09").mouseenter(function(){
//   $(".cate09").text("友善連結");
// });

// $(".cate09").mouseleave(function(){
//   $(".cate09").text("LINKS");
// });

// function navbarfixed(){
//   var scroll_y = $(window).scrollTop();
//   var scroll_y_trig = 1;
//   if(scroll_y > scroll_y_trig){
//     $('#navbar').css('position','fixed');
//   }
//   if(scroll_y < scroll_y_trig){
//     $('#navbar').css('position','relative');
//   }
// }

// $(document).ready(function(){
//   $(window).scroll(function(){
//     navbarfixed();
//   })
// })