$(document).ready(function(){
  console.log('ready')
  $('#building-blocks').on( "click", function() {
    console.log('clickin')
    $('.block').addClass('active');
  });

  $(window).on( "scroll", function() {
    console.log('scrollin')
    mixpanel.track('~page scrolled')
  });
});