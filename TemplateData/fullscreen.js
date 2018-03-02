function fullscreen() {
	var iframes = document.getElementsByTagName('iframe');
	console.log(iframes);
}

function goFull() {
	var frame = document.getElementById("aelp");
	frame.requestFullscreen();
}