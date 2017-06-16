$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="app/img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position  : 'left'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});
$(".owl-carousel").owlCarousel({
  	animateOut: 'fadeOut',
  	animateIn: 'fadeIn',
    nav: true,
    navText: ["<img src='app/img/left.png'>","<img src='app/img/right.png'>"],
    items:1,
    autoplay:true,
		autoplayTimeout:5000,
		loop:true,
    margin:0,
		autoplayHoverPause:false,
    smartSpeed:2000
  });
	});


