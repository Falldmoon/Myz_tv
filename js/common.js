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
  $('.email-up').on('click', function() {
    $('.profile-email').toggleClass('email-active')
  })
  $(document).on('click', '.profile-tab', function() {
    for (let i = $('.profile-tab').length - 1; i >= 0; i--) {
      let element = $('.profile-tab')[i]
      if ( element != this) {
        $(element).removeClass('tab-active');
      }
      else{
        $(element).addClass('tab-active');
      }
    }
  })
  // Проверка состаяние батарейки
  let battery = $('.battery-block')[0];
  if ($(battery).hasClass('active-left') && $(battery).hasClass('active-right') && $(battery).hasClass('active-center')) {
    $(battery).addClass('active-full');
  }
  else if ($(battery).hasClass('active-left') && $(battery).hasClass('active-right')) {
    $(battery).addClass('active-left-right');
  }
  else if($(battery).hasClass('active-left') && $(battery).hasClass('active-center')){
    $(battery).addClass('active-left-center');
  }
  else if($(battery).hasClass('active-right') && $(battery).hasClass('active-center')){
    $(battery).addClass('active-right-center');
  }
  $('.link-edit').on('click', function() {
    let elemens = this.classList[1]
    elemens = `.${elemens}`
    for (var i = $(elemens).length - 1; i >= 0; i--) {
      if (this != $(elemens)[i]) {
        $(elemens)[i].style.display = 'flex'
        this.style.display = 'none'
      }
    }
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
  /*
  $('.right-login').on('click', function() {
    $('.window-enter').toggleClass('login-active');
    $('.window-white').toggleClass('white-active');
  })
  */
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
  $('.wrapper-accordion').on('click', function(event) {
    if(event.target.tagName.toLowerCase() === 'input') {
        return;
    }
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
/**
  Target IE 10 with JavaScript and CSS property detection.
  
  # 2013 by Tim Pietrusky
  # timpietrusky.com
 **/

 // IE 10 only CSS properties
 var ie10Styles = [
     'msTouchAction',
     'msWrapFlow',
     'msWrapMargin',
     'msWrapThrough',
     'msOverflowStyle',
     'msScrollChaining',
     'msScrollLimit',
     'msScrollLimitXMin',
     'msScrollLimitYMin',
     'msScrollLimitXMax',
     'msScrollLimitYMax',
     'msScrollRails',
     'msScrollSnapPointsX',
     'msScrollSnapPointsY',
     'msScrollSnapType',
     'msScrollSnapX',
     'msScrollSnapY',
     'msScrollTranslation',
     'msFlexbox',
     'msFlex',
     'msFlexOrder'];

 var ie11Styles = [
     'msTextCombineHorizontal'];

 /*
  * Test all IE only CSS properties
  */
 var d = document;
 var b = d.body;
 var s = b.style;
 var ieVersion = null;
 var property;

 // Test IE10 properties
 for (var i = 0; i < ie10Styles.length; i++) {
     property = ie10Styles[i];

     if (s[property] != undefined) {
         ieVersion = "ie10";
         
     }
 }

 // Test IE11 properties
 for (var i = 0; i < ie11Styles.length; i++) {
     property = ie11Styles[i];

     if (s[property] != undefined) {
         ieVersion = "ie11";
         
     }
 }

 if (ieVersion) {
     b.className = ieVersion;
     
 } else {
  
 }

 /*
  * Just a little helper to create a DOM element
  */
 function createEl(content) {
     
 }

 /*
  * List of IE CSS stuff:
  * http://msdn.microsoft.com/en-us/library/ie/hh869403(v=vs.85).aspx
  */
