function fullscreen() {
	window.onload = goFull();
}

function goFull() {
	var frame = document.getElementById("simIFrame");
	frame.requestFullscreen();
}