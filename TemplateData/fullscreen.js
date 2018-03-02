function fullscreen() {
	var iframes = setTimeout(document.getElementsByTagName('iframe'), 10000);
	console.log(iframes);
}

function goFull() {
	var frame = document.getElementById("aelp");
	frame.requestFullscreen();
}