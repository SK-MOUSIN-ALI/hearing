$(document).ready(function () {

  var nav = document.querySelector(".navbar");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("scroll-on");
    }
    else {
      nav.classList.remove("scroll-on");
    }
  }

  $('.banner-slider').slick({
    dots: true, // Show dots navigation
    arrows: false, // Hide arrow navigation (optional)
    infinite: true, // Enable infinite loop
    autoplay: true, // Autoplay slides
    autoplaySpeed: 4000, // Autoplay speed in milliseconds
    speed: 800, // Transition speed between slides in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    adaptiveHeight: true, // Adjust slide height based on content
    
});
  $('.product-slider').slick({
    dots: true, // Show dots navigation
    arrows: false, // Hide arrow navigation (optional)
    infinite: true, // Enable infinite loop
    autoplay: true, // Autoplay slides
    autoplaySpeed: 4000, // Autoplay speed in milliseconds
    speed: 800, // Transition speed between slides in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
});



  $(".test-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    variableWidth: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });




});