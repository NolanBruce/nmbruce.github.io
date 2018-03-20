function fullscreen() {
		goFull();
}

function goFull() {
	var frame = document.getElementById("gameContainer");
	try {
		frame.requestFullscreen();
	} catch(err) {
		console.log("requestFullScreen failed");
	}
	try {
		frame.mozRequestFullscreen();
	} catch(err) {
		console.log("mozRequestFullScreen failed");
	}
	try {
		frame.webkitRequestFullscreen();
	} catch(err) {
		console.log("webkitRequestFullScreen failed");
	}

	document.getElementById("fullButton").style.visibility = 'hidden';
}

function addFullListener() {
	document.getElementById("fullButton").style.visibility = 'hidden';
	document.getElementById("gameContainer").addEventListener("click", addButton);
}

function addButton(e) {
	console.log("x= " + e.clientX);
	console.log("y= " + e.clientY);

	if(e.clientY<50) {
		console.log("High enough for button add");
	}
	if(e.clientX>(window.screen.availWidth-(.08*window.screen.availWidth))) {
		console.log("Right enough for button add");
	}
	if(e.clientY<50&&e.clientX>(window.screen.availWidth-(.08*window.screen.availWidth))) {
		console.log("Button ... should be added");
		document.getElementById("fullButton").style.visibility = 'initial';
	}
}