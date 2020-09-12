jQuery(document).ready( function($){
  var swiper = new Swiper('.swiper-sl1', {
        loop: true,
        autoplay: {
              delay: 3000,
              disableOnInteraction: false,
      },
        navigation: {
          nextEl: '.next-buttons',
          prevEl: '.prev-buttons',
        },
    });
    var swiper2 = new Swiper('.swiper-2', {
      slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,

            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    var swiper3 = new Swiper('.swiper-blog', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false
      },
      pagination: {
        el: '.pagination-blog-cmt',
        clickable: true,
      },
      breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    });
});

$(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader').delay(1500).fadeOut('slow', function () {
      $(this).remove();
    });
  }
});