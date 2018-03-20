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

	var x = document.getElementById("fullscreen")
	var y;
	document.getElementById("fullButton").style.visibility = 'hidden';
}

function addFullListener() {
	document.getElementById("fullButton").style.visibility = 'hidden';
	document.addEventListener("click", addButton);
}

function addButton() {
	document.getElementById("fullButton").style.visibility = 'visibile';
}