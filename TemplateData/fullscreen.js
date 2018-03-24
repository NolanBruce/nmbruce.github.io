function toggleFull() {
	var frame = document.getElementById("gameContainer");
	var button = document.getElementById("fullButton")
	if (sessionStorage[isFull] == false) {
		console.log ("Attempting to enter fullscreen");
		if(frame.requestFullScreen) {
			frame.requestFullScreen();
			sessionStorage[isFull] = true;
		} else if (frame.mozRequestFullscreen) {
			frame.mozRequestFullscreen();
			sessionStorage[isFull] = true;
		} else if (frame.webkitRequestFullscreen) {
			frame.webkitRequestFullscreen();
			sessionStorage[isFull] = true;
		} else if (frame.msRequestFullscreen) {
			frame.msRequestFullscreen();
			sessionStorage[isFull] = true;
		}
		console.log("Changing button image to exit");
		button.style.backgroundImage = "url('exit-full-screen-hi.png')";
    	button.style.backgroundRepeat = "no-repeat";
	} else {
		console.log("Attempting to exit fullscren");
		if(frame.exitFullScreen) {
			frame.exitFullScreen();
			sessionStorage[isFull] = false;
		} else if (frame.mozCancelFullscreen) {
			frame.mozCancelFullscreen();
			sessionStorage[isFull] = false;
		} else if (frame.webkitExitFullscreen) {
			frame.webkitExitFullscreen();
			sessionStorage[isFull] = false;
		} else if (frame.msExitFullscreen) {
			frame.msExitFullscreen();
			sessionStorage[isFull] = false;
		}
		console.log("Changing button image to enter");
		button.style.backgroundImage = "url('full-screen-hi.png')";
    	button.style.backgroundRepeat = "no-repeat";
	}
}

function setUpFull() {
	sessionStorage[isFull] = false;
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