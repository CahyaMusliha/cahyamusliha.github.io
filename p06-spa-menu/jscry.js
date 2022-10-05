
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".jam").slideToggle("fast");

	$('nav ul li.mati').each(function(index, el) {
		var jamID = el.id.split('_')[1];
		$('.jam#' + jamID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.jam:visible').fadeOut('fast', function() {
		$('.jam#' + pilihIsi).fadeIn('fast');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});