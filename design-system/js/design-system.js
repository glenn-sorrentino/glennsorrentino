$(document).ready(function() {

  // INTRO HINT
  
  var pageOffset = $('.wrapper').offset().top;

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.hint').addClass('fade');
    } else {
      $('.hint').removeClass('fade');
    }
  });

  // HEADER

  $('.btnIcon').on('click', function() {
    $('.navItems').toggleClass('open');
  });

  $('NAV li').on('click', function() {
    $('.navItems').removeClass('open');
  });

});
