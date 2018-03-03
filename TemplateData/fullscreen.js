function fullscreen() {
		goFull();
}

function goFull() {
	var frame = document.getElementById("gameContainer");
	frame.webkitRequestFullScreen();
	//frame.requestFullscreen();
}