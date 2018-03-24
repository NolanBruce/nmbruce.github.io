var isFull = false;

function toggleFull() {
	var frame = document.getElementById("gameContainer");
	console.log(document.fullscreenElement)
	console.log("window height: " + window.innerHeight);
	console.log("screen height: " + screen.height);
	//var button = document.getElementById("fullButton")
	if (window.innerHeight == screen.height) {
		console.log ("Attempting to enter fullscreen");
		if(frame.requestFullScreen) {
			frame.requestFullScreen();
			isFull = true;
			console.log(frame.fullscreen);
		} else if (frame.mozRequestFullscreen) {
			frame.mozRequestFullscreen();
			isFull = true;
			console.log(frame.fullscreen);
		} else if (frame.webkitRequestFullscreen) {
			frame.webkitRequestFullscreen();
			isFull = true;
			console.log(document.webkitIsFullScreen);
		} else if (frame.msRequestFullscreen) {
			frame.msRequestFullscreen();
			isFull = true;
			console.log(frame.fullscreen);
		}
		//console.log("Changing button image to exit");
		//button.style.backgroundImage = "url('TemplateData/exit-full-screen-hi.png')";
    	//button.style.backgroundRepeat = "no-repeat";
	} else {
		console.log("Attempting to exit fullscren");
		if(frame.exitFullScreen) {
			document.exitFullScreen();
			isFull = false;
		} else if (frame.mozCancelFullscreen) {
			document.mozCancelFullscreen();
			isFull = false;
		} else if (frame.webkitExitFullscreen) {
			document.webkitExitFullscreen();
			isFull = false;
		} else if (frame.msExitFullscreen) {
			document.msExitFullscreen();
			isFull = false;
		}
		//console.log("Changing button image to enter");
		//button.style.backgroundImage = "url('full-screen-hi.png')";
    	//button.style.backgroundRepeat = "no-repeat";
	}
}

function setUpFull() {
	isFull = false;
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