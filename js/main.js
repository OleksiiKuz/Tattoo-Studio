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

$('.button--promo').on('click', function (e) {
  event.preventDefault();
  $('.modal-main').toggleClass('modal-active')

});

$('.button--masters-1').on('click', function (e) {
  event.preventDefault();
  $('.modal--1').toggleClass('modal-active')

});

$('.button--masters-2').on('click', function (e) {
  event.preventDefault();
  $('.modal--2').toggleClass('modal-active')

});

$('.button--masters-3').on('click', function (e) {
  event.preventDefault();
  $('.modal--3').toggleClass('modal-active')

});


$('.modal__dialog-close').on('click', function (e) {
  event.preventDefault();
  $('.modal').removeClass('modal-active')

});



// $(document).ready(function () {
//   $('a[href^="#"}').click(function () {
//     event.preventDefault();
//     var target = $(this).attr('href');
//     $('html', 'body').animate({
//       scrollTop: $(target).offset().top
//     }, 500);
//   });
// });


$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000, 'linear');
});


