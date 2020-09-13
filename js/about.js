
$(document).ready(function() {

    $(".tabs-list div a").click(function(e) {
        e.preventDefault();
    });
    $(".tabs-list div").click(function() {
        var tabid = $(this).find("a").attr("href");
        $(".tabs-list div,.tabs div.tab").removeClass("active"); // removing active class from tab
  
        $(".tab").hide(); // hiding open tab
        $(tabid).show(); // show tab
        $(this).addClass("active"); //  adding active class to clicked tab
  
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
          $('#topBtn').fadeIn();
        } else{
          $('#topBtn').fadeOut();
        }
      });
    
      $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
      });
    
  });
   