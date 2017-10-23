function detectWebGLSupport() {
    //Create canvas for getting context
    var canvas = document.createElement("canvas");
    //Get webgl Context from canvas
    /* NOTE: removed experimental-webgl context to avoid
    accidental approval of older mobile devices. Remove
    commented out code to reactivate.*/
    var gl = !! canvas.getContext("webgl");// || !! canvas.getContext("experimental-webgl");
    //Get WebGLRenderingContext from window
    var rendcon = !! window.WebGLRenderingContext;
    //
    if (rendcon && gl) {
    	window.alert("Good to go.");
    } else {
    	window.alert("No good, man.");
    }
  }

  detectWebGLSupport();
