// var $page = $('html, body');
// $('a[href*="#"]').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });
$(function(){

    $('.some-link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#top').offset().top }, 700);
      e.preventDefault();
    });
    
    });