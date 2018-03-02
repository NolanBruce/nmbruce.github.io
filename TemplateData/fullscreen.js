function fullscreen() {
	var timeout;
	timeout = window.onload(goFull(), 300000);
}

function goFull() {
	var frame = document.getElementById("aelp");
	frame.requestFullscreen();
}