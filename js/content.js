/*文章內頁互動按鈕*/

var like_check_status = false;
var comment_check_status = false;
var save_check_status = false;

/*文章按讚*/
$(".likeButton").click(function() {
    if (like_check_status == false) {
        $(".likeButton").addClass("likeButtonClick");
        like_check_status = true;
    } else {
        $(".likeButton").removeClass("likeButtonClick");
        like_check_status = false;
    }
})

/*文章留言*/
/*
$(".commentButton").click(function() {
    if (comment_check_status == false) {
        $(".commentButton").addClass("commentButtonClick");
        comment_check_status = true;
    } else {
        $(".commentButton").removeClass("commentButtonClick");
        comment_check_status = false;
    }
})*/

/*文章收藏*/
$(".saveButton").click(function() {
    if (save_check_status == false) {
        $(".saveButton").addClass("saveButtonClick");
        save_check_status = true;
    } else {
        $(".saveButton").removeClass("saveButtonClick");
        save_check_status = false;
    }
})

/*點擊留言按鈕滑動到留言區塊*/
$(document).ready(function () {
  $(".postContentInteractive a").on("click", function () {
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