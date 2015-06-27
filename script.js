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
$(document).ready(function(){
	$("#contact").on('click',function(){
		//fading in
		$(".fa.fa-linkedin-square.fa-2x").addClass('fadeInfo');
		$(".displayContact .fa.fa-envelope.fa-2x").addClass('fadeInfo');
		$(".content").addClass('fadeInfo');
		//permanent opacity.
		$(".fa.fa-linkedin-square.fa-2x").addClass('permFadeIn');
		$(".displayContact .fa.fa-envelope.fa-2x").addClass('permFadeIn');
		$(".content").addClass('permFadeIn');
		//gets rid of the lack of hyperlink
		// $(".magic").addClass('contentShow');
	});
});
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });
//http://papermashup.com/simple-jquery-showhide-div/