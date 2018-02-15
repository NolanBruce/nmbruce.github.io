function pseudoFS() {
	window.addEventListener("load", function() {
	  setTimeout(function() {
	    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	    if (scrollPos < 1) {
	      window.scrollTo(0,1);
	    }
	  }, 0);
	});
}