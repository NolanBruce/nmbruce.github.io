function fullscreen() {
		goFull();
}

function goFull() {
	var frame = document.getElementById("gameContainer");
	try {
		frame.requestFullscreen();
	} catch(err) {
		console.log("requestFullScreen failed");
	}
	try {
		frame.mozRequestFullscreen();
	} catch(err) {
		console.log("mozRequestFullScreen failed");
	}
	try {
		frame.webkitRequestFullscreen();
	} catch(err) {
		console.log("webkitRequestFullScreen failed");
	}

	document.getElementById("fullButton").style.visibility = 'hidden';
}

function addFullListener() {
	document.getElementById("fullButton").style.visibility = 'hidden';
	document.getElementById("gameContainer").addEventListener("click", addButton);
	var x = document.getElementById("gameContainer");
	var y;
	for(i=0;i<5;i++) {
		y = document.getElementById(x.parentElement.nodeName);
		console.log("Parent:  " +y);

		x=document.getElementById(y);

	}
}

function addButton(e) {
	console.log("x= " + e.clientX);
	console.log("y= " + e.clientY);
	
	if(e.clientY<50&&e.clientX>(window.screen.availWidth-(.08*window.screen.availWidth))) {
		console.log("Button ... should be added");
		document.getElementById("fullButton").style.visibility = 'initial';
	}
}