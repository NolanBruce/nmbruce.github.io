function DetectWebGL() {
    //Create canvas for getting context
    var canvas = document.createElement("canvas");
    //Get webgl Context from canvas
    /* NOTE: removed experimental-webgl context to avoid
    accidental approval of older mobile devices. Remove
    commented out code to reactivate.*/
    var gl = !! canvas.getContext("webgl");// || !! canvas.getContext("experimental-webgl");
    //Get WebGLRenderingContext from window
    var rendcon = !! window.WebGLRenderingContext;
    //if webgl context or rendering context
    if (rendcon || gl) {
    	if (confirm("Small Worlds cannot run because" + 
            "WebGL is not supported on your device.")) {
    		window.location = "https://etx.asu.edu/";
    	} else {
    		window.location = "https://etx.asu.edu/";
    	}
    }
  }

  DetectWebGL();
