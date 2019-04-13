$(document).ready(function(){
	$('.header-contacts__button, .contacts-button, .products-button').on("click", function(){
		$('.overlay').show()
	});


	$('.popup-close').on('click', function(){
		$('.overlay').hide()
	});

});

jQuery(function($){
   $(".popup-form__input").mask("+7(999) 999-9999");
   $(".form__input").mask("+7(999) 999-9999");
});

new WOW().init();



$('.feedback-slider').slick({
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 2	,
	nextArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow__right_feed"></div>',
	prevArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow__left_feed"></div>',
	responsive: [
		{
		  breakpoint: 1700,
		  settings: {
		    slidesToShow: 3,
		    arrows: true,
		    slidesToScroll: 1,
		  }
		},
	   {
	     breakpoint: 1024,
	     settings: {
	       slidesToShow: 2,
	       slidesToScroll: 1,
	       infinite: true,
	       dots: true
	     }
	   },
	   {
	     breakpoint: 768,
	     settings: {
	       slidesToShow: 1,
	       arrows: true,
	       slidesToScroll: 1
	     }
	   },
	   {
	     breakpoint: 600,
	     settings: {
	       slidesToShow: 1,
	       arrows: true,
	       slidesToScroll: 1
	     }
	   },
	   {
	     breakpoint: 480,
	     settings: {
	       slidesToShow: 1,
	       arrows: true,
	       slidesToScroll: 1
	     }
	   }
	   // You can unslick at a given breakpoint now by adding:
	   // settings: "unslick"
	   // instead of a settings object
	 ]
});


$('.production-slider__top').slick({
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<div class="production-slider__arrow_left"></div>',
	nextArrow: '<div class="production-slider__arrow_right"></div>',
	asNavFor: '.production-slider__bottom',
	responsive: [
		{
		  breakpoint: 1700,
		  settings: {
		    slidesToShow: 1,
		    arrows: false,
		    slidesToScroll: 1,
		  }
		},
	   {
	     breakpoint: 1024,
	     settings: {
	       slidesToShow: 1,
	       slidesToScroll: 1,
	       infinite: true,
	       dots: true
	     }
	   },
	   {
	     breakpoint: 992,
	     settings: {
	       slidesToShow: 1,
	       arrows: false,
	       slidesToScroll: 1
	     }
	   },
	   {
	     breakpoint: 768,
	     settings: {
	       slidesToShow: 1,
	       arrows: true,
	       slidesToScroll: 1
	     }
	   },
	   {
	     breakpoint: 480,
	     settings: {
	       slidesToShow: 1,
	       arrows: true,
	       slidesToScroll: 1
	     }
	   }
	   // You can unslick at a given breakpoint now by adding:
	   // settings: "unslick"
	   // instead of a settings object
	 ]
});

$('.production-slider__bottom').slick({
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow: '<div class="production-slider__arrow_left"></div>',
	nextArrow: '<div class="production-slider__arrow_right"></div>',
	asNavFor: '.production-slider__top'
});


$('.main-slide').slick({
	arrows: false,
	slidesToScroll: 1,
	asNavFor: '.main-slide2'
});

$('.main-slide2').slick({
	arrows: false,
	slidesToScroll: 1,
	asNavFor: '.main-slide'
});



