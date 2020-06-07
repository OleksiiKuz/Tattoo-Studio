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
  $('.header__navigation--mobile').slideToggle();

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


$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000, 'linear');
});


$(function () {
  $('.faq-title').click(function (j) {

    var dropDown = $(this).closest('.faq-item').find('.faq-text');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.faq-title.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });


});

