//스와이퍼
$(function(){
  var swiper2 = new Swiper('.swiper2',{
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    }
  });
})

//공지사항 롤링
notice=setInterval(noticeRolling,4000);
function noticeRolling(){
  $('.notice li').first().slideUp(function(){
    $(this).appendTo($('.notice ul')).slideDown();
  })
}
