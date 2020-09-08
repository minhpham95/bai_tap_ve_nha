$(function(){
    $('.noidung').slideUp();
	$('.motkhoi .title').click(function(event) {
		
		$(this).next().slideToggle();
		$(this).toggleClass('xanh')
    });
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 1) {
          $('#top-header').addClass('fixed');
         }
         else {
          $('#top-header').removeClass('fixed');
         }
      });
})  


 