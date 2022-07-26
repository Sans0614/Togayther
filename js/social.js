//發佈文章後進度條
$(".edit-social-post-progress-bar").animate({
  width: "100%"
}, 300);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

//編輯器用幻燈片
var swiper = new Swiper(".img-social-preview-bar-swiper", {
  //loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  //freeMode: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  breakpoints: {
      1024: {
      slidesPerView: 8,
      spaceBetween: 10
      },
      768: {
      slidesPerView: 6,
      spaceBetween: 10
      }
  }
});
var swiper = new Swiper(".img-social-preview-swiper", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

//文章內頁用幻燈片
var swiper = new Swiper(".social-post-img-swiper", {
  spaceBetween: 10,
  pagination: {
      el: ".social-post-swiper-pagination",
      dynamicBullets: true,
  },
});

//精選會員用幻燈片
var swiper = new Swiper(".social-index-featured-member-swiper", {
  slidesPerView: 5,
  spaceBetween: 16,
  breakpoints: {
      768: {
      slidesPerView: 10,
      spaceBetween: 16
      }
  }
});

//文章檢舉通知用幻燈片
var swiper = new Swiper(".social-notify-report-article-img-swiper", {
  spaceBetween: 10,
  pagination: {
      el: ".social-notify-report-article-swiper-pagination",
      dynamicBullets: true,
  },
});


$('.social-index-grid').masonry({
itemSelector: '.social-index-grid-item',
//horizontalOrder: true
});

$('#social-notify-report-account,#social-notify-report-falsely').on( 'shown.bs.modal', function() {
  $('.social-index-grid').masonry({
    itemSelector: '.social-index-grid-item',
  });
})

$("[data-hover-src]").mouseenter(function(){
  $(this).attr('data-original-src',$(this).attr("src"));
  $(this).attr('src', $(this).data('hover-src'));
});

$("[data-hover-src]").mouseleave(function(){
  $(this).attr('src', $(this).data('original-src'));
});
