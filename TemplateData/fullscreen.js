var isFull = false;

function fullscreen() {
		goFull();
}

function toggleFull() {
	var frame = document.getElementById("gameContainer");
	if (!isFull) {
		if(frame.requestFullScreen) {
			frame.requestFullScreen();
			ifFull = true;
		} else if (frame.mozRequestFullscreen) {
			frame.mozRequestFullscreen();
			isFull = true;
		} else if (frame.webkitRequestFullscreen) {
			frame.webkitRequestFullscreen();
			isFull = true;
		} else if (frame.msRequestFullscreen) {
			frame.msRequestFullscreen();
			isFull = true;
		}
	} else {
		if(frame.exitFullScreen) {
			frame.exitFullScreen();
			ifFull = false;
		} else if (frame.mozCancelFullscreen) {
			frame.mozCancelFullscreen();
			isFull = false;
		} else if (frame.webkitExitFullscreen) {
			frame.webkitExitFullscreen();
			isFull = false;
		} else if (frame.msExitFullscreen) {
			frame.msExitFullscreen();
			isFull = false;
		}
	}
}

function addFullListener() {
	document.getElementById("fullButton").style.visibility = 'hidden';
	document.getElementById("gameContainer").addEventListener("click", addButton);
	var x = document.getElementById("gameContainer");
	var y;
}

function hideFullButton() {
	document.getElementById("fullButton").style.visibility = 'hidden';
}

function addButton(e) {
	document.getElementById("fullButton").style.visibility = 'initial';
}

function defAddButton() {
	console.log("Button ... should be added");
	document.getElementById("fullButton").style.visibility = 'initial';
}