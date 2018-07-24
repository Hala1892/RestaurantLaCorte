$(document).ready(function() {
  
  var scrollLink = $('.page-scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1200 );
  });
})