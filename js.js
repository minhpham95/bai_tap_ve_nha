$(function(){
    $('.noidung').slideUp();
	$('.motkhoi .title').click(function(event) {
		
		$(this).next().slideToggle();
		$(this).toggleClass('xanh')
    });
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 1) {
          $('.left-ticket-info').addClass('fixed');
         }
         else {
          $('.left-ticket-info').removeClass('fixed');
         }
         if ($(window).scrollTop() >= 1) {
          $('#top-header').addClass('fixed-top-header');
         }
         else {
          $('#top-header').removeClass('fixed-top-header');
         }
      });

    $('ul.ultabs li').click(function() {
      $('ul.ultabs li').removeClass('active');
      $(this).addClass('active');
  
      index = $(this).index() + 1;
      console.log(index);
  
      $('.center-info .center-info-detail').removeClass('appear');
      $('.center-info .center-info-detail:nth-child('+index+')').addClass('appear');
    });

    $(".setting").on('click', function(){
      $(".functionality").toggleClass('active');
    });

    $('#dtBasicExample').DataTable();
    //$('.dataTables_length').addClass('bs-select');
    $(".equipment-list-title").on('click', function(){
      $(".table-equipment").toggleClass('deactive');
    });
    $(".monitoring-title").on('click', function(){
      $(".table-monitoring").toggleClass('deactive');
    });
})  


 