$(document).ready(function () {
  $('.slider__box').slick({
      
  });
});

$('.header__burger').on('click', function (e) {
  e.preventDefault;
  $(this).toggleClass('header__burger-active')
  
});

$('.header__burger').on('click', function (e) {
  e.preventDefault;
  $('.header__navigation--mobile').toggleClass('header__navigation--mobile-active')

});





