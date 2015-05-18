$(document).ready(function(){
  $('#building-blocks').on( "click", function() {
    console.log('click block')
    $('.block').addClass('active');
  });

  $('#close').on( "click", function(e) {
    console.log('click close')
    e.stopPropagation();
    $('.block').removeClass('active');
  });

  $(window).on( "scroll", function() {
    console.log('scrollin')
    mixpanel.track('~page scrolled')
  });
});