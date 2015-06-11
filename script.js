$(document).ready(function() {
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
});

function caretBlink() {
    $('#caret').animate({opacity: 0}, 'fast', 'swing').animate({opacity: 1}, 'fast', 'swing');
}

$(document).ready(function() {
	setInterval ('caretBlink()', 750);
});