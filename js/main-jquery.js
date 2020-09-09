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
});

$(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader').delay(1500).fadeOut('slow', function () {
      $(this).remove();
    });
  }
});