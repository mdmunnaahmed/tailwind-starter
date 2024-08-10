"user strict";
// Sticky Menu
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("active", window.scrollY > 0);
  }
});

// Get the element
var toggler = document.getElementById("sidebarToggler");
var header = document.getElementById("responsiveHeader");
var overlay = document.querySelector(".overlay");
toggler.addEventListener("click", function () {
  header.classList.toggle("-translate-x-full");
  header.classList.toggle("translate-x-full");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", function () {
  header.classList.remove("translate-x-full");
  header.classList.add("-translate-x-full");
  searchDiv.classList.remove("translate-y-full");
  searchDiv.classList.add("-translate-y-full");
  overlay.classList.remove("active");
});

// search func
var searchToggler = document.querySelectorAll(".searchToggler");
var searchDiv = document.querySelector("#searchDiv");
searchToggler.forEach(function (searchToggler) {
  searchToggler.addEventListener("click", function () {
    searchDiv.classList.toggle("-translate-y-full");
    searchDiv.classList.toggle("translate-y-full");
    overlay.classList.toggle("active");
  });
});

$('ul > li > .submenu').parent('li').addClass('hasSubmenu')
$('ul > li > .submenu').siblings('a').append(`<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-undefined stroke-current" data-testid="chevronDown" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><title>chevronDown icon</title><polyline points="6 9 12 15 18 9"></polyline></svg>`)

// $('a').on('click', function(e) {
//   $(this).siblings('.submenu').toggleClass('block')
// })

$(document).ready(function () {
  wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 100,
      mobile: false,
      live: true,
  });
  wow.init();
});

// Slider Part
$(".product-slider").slick({
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 800,
  pauseOnHover: true,
  centerMode: false,
  dots: true,
  arrows: false,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
  
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1199, // Adjust based on your needs
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767, // Adjust based on your needs
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 575, // Adjust based on your needs
      settings: {
        slidesToShow: 1,
      }
    },
    // Add more breakpoints as needed
  ]
});

$(".review-slider").slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1500,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: false,
  nextArrow: $(".next-review"),
  prevArrow: $(".prev-review"),
});

$(".prev-review").click(function () {
  $(".review-slider").slick("slickPrev");
});

$(".next-review").click(function () {
  $(".review-slider").slick("slickNext");
});
