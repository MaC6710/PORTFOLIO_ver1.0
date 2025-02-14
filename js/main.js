$(function () {
    // alert('hello?')
})

// main
// const bl = document.querySelectorAll('.block-bl img');
// const gr = document.querySelectorAll('.block-gr img');
// const pi = document.querySelectorAll('.block-pi img');
// const ye = document.querySelectorAll('.block-ye img');

// let currentIndex = 0;

// function changeImage() {
//     // 현재 이미지 숨기기
//     bl[currentIndex].classList.remove('move');
//     gr[currentIndex].classList.remove('move');
//     pi[currentIndex].classList.remove('move');
//     ye[currentIndex].classList.remove('move');

//     // 다음 인덱스로 변경
//     currentIndex = (currentIndex + 1) % bl.length;

//     // 다음 이미지 보이기
//     bl[currentIndex].classList.add('move');
//     gr[currentIndex].classList.add('move');
//     pi[currentIndex].classList.add('move');
//     ye[currentIndex].classList.add('move');
// }

// // 초기 이미지 설정
// bl[0].classList.add('move');
// gr[0].classList.add('move');
// pi[0].classList.add('move');
// ye[0].classList.add('move');

// // 2초마다 이미지 변경
// setInterval(changeImage, 2000);

// menu
$(document).ready(function () {
    const $hamburger = $('.hamburger');
    const $menuPage = $('.menu-page');
    const $returnButton = $('.return');
    const $blinkButton = $('.blink a');
    const $menuItems = $('.menu-page ul li a');

    // 초기에 메뉴 숨기기
    $menuPage.hide();
    $hamburger.show();

    // 햄버거 버튼과 blink 버튼 클릭 시 메뉴 표시
    $hamburger.add($blinkButton).on('click', function (e) {
        e.preventDefault();
        $menuPage.fadeIn(300);
        $hamburger.fadeOut(300);
    });

    // return 버튼 클릭 시 메뉴 숨기기
    $returnButton.on('click', function () {
        $menuPage.fadeOut(300);
        $hamburger.fadeIn(300);
    });

    // 메뉴 항목 클릭 시 메뉴 숨기기
    $menuItems.on('click', function () {
        $menuPage.fadeOut(300);
        $hamburger.fadeIn(300);
    });
});

// design
// main-slider 반응형 loop
// size 정의
// const breakpointSizes = [1140, 1280];
// function getLoopSetting(size){
//     retu
// }

// thumbSwiper.on('.slideChange', function(){
//     mainSwiper.slideTo(thumbSwiper.realIndex);
// });

// thumbnail의 index를 main-slider에게 부여한 뒤, 해당 slide를 active
// $('.thumbnail-slider li').click(function(){
//     var index = $(this).index();
//     mainSlider.goToSlide(index);
//     $('.thumbnail-slider .active').removeClass('active');
//     $(this).addClass('active');
// })
// var mainSlider;
// var thumbnailSlider;
// var mainSlides = document.querySelectorAll('.main-slider li');
// var thumbnailSlides = document.querySelectorAll('.thumbnail-slider li')

// thumbnail-slider의 slide의 index 획득 후, 이를 main-slider에게 부여. 해당 slide에게 aria-hidden 
// thumbnail-slider의 slide의 index 획득 후,
// function ActiveSync() {
//     var CurrentIndex = window.thumbnailSlider.getCurrentSlide();

//     // 모든 main-slider의 slide에게 hidden
//     mainSlides.forEach(function (slide) {
//         slide.setAttribute('aria-hidden', 'true');
//     })
//     // thumbnail의 slide 현재 index에게 aria-hidden="false" 부여
//     if (mainSlides[CurrentIndex]) {
//         mainSlides[CurrentIndex].setAttribute('aria-hidden', 'false');
//     }
//     // main-slider를 index로 이동
//     window.mainSlider.goToSlide(CurrentIndex);
// }

// document.addEventListener('DOMContentLoaded', function () {
//     ActiveSync();
//     // thumbnail 버튼
//     // 썸네일의 이전/다음 버튼 클릭 시 동기화
//     document.querySelector('.bx-prev').addEventListener('click', function () {
//         window.thumbnailSlider.goToPrevSlide(); // 이전 슬라이드로 이동
//         ActiveSync();                   // ARIA 속성 업데이트 및 동기화
//     });

//     document.querySelector('.bx-next').addEventListener('click', function () {
//         window.thumbnailSlider.goToNextSlide(); // 다음 슬라이드로 이동
//         ActiveSync();                   // ARIA 속성 업데이트 및 동기화
//     });
// })

// coding
$(".inner").on("mouseenter", function () {
    // fullpage에서 효과 비활성화
    fullpageswiper.mousewheel.disable();
    // inner에서 효과 활성화 
    innerswiper.mousewheel.enable();
});

// 마우스가 inner영역을 벗어나면 fullpage의 mousewheel 활성화
$(".inner").on("mouseleave", function () {
    fullpageswiper.mousewheel.enable();
    innerswiper.mousewheel.disable();
});

// fullpage의 영역에서 mousewheel 다시 작동
$(".fullpage").on("mouseenter", function () {
    fullpageswiper.mousewheel.enable();
});

function SlideChange(swiper) {
    swiper.sllides.each(function (index, slide) {
        $(slide).removeClass('shrink');
        if ($(slide).hasClass('swiper-slide-prev', 'swiper-slide-next')) {
            $(slide).addClass('shrink');
            $(slide).css({
                transform: 'scale(0.8)',
                opacity: '0.5',
                top: '0'
            });
        }
        else if ($(slide).hasClass('swiper-slide-active')) {
            $(slide).css({
                transform: "scale(1.2)",
                opacity: "1",
                top: "-30px"
            })
        } else {
            $(slide).css({
                transform: '',
                opacity: '',
                top: ''
            })
        }
    })
    innerswiper.on('SlideChange', function () {
        SliderClass(innerswiper);
    })
    SliderClass(innerswiper);
}

// contact
// $(document).ready(function() {
//     $('.plus').on('click', function() {
//         $('.plus, .triangle').toggle();
//         $('.form-group').slideToggle();
//     });

//     $('.triangle').on('click', function() {
//         $('.plus, .triangle').toggle();
//         $('.form-group').slideToggle();
//     });
// });

// image-pannel
// 버튼 클릭 시 이미지 패널 열기
// 이미지 패널을 열고 이미지 표시 함수
function showImage(imageSrc) {
    $('#full-image').attr('src', imageSrc);
    $('#image-panel').addClass('show');
}

// 패널 닫기 버튼 클릭 시 패널 닫기
$('.close').on('click', function () {
    $('#image-panel').removeClass('show');
});

// 패널 바깥 영역 클릭 시 패널 닫기
$('#image-panel').on('click', function (event) {
    if (event.target === this) {
        $(this).removeClass('show');
    }
});