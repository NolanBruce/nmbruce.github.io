function fullscreen() {
		goFull();
}

function goFull() {
	var frame = document.getElementById("gameContainer");
	if (frame.requestFullscreen()) {
		frame.requestFullscreen()
	} else if (frame.webkitRequestFullScreen()) {
		frame.webkitRequestFullScreen();
	} else if (frame.mozRequestFullScreen()){
		frame.mozRequestFullScreen();
	}
	
}