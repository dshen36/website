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

var test = document.getElementById("Greetings");
test.style.fontSize = fontSize;
var height = (test.clientHeight + 1) + "px";
var width = (test.clientWidth + 1) + "px"; 

//--------------------------------------------------------- need to fix

$(document).ready(function() {
	setInterval ('caretBlink()', 750);
});
var directions = new Array('north','south','east','west');
var facing;
var screenWidth = $('#background').width();
var screenHeight = $('#background').height();
var fiberCounter = 0;
var minVel = 4000;
var maxVel = 5000;
var minRespawn = 100;
var maxRespawn = 1000;


$(function() {
	createFiber();
});


function createFiber() {
	var dir = randNum(0,4);
	var vel = randNum(minVel,maxVel);
	var xOrig,yOrig,xEnd,yEnd;
	var axis;
	if (dir === 0) {
		facing = directions[dir]; //facing north, starting south
		axis = 'vertical';
		xOrig = randNum(0,screenWidth);
		yOrig = screenHeight;
		xEnd = xOrig;
		yEnd = 0;
		break;
	} else if (dir === 1) {
		facing = directions[dir]; //facing south, starting north
		axis = 'vertical';
		xOrig = randNum(0,screenWidth);
		yOrig = 0;
		xEnd = xOrig;
		yEnd = screenHeight;
		break;
	} else if (dir === 2) {
		facing = directions[dir]; //facing east, starting west
		axis = 'horizontal';
		xOrig = 0;
		yOrig = randNum(0,screenHeight);
		xEnd = screenWidth;
		yEnd = yOrig;
		break;
	} else {
		facing = directions[dir]; //facing west, starting east
		axis = 'horizontal';
		xOrig = screenWidth;
		yOrig = randNum(0,screenHeight);
		xEnd = 0;
		yEnd = yOrig;
		break;
	}
	$('#background').append("<div class='fiberOptic' id='fiberOptic-" + fiberCounter + "'></div>");
 	$fiberOptic = $("#fiberOptic-"+fiberCounter);
 	fiberCounter++;
 	$fiberOptic.addClass("fiberOptic-"+facing).css("background-image", "url(" + blue+ "-" + directions[dir] + ".png)");
 	$fiberOptic.css({left: yOrig, top: xOrig}).animate({top: xEnd, left: yEnd}, vel, 'linear', function() {
 		$(this).remove();
 	});
 	setTimeout ("createFiber()", random(minRespawn, maxRespawn));
}

function randNum(base, max) {
 	return Math.floor(Math.random()*(max - base)) + base;
}