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


//固定廣告關閉功能
$(function(){
  $('#advertise-fixed-close-button').on('click',function(){
    $('#advertise-fixed-button').css('display','none')
    $('#advertise-fixed-close-button').css('display','none')
  });
});