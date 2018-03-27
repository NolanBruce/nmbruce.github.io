var isFull = false;

function toggleFull2() {
	var frame = document.getElementById("gameContainer");
	var button = document.getElementById("fullButton");
	if (window.innerHeight != screen.height) {
		console.log ("Attempting to enter fullscreen");
		if(frame.requestFullScreen) {
			frame.requestFullScreen();
			isFull = true;
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
		console.log("Changing button image to exit");
		button.style.background = "url('TemplateData/exit-full-screen-hi.png')";
    	button.style.backgroundRepeat = "no-repeat";
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
		console.log("Changing button image to enter");
		button.style.backgroundImage = "url('TemplateData/full-screen-hi.png')";
    	button.style.backgroundRepeat = "no-repeat";
	}
}

function toggleFull() {
	var button = document.createElement("BUTTON");   
	button.id = "exitFullButton"     
	button.class = "exitFullButton";
	document.getElementById("fullButton").style.visibility = 'hidden';                              
	document.getElementById("gameContainer").appendChild(button); 
	button = document.getElementById("exitFullButton");
	button.className = "exitFullButton";
}

function setUpFull() {
	var button = document.getElementById("fullButton");
	button.style.backgroundImage = "url('TemplateData/full-screen-hi.png')";
	button.style.backgroundRepeat = "no-repeat";
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