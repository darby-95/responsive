$('.tit .btn').click(function(e){
    e.preventDefault(); // 

    $('.nav').slideToggle(); /* 버튼을 누르면 메뉴가 보이게 하라 */
    $('.tit .btn').toggleClass("open") /* 메뉴가 보였을때 class.open이 생긴다. */


    if($('.tit .btn').hasClass('open')){
        //A.attr(B) ==> A 요소 안에 있는 속성값 B를 가져와라.
        //A.attr(B,c) ==> A 요소 안에 있는 속성값 B를 C로 바꿔라.
        //ex. $('.nav').attr("width","500") ==> width를 300에서 500으로 바꾼다.

        // $('.tit .btn').find('i') ==> 내 자손중에 i라는 태그가 있다면 찾아라. (css에서 띄워쓰는 의미와 유사)

        $('.tit .btn').find('i').attr("class","fas fa-chevron-up")
        // .tit .btn 자식중 i 라는 클래스를 찾아서 class를 바꿔라, up으로.

    }else{
        $('.tit .btn').find('i').attr("class","fas fa-chevron-down")
        // .tit .btn 자식중 i 라는 클래스를 찾아서 class 를 바꿔라, down으로.
    }
})

//이미지 슬라이드 slick col4
$('.slider').slick({
    dots:true,
    autoplay:true,
  });
  // slick 사용중 마지막에서 1번째로 돌아올때 튕김 현상이 있을때 보완해준다.
  $('.slider').slick('setPosition'); 

// lightgarllery col5
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail], /* 수정 */
});
