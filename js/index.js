var swiper = new Swiper(".bannerSwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".Bannerswiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*精選頻道文章幻燈片*/
var swiper = new Swiper(".youtubeSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

/*九大分類置頂選單*/

function menuontop(){
  var scroll_y = $(window).scrollTop();
  var scroll_y_trig = 400;
  if($(window).width() > 1050 && scroll_y > scroll_y_trig){
    $('#categorysection').css('position','relative');
    $('#categorysection').css('top','0px');
  }
  if($(window).width() < 1050 && scroll_y > scroll_y_trig){
    $('#categorysection').css('position','fixed');
    $('#categorysection').css('z-index','2');
    $('#categorysection').css('top','50px');
    $('#categorysection').css('background','rgba(245,245,245,0.95)');
    $('#categorysection').css('width','100%');
  }
  if($(window).width() < 1050 && scroll_y < scroll_y_trig){
    $('#categorysection').css('position','relative');
    $('#categorysection').css('z-index','2');
    $('#categorysection').css('top','0px');
    $('#categorysection').css('background','#F5F5F5');
  }
}

$(document).ready(function(){
  $(window).scroll(function(){
    menuontop();
  })
})


$(document).ready(function () {
  //要執行回到最上方
  $('.backTop').on('click',function(){
     $("html,body").animate(
      {
        scrollTop:0 //回到第一個區塊
      },
      100
    );   
  })
  //其它連到對應區塊
  $("#categorybar a").on("click", function () {
    var hrefLink = $(this).attr("href");
    console.log(hrefLink);
    $("html,body").animate(
      {
        scrollTop: $(hrefLink).offset().top - $("#navbar").height() - 20 //直接到相對位置
      },
      1000
    );
  });
});