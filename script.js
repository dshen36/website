/*$(document).ready(function() {
    $('.links').mouseenter(function() {
	    $(this).animate({
		    width: '+=10px'
	    });
    });
    $('.links').mouseleave(function() {
	    $(this).animate({
		    width: '-=10px'
	    }); 
    });
});*/

$(document).ready(function(){
	$('.promote').on('click', function() {
		$(this).addClass("slidePic");
		$(".quote").addClass('slideQuote');
		$('.quote').addClass("fadeInfo");
		$('.quote').addClass("permFadeIn");
		$('.who').fadeOut(2000);
		$('#info').addClass("fadeInfo");
		$('#info').addClass("permFadeIn");
	});
});
//http://papermashup.com/simple-jquery-showhide-div/