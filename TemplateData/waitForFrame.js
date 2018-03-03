function waitForFrame() {
	window.setTimeout(loadScript(), 10000);
}

function loadScript() {
	$.getScript('fullscreen.js',function(){
		fullscreen();
	});
}