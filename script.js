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

// BLINKING CURSOR EFFECT

/*function caretBlink() {
    $('#caret').animate({opacity: 0}, 'fast', 'swing').animate({opacity: 1}, 'fast', 'swing');
}
$(document).ready(function() {
	setInterval ('caretBlink()', 750);
}); */


//THE ORIGINAL GREETING PAGE (TYPING EFFECT)~~~~~~~~~~~~~~~~~~~~~~`


/*var text = document.getElementById("Greetings");
//text.style.fontSize = fontSize;
//var height = (text.clientHeight + 1) + "px";
//var width = (text.clientWidth + 1) + "px"; 
var charWidth;
var typing,pauseToggle; 
function typingEffect() {
	typing=text.slice(0,++i);
	if (text === typing) {
		return;
	}
	var curChar = typing.slice(-1);
	charWidth = (curChar.clientWidth+1)+px;
	$('#caret').css("padding-left","+=10");//is ths right?
	
	//#caret.padding-left += charWidth
	if (curChar === '<') pauseToggle = true;
	if (curChar === '>') pauseToggle = false;
	if (pauseToggle) {
		//caret begins on nextline
	}
}*/

