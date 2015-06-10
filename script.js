$(document).ready(function() {
    $('#block').mouseenter(function() {
	    $(this).animate({
		    height: '+=10px'
	    });
    });
    $('#block').mouseleave(function() {
	    $(this).animate({
		   height: '-=10px'
	    }); 
    });
});