//parallax scrolling
// if on the same page, don't do it. it slows it down, and gives it a slight "lag". 
	//do something like (if cur.tag === desired.tag {return false/break})
$(document).ready(function() {
  	$('a[href*=#]:not([href=#])').on('click', function() { //get all anchors (a) that contains # in href but exclude anchors with href exaclty equals to #
  		//'a[href*=#]:not([href=#])'
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  		var target = $(this.hash);
	  		// console.log(target);
		  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  	if (target.length) {
				$('html,body').animate({
			  	scrollTop: target.offset().top
			}, 1000);
			return false;
	  		}
		}
  	});
  	$("#home").on('click',function(){
  		var target = $("#");//retrieves the hash after a website. ie) var target = $(danShen.com#home) yields #home
	  	target = !target.length ? target : $('[name=' + this.hash.slice(1) +']'); //If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2.
	  	//hash.slice(1)-When there’s no hash, it doesn’t throw an error, although it returns undefined instead of the empty string.
	  	console.log(target);
	  	if (!target.length) {
			$('html,body').animate({
		  	scrollTop: 0 }, 1000);
  		}
  	});
  	//contact buttons fade in
	$("#contact").on('click',function(){
		//fading in
		$(".fa.fa-linkedin-square.fa-2x").addClass('fadeInfo');
		$(".displayContact .fa.fa-envelope.fa-2x").addClass('fadeInfo');
		$(".content").addClass('fadeInfo');
		//
		var target = $("#");//retrieves the hash after a website. ie) var target = $(danShen.com#home) yields #home
	  	target = !target.length ? target : $('[name=' + this.hash.slice(1) +']'); //If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2.
	  	//hash.slice(1)-When there’s no hash, it doesn’t throw an error, although it returns undefined instead of the empty string.
	  	console.log(target);
	  	if (!target.length) {
			$('html,body').animate({
		  	scrollTop: 0 }, 1000);
  		}
		//permanent opacity.
		$(".fa.fa-linkedin-square.fa-2x").addClass('permFadeIn');
		$(".displayContact .fa.fa-envelope.fa-2x").addClass('permFadeIn');
		$(".content").addClass('permFadeIn');
	});
	//about-me page transition
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
// $(document).ready(function() {
// 	$("#button").click(function() {
// 	    $('html, body').animate({
// 	        scrollTop: $("#myDiv").offset().top
// 	    }, 2000);
// 	});
// });

//http://papermashup.com/simple-jquery-showhide-div/