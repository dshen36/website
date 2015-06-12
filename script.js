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
    $('#landing').bind('mouseenter', function() {
   		this.iid = setInterval(function() {
       		$("#landing").animate({opacity: 0.2}, 1000, 'linear').animate({opacity: 1}, 1000, 'linear');
 		}, 25);
	}).bind('mouseleave', function(){
    	this.iid && clearInterval(this.iid);
	});
});