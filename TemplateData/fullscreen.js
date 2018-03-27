var isFull = false;

function toggleFull() {
	var frame = document.getElementById("gameContainer");
	if (!document.isFullScreen && !document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
		console.log ("Attempting to enter fullscreen");
		if(frame.requestFullScreen) {
			console.log("standardFull");
			frame.requestFullScreen();
			isFull = true;
			addExit();
		} else if (frame.mozRequestFullscreen) {
			console.log("mozFull");
			frame.mozRequestFullscreen();
			isFull = true;
			addExit();
		} else if (frame.webkitRequestFullscreen) {
			console.log("webkitFull");
			frame.webkitRequestFullscreen();
			isFull = true;
			addExit();
		} else if (frame.msRequestFullscreen) {
			console.log("msFull");
			frame.msRequestFullscreen();
			isFull = true;
			addExit();
		} 
	} else {
		console.log("Attempting to exit fullscreen");
		if(document.exitFullScreen) {
			console.log("standardExit");
			document.exitFullScreen();
			isFull = false;
		} else if (document.mozCancelFullscreen) {
			console.log("moxExit");
			document.mozCancelFullscreen();
			isFull = false;
		} else if (document.webkitExitFullscreen) {
			console.log("webkitExit");
			document.webkitExitFullscreen();
			isFull = false;
		} else if (document.msExitFullscreen) {
			console.log("msExit");
			document.msExitFullscreen();
			isFull = false;
		}
	document.getElementById("exitFullButton").style.visibility = 'hidden';
	document.getElementById("fullButton").style.visibility = 'initial';
	}
}

function exitFull() {
	var frame = document.getElementById("gameContainer");
	var button = document.getElementById("fullButton");
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
		document.getElementById("fullButton").style.visibility = 'visibile';
}

function addExit() {
	var button = document.createElement("BUTTON");   
	button.id = "exitFullButton"     
	button.class = "exitFullButton";
	document.getElementById("fullButton").style.visibility = 'hidden';                              
	document.getElementById("gameContainer").appendChild(button); 
	button = document.getElementById("exitFullButton");
	button.className = "exitFullButton";
	button.addEventListener("click", toggleFull);
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