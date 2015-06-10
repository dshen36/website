$(document).ready(function() {
    $('#block').mouseenter(function() {
	    $(this).animate({
		    width: '+=10px'
	    });
    });
    $('#block').mouseleave(function() {
	    $(this).animate({
		    width: '-=10px'
	    }); 
    });
});