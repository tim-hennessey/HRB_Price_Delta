var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	// var tl2 = new TimelineMax();

	var txt1a = document.getElementById('txt1a');

	var cta = document.getElementById('cta');
	var cta_txt = document.getElementsByClassName('cta_txt');
	var buttonExit = document.getElementById('button-exit');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .25, {backgroundColor: "#3bc0f8"});
            t.to(cta_txt, .25, {fill: "#262626" });
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {backgroundColor: "#f5cc02"});
            t.to(cta_txt, .25, {fill: "#000" });
        });
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		// tl2.to(tl1, 3, {progress:1, force3D:true, ease: Sine.easeInOut}, "+=.5");

		t.delayedCall(0, animateIcon);
		
	}


	function animateIcon() {
		var img = document.getElementById('gif');
		var newImg = new Image;
		newImg.onload = function() { img.src = this.src; }
		newImg.src = 'images/gif.gif?';
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
