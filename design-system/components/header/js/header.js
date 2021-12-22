$(document).ready(function() {

  $('.btnIcon').on('click', function() {
    $('.navItems ul').toggleClass('open');
  });

  $('NAV li').on('click', function() {
    $('.navItems ul').removeClass('open');
  });

});
