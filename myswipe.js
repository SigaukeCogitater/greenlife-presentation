/**
 * Provides requestAnimationFrame in a cross browser way.
 * @author greggman / http://greggman.com/
 */


/**
 * Swipe detection
 * @author Klas Kroon, North Kingdom / http://oos.moxiecode.com/
 */

var context;
var canvas;
var time = 0;

// mouse/touch
var mouseStartX, mouseStartY;
var mouseX, mouseY;
var mouseIsDown = false;


function init() {

	canvas = document.getElementById('mycanvas');
	
	console.log('[myswipe] mycanvas ' + canvas);

	// listeners
	canvas.addEventListener('touchstart', onTouchStart);
	canvas.addEventListener('touchmove', onTouchMove);
	canvas.addEventListener('touchend', onTouchEnd);

	// canvas.addEventListener('mousedown', onDocumentMouseDown);
	// canvas.addEventListener('mouseup', onDocumentMouseUp);
	// canvas.addEventListener('mousemove', onDocumentMouseMove);

	

}


function checkSwipe() {

	console.log('[myswipe] checkSwipe ');
	
	// check distance between start position and current
	var dx = mouseStartX - mouseX;
	var dy = mouseStartY - mouseY;
	var distance =  dx * dx + dy * dy;

	console.log('[myswipe] checkSwipe distance: ' + distance);

	// over a certain distance, detect a swipe
	if (distance > 7000) {

		// reset
		// upIsDown = false;
		// rightIsDown = false;
		// downIsDown = false;
		// leftIsDown = false;

		// check the angle
		var angle = 360 - 180 - getAngle(mouseStartX, mouseStartY, mouseX, mouseY) * 180 / Math.PI;
		if (angle > 315 || angle < 45) {
			// upIsDown = true;
			console.log('[myswipe] UP ');
		}
		if (angle >= 45 && angle < 135) {
			// rightIsDown = true;
			console.log('[myswipe] RIGHT ');
			leftArrowPressed();
		}
		if (angle >= 135 && angle < 225) {
			// downIsDown = true;
			console.log('[myswipe] DOWN ');
		}
		if (angle >= 225 && angle < 315) {
			// leftIsDown = true;
			console.log('[myswipe] LEFT ');
			rightArrowPressed();
		}

		//showArrow();

		// reset start position
		mouseStartX = mouseX;
		mouseStartY = mouseY;

		//distance = 0;

	}

}

/*
 * Events
 */

function onDocumentMouseMove(event) {

	mouseX = event.clientX;
	mouseY = event.clientY;

	if (mouseIsDown) {
		//alert("onmouse -move and -down");
		checkSwipe();
	}

}

function onDocumentMouseDown(event) {

	//alert("onmousedown");

	event.preventDefault();

	mouseIsDown = true;

	mouseStartX = event.clientX;
	mouseStartY = event.clientY;

}

function onDocumentMouseUp(event) {

	//alert("onmouseup");

	event.preventDefault();

	mouseIsDown = false;

}

function onTouchStart(event) {

	event.preventDefault();

	mouseIsDown = true;

	mouseStartX = event.touches[0].clientX;
	mouseStartY = event.touches[0].clientY;

	mouseX = mouseStartX;
	mouseY = mouseStartY;

}

function onTouchMove(event) {

	event.preventDefault();

	mouseX = event.touches[0].clientX;
	mouseY = event.touches[0].clientY;

	if (mouseIsDown) {
		checkSwipe();
	}

}

function onTouchEnd(event) {

	event.preventDefault();

	mouseIsDown = false;

}

// helpers
function getAngle (x1, y1, x2, y2) {
	
	var dx = x2 - x1;
	var dy = y2 - y1;
	return Math.atan2(dx,dy);

}