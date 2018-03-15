(function ($) {

	// body...

	var logo = $('.search').find('a');
	var sub_msg = $('.subtitle-msg');

	logo.on('click', function(e){
		e.preventDefault();
		sub_msg.slideToggle(500);
		$(this).toggleClass('active')
	})
}) (jQuery);

/*SIDEBAR*/
$(document).ready(function(){
	$('.sidebarBtn').click(function(){
		$('.main-nav').toggleClass('active');
		$('.sidebarBtn').toggleClass('toggle');
	})
}) (jQuery);