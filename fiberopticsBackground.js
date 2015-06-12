/**
 * @author Paul Chan / KF Software House 
 * http://www.kfsoft.info
 *
 * Version 0.5
 * Copyright (c) 2010 KF Software House
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
	
(function($) {

    var _options = null;
	jQuery.fn.MyLiveWallpaper = function(options) {
		_options = $.extend({}, $.fn.MyLiveWallpaper.defaults, options);

		return this.each(function(i)
		{
			moveRay(this, _options.direction,i);
		});
	}
	
	//default values
	jQuery.fn.MyLiveWallpaper.defaults = {
		direction: 1, //1: right to left, 2: left to right, 3: top to bottom, 4: bottom to top
		rayFileWidth: 750,
		rayFileHeight: 750,
		livePanelId:"",
		baseSpeed: 9000
	};
	
	function moveRay(obj, direction, i)
	{
		var runTime = _options.baseSpeed +getRand()*500;
		var topStart = 80+i*50;
		var directionSign = "";
		if (direction==1)
			directionSign = "+";
		else if (direction==2)
			directionSign = "-";
		else if (direction==3)
			directionSign = "-";
		else if (direction==4)
			directionSign = "+";
		
		var windowWidth = null;
		var windowHeight = null;
		if (_options.livePanelId=="")
		{
			windowWidth = $(window).width();
			windowHeight = $(window).height();
		}
		else
		{
			windowWidth = $("#"+_options.livePanelId).width();
			windowHeight = $("#"+_options.livePanelId).height();
		}

		$(obj).css("position", "absolute");
		
		var minShift = null;
		var newleft = null;
		var newtop = null;
		
		if (direction==1) //LEFT TO RIGHT (MUST IN THE LEFT HAND SIDE OF THE SCREEN
		{
			newleft = 0 - _options.rayFileWidth;
			minShift =  _options.rayFileWidth+windowWidth;
			
			$(obj).css("left", newleft);
			topStart = topStart*getRand();
			$(obj).css("top", topStart);

		}
		else if (direction==2)
		{
			newleft = windowWidth + _options.rayFileWidth;
			minShift = newleft + _options.rayFileWidth;
				
			$(obj).css("left", newleft);
			topStart = topStart*getRand();
			$(obj).css("top", topStart);
		}
		else if (direction==3)
		{
			newtop = _options.rayFileWidth + windowHeight;
			minShift = _options.rayFileWidth*2 + windowHeight;
			
			$(obj).css("top", newtop);
			topStart = topStart*getRand();
			$(obj).css("left", topStart);
		}
		else if (direction==4)
		{
			newtop = 0-_options.rayFileHeight;

			minShift = _options.rayFileHeight*2 + windowHeight;
			
			$(obj).css("top", newtop);
			topStart = topStart*getRand();
			$(obj).css("left", topStart);
		}

		if (direction==1 || direction==2)
		{
			$(obj).animate({
				opacity: 0.8,
				//left: directionSign + '='+windowWidth*1.3
				left: directionSign + '='+ minShift
			}, runTime,	function(){
				moveRay(obj, direction, i);
			});
		}
		else if (direction==3 || direction==4)
		{
			$(obj).animate({
				opacity: 0.8,
				top: directionSign + '='+ minShift
			}, runTime, function(){
				moveRay(obj, direction, i);
			});
		}
	}
	
	function getRand()
	{
		var now = new Date();
		var seed = now.getSeconds();
		var rand =  Math.floor(Math.random(seed)*11);
		return rand;
	}
	
	
})(jQuery);