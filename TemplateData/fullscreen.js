function fullscreen() {
	setTimeout(goFull(),10000);
}

function goFull() {
	var frame = document.getElementById("simIFrame");
	frame.requestFullscreen();
}