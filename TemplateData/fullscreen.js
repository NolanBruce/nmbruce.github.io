var isFull = false;

function toggleFull() {
	var frame = document.getElementById("gameContainer");
	var button = document.getElementById("fullButton");
	if (window.innerHeight != screen.height) {
		console.log ("Attempting to enter fullscreen");
		if(frame.requestFullScreen) {
			frame.requestFullScreen();
			isFull = true;
			addExit();
		} else if (frame.mozRequestFullscreen) {
			frame.mozRequestFullscreen();
			isFull = true;
			addExit();
		} else if (frame.webkitRequestFullscreen) {
			frame.webkitRequestFullscreen();
			isFull = true;
			addExit();
		} else if (frame.msRequestFullscreen) {
			frame.msRequestFullscreen();
			isFull = true;
			addExit();
		}
	}
}

function exitFull() {
	console.log("Attempting to exit fullscren");
		if(frame.exitFullScreen) {
			document.exitFullScreen();
			isFull = false;
			addFull();
		} else if (frame.mozCancelFullscreen) {
			document.mozCancelFullscreen();
			isFull = false;
			addFull();
		} else if (frame.webkitExitFullscreen) {
			document.webkitExitFullscreen();
			isFull = false;
			addFull();
		} else if (frame.msExitFullscreen) {
			document.msExitFullscreen();
			isFull = false;
			addFull();
		}
		console.log("Changing button image to enter");
		button.style.backgroundImage = "url('TemplateData/full-screen-hi.png')";
    	button.style.backgroundRepeat = "no-repeat";
}

function addExit() {
	var button = document.createElement("BUTTON");   
	button.id = "exitFullButton"     
	button.class = "exitFullButton";
	document.getElementById("fullButton").style.visibility = 'hidden';                              
	document.getElementById("gameContainer").appendChild(button); 
	button = document.getElementById("exitFullButton");
	button.className = "exitFullButton";
	button.addEventListener("click", exitFull);
}

function addFull() {
	var button = document.getElementById("fullButton");
	button.style.backgroundImage = "url('TemplateData/full-screen-hi.png')";
	button.style.backgroundRepeat = "no-repeat";
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