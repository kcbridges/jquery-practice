$(document).ready(function() {

  $('.fading').click(function() {
		$('div').hide();
	});

	$('.appearing').click(function() {
		$('div').show();
	});

	$('#blue').on("click", function() {
		$(this).css('background', 'blue');
	});

});

	


