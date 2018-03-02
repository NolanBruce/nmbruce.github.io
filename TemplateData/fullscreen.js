function fullscreen() {
	var iframes = document.getElementsByTagName('iframe');
	console.log(iframes);
	window.setTimoeout(document.body.addEventListener('DOMNodeInserted', function( event ) {
    console.log('whoot! a new Element was inserted, see my event object for details!');
	}, false), 3000);
}

function goFull() {
	var frame = document.getElementById("aelp");
	frame.requestFullscreen();
}