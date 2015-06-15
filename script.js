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
/*
$(document).ready(function(){
    $('#landing').bind('mouseenter', function() {
   		this.iid = setInterval(function() {
       		$("#landing").animate({opacity: 0.2}, 1000, 'linear').animate({opacity: 1}, 1000, 'linear');
 		}, 25);
	}).bind('mouseleave', function(){
    	this.iid && clearInterval(this.iid);
	});
});*/
/*
$(document).ready(function(){
	var enter = -1;
	var toggle = true;
    $('#landing').bind('mouseenter', function() {
	if (toggle) {
		toggle = false;
   		enter = setInterval(function() {
	   			console.log("log in");
	       		$("#landing").animate({opacity: 0.2}, 1000, 'linear').animate({opacity: 1}, 1000, 'linear');
 		}, 25);
 	};
	}).bind('mouseleave', function(){
		toggle = true;
		console.log("this works");
    	clearInterval(enter);
    	enter = 0;
	});
});*/