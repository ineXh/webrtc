var PIXI = require('pixi.js');
var assets = require('./loadAssets.js');
//import loadAssets from './loadAssets.js'

var Engine = (function(global) {
    document.addEventListener('DOMContentLoaded', function() {
    	console.log('DomContentLoaded')

    	var worldRenderer = new PIXI.WebGLRenderer(300, 300, 
        {backgroundColor : 0x59b4ff, //,
         transparent : false, antialias: false});
		document.body.appendChild(worldRenderer.view);
		var stage = new PIXI.Container();

		
		var initialize = function(){
			console.log('initialize')
			assets.loadTextures();
			var cowTexture = PIXI.Texture.fromFrame("cow"); 
			var cow = new PIXI.Sprite(cowTexture);
		    
		    cow.x = worldRenderer.width / 2;
		    cow.y = worldRenderer.height / 2;		    
		    cow.anchor.x = 0.5;
		    cow.anchor.y = 0.5;
		    
		    stage.addChild(cow);
		    animate();
		}

		//new loadAssets(initialize);
		assets.loadAssets(initialize);
		var update = function(){
	        //updateQueue.update();
	    }
		function animate() {
            requestAnimationFrame(animate);
            update();
            worldRenderer.render(stage);
    	} // end animate
    }); // end DOMContentLoaded
})(this);    	