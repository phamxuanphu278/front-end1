jQuery(document).ready( function($){
  var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
              delay: 3000,
              disableOnInteraction: false,
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    var mySwiper = new Swiper('.swip-slide1', {
      slidesPerView: 3,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 10,

            },
            992: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        }
  
    });
});

$(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader').delay(1500).fadeOut('slow', function () {
      $(this).remove();
    });
  }
});