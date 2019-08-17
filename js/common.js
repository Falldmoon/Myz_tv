$(document).ready(function () {
  $('.healthy-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),

  })
  $('.blocks .container .row').slick({
    adaptiveHeight: true,
    fade: false,
    dots: false,
    arrows: true,
    prevArrow: $('.block-nav .arrow-left'),
    nextArrow: $('.block-nav .arrow-right'),
    slidesToShow: 3,
    responsive: [
            {
              breakpoint: 990,
                settings: {
                  slidesToShow: 1,
                  fade: true,
                  dots: true
                }
            }
        ]
  })
  $('.right-login').on('click', function() {
    $('.window-enter').toggleClass('login-active');
    $('.window-white').toggleClass('white-active');
  })
  $('.login-exit').on('click', function() {
  	$('.window-enter').toggleClass('login-active');
  	$('.window-white').toggleClass('white-active');
    for (let i = $('.window-login').length - 1; i >= 0; i--) {
      let element = $('.window-login')[i]; 
      $(element).removeClass('login-active')
    }
  })
  $('.login-exit-mobile').on('click', function() {
    $('.window-enter').toggleClass('login-active');
    $('.window-white').toggleClass('white-active');
    for (let i = $('.window-login').length - 1; i >= 0; i--) {
      let element = $('.window-login')[i]; 
      $(element).removeClass('login-active')
    }
  })
  $('.wrapper-accordion').on('click', function() {
    let arr = $('.wrapper-accordion');
    let element = this;
    $(element).toggleClass('accordion-active');
    $('.wrapper-btn').addClass('btn-active');
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] != this) {
        let element_false = arr[i]
        $(element_false).removeClass('accordion-active');
      }
    }
  })
})

