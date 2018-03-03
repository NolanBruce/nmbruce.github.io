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
	
}