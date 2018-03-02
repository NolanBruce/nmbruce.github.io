function fullscreen() {
	document.addEventListener('DOMContentLoaded', goFull(), false);
}

function goFull() {
	var frame = document.getElementById("aelp");
	frame.requestFullscreen();
}