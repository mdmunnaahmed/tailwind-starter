
// Slider Part
$(".team-slider").slick({
	fade: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	pauseOnHover: true,
	centerMode: false,
	dots: false,
	arrows: true,
	nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
	prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});
$(".project-slider").slick({
	fade: false,
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	pauseOnHover: true,
	centerMode: false,
	dots: false,
	arrows: true,
	nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
	prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
			},
		},
	],
});


var videoItem = $(".play-btn");
if (videoItem) {
  videoItem.magnificPopup({
    type: "iframe",
  });
}

// header toggle
$('.header-toggle').on('click', function(e) {
	$('.responsive-header').toggleClass('active')
	$('header').toggleClass('active')
	$('.overlay').toggleClass('active')
})
$('.overlay,.header-close').on('click', function(e) {
	$('header').removeClass('active')
	$('.responsive-header').removeClass('active')
	$('.overlay').removeClass('active')
})