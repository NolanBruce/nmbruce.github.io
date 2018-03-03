function waitForFrame() {
	console.log( $ === jQuery )
	window.setTimeout(loadScript(), 10000);
}

function loadScript() {
	$.getScript('TemplateData/fullscreen.js',function(){
		fullscreen();
	});
}