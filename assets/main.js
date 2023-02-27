new WOW().init();
const thememode = localStorage.getItem("mode")
$(function(){ 
    
    if(thememode == "dark")
    {
      mode("light")
    }
    else
    {
      mode("dark")
    }

    $("#theme-icon").on("click",function(){
      var body = $("body").attr("class");
      if(body == "")
      {
        mode("light");
      } 
      else
      {
        mode("dark");
      }
    })
  

  
   $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });
   
   const banner = $(".slides");
   banner.slick({
      // dots: true,
      // vertical: true,
      // verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      // prevArrow: '<button class="slick-arrow slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
      // nextArrow: '<button class="slick-arrow slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
  
    });
    $('.left').click(function(e){ 
         //e.preventDefault(); 
         banner.slick('slickPrev');
      } );

   $('.right').click(function(e){
        //e.preventDefault(); 
        banner.slick('slickNext');
      } ); 


      

      const feature_slides = $(".feature_slides");
      feature_slides.slick({
         // dots: true,
         // vertical: true,
         // verticalSwiping: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true,
         // prevArrow: '<button class="slick-arrow slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
         // nextArrow: '<button class="slick-arrow slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
     
       });
    
  
  const slide_grid = $(".slider_grid");
      slide_grid.slick({
         // dots: true,
         // vertical: true,
         // verticalSwiping: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true,
          centerMode: true,
          variableWidth: true
         // prevArrow: '<button class="slick-arrow slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
         // nextArrow: '<button class="slick-arrow slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
     
       });
   
    // var $st = $('.pagination');
    // var $slickEl = $('.slick_center_slider');
    // $slickEl.slick({
    //   centerMode: true,
    //   centerPadding: '0px',
    //   prevArrow: '<button class="slick-arrow slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    //   nextArrow: '<button class="slick-arrow slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    // //   slidesToShow: 3,
    // //   slidesToScroll: 1,
    //   variableWidth: true,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //            prevArrow: '<button class="slick-arrow slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    //   nextArrow: '<button class="slick-arrow slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
   
    //         slidesToShow: 1
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
    // });
    // $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     console.log('beforeChange', currentSlide, nextSlide);
    //   });
    // $('.center').on('afterChange', function(event, slick, currentSlide){
    // console.log('afterChange', currentSlide);
    // });

   $(window).scroll(function(e){
          parallax();
      });
    $(".artists .artist-name").on("mouseover",function(){
        $("body").css(["background-image", "url(" + $(this).attr("bg-src") + ")"]);
    })
    $(".artists .artist-name").trigger("mouseover");
})
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.banner .slide').css('background-position',"0 "+  (scrolled * 1) + 'px');
}
function mode(mode)
{
      const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
      const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
      if(mode == "light")
      {
        $(".logo-light").removeClass("hide")
        $(".logo-dark").addClass("hide")
         $("body").addClass("theme-dark")
        $(".theme-container").removeClass("shadow-light")
        $(".theme-container").addClass("shadow-dark")
        $("#theme-icon").prop("src",moon)
        localStorage.setItem("mode" ,"dark")
      }
      else if(mode == "dark")
      {
        $(".logo-light").addClass("hide")
        $(".logo-dark").removeClass("hide")
        $("body").removeClass("theme-dark")
        $(".theme-container").removeClass("shadow-dark")
        $(".theme-container").addClass("shadow-light")
        $("#theme-icon").prop("src",sun)
        localStorage.setItem("mode" ,"light")
      }
}