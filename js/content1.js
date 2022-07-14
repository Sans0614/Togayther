$(".commentEdit").click(function(){
  $(".commentEditBlock").toggleClass("commentEditShow");
});

/*社群換圖*/
$("[data-hover-img]").mouseenter(function () {
    $(this).data("original-img", $(this).attr('src'));
    $(this).attr('src', $(this).data("hover-img"));
});
$("[data-hover-img]").mouseleave(function () {
    $(this).attr('src', $(this).data("original-img"));
});