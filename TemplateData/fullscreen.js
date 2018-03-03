function fullscreen() {
	goFull();
}

function goFull() {
	var frame = document.getElementById("simIFrame");
	frame.remove();
	//frame.requestFullscreen();
}