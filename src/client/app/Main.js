var PIXI = require('pixi.js');
var assets = require('./loadAssets.js');

//import Main from './index.jsx'
//import loadAssets from './loadAssets.js'


var cow = null;
var worldRenderer;
var Engine = (function(global) {
    document.addEventListener('DOMContentLoaded', function() {
    	//console.log('DomContentLoaded')
    	//debugger;
    	//window.scrollTo(0,1);
    	//document.body.style.overflow = 'hidden';


    	var app = new PIXI.Application(96, 96,
        {backgroundColor : 0x59b4ff, //,
         transparent : false, antialias: true});
    	worldRenderer = app.renderer;
    	worldRenderer.view.setAttribute("id", "canvas1");
		document.body.appendChild(worldRenderer.view);
		var stage = new PIXI.Container();




		var initialize = function(){
			//console.log('initialize')
			assets.loadTextures();
			var cowTexture = PIXI.Texture.fromFrame("cow");
			cow = new PIXI.Sprite(cowTexture);

		    cow.x = worldRenderer.width / 2;
		    cow.y = worldRenderer.height / 2;
		    cow.dx = 0;
		    cow.anchor.x = 0.5;
		    cow.anchor.y = 0.5;

		    stage.addChild(cow);
		    renderApp();
		    renderAwesome({
		    	onX: onX,
		    	onCenter: onCenter,
		    	onXPlus: onXPlus, onXMinus: onXMinus,
		    	exportCanvas: exportP5, //exportCanvas,
		    });
		    animate();
		}

		var onX = function(){
			console.log('on X from Main.js')
		}
		var onXPlus = function(){
			//cow.x += 5;
			cow.dx = 1;
		}
		var onXMinus = function(){
			//cow.x -= 5;
			cow.dx = -1;
		}
		var onCenter = function(){
			cow.dx = 0;
			cow.x = worldRenderer.width / 2;
		}
		var exportCanvas = function(){
			var newImg = document.createElement('img')
			worldRenderer.render(stage);
			var canvas = worldRenderer.view;
			var dataURL = canvas.toDataURL('image/jpeg', 1.0);
			return dataURL;
			//console.log(dataURL)
			//newImg.src = dataURL;
			//document.body.appendChild(newImg);
		}
		window.exportP5 = function(){
			var canvas = document.getElementById('defaultCanvas0')
			var dataURL = canvas.toDataURL('image/jpeg', 1.0);
			//console.log(dataURL)
			return dataURL;
		}
		//new loadAssets(initialize);
		assets.loadAssets(initialize);
		var update = function(){
	        //updateQueue.update();
	        if(cow) cow.x += cow.dx;
	    }
		function animate() {
            requestAnimationFrame(animate);
            update();
            worldRenderer.render(stage);
    	} // end animate
    }); // end DOMContentLoaded
})(this);
