$(document).ready(function() {
  $('.navButton').on('click', function() {
    $('.staged').toggleClass('open');
  });

  $('.closeButton').on('click', function() {
    $('.staged').removeClass('open');
  });

  $('NAV li').on('click', function() {
    $('.staged').removeClass('open');
  });

  var pageOffset = $('.wrapper').offset().top;

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.hint').addClass('fade');
    } else {
      $('.hint').removeClass('fade');
    }
  });

  // REMOVE WIDOWS

  // $("h1").each(function() {
  //   var wordArray = $(this).text().split(" ");
  //   var finalTitle = "";
  //   for (i = 0; i <= wordArray.length - 1; i++) {
  //     finalTitle += wordArray[i];
  //     if (i == (wordArray.length - 2)) {
  //       finalTitle += "&nbsp;";
  //     } else {
  //       finalTitle += " ";
  //     }
  //   }
  //   $(this).html(finalTitle);
  // });
});
