$(document).ready(function() {
 

    $('.menu').on('click', function() {
        $('html').toggleClass('menu-open');
    });

    $('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

 
/*
quitar alto y ancho del codigo del video
*/