function waitForFrame() {
	window.setTimeout(loadScript(), 10000);
}

function loadScript() {
	$.getScript('TemplateData/fullscreen.js',function(){
		fullscreen();
	});
}