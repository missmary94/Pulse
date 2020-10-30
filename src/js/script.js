$(document).ready(function(){
    $('.carousel_inner').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prevArrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/nextArrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }  
            }
        ]
      });
  });