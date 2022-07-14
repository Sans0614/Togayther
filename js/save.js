/*文章收藏效果*/

/*外框星星ICON 與 填滿星星ICON 根據點擊而交互顯示*/
$(".saveBlock").click(function(){
  $(".saveIcon",this).toggleClass("displaynone");
  $(".unsavedIcon",this).toggleClass("displayblock");
});

/*使用if else判斷點擊的時候顯示甚麼樣的星星ICON*/
/*
var save_check_status = false;
$(".saveBlock").click(function() {
    if (save_check_status == false) {
        $(".saveIcon",this).attr("src", "./img/saveOutlineIcon.svg");
        save_check_status = true;
    } else {
        $(".saveIcon",this).attr("src", "./img/saveFullIcon.svg");
        save_check_status = false;
    }
})*/