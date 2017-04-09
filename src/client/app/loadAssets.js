var PIXI = require('pixi.js');
//var fontName = 'Indie Flower';
var loadAssets = function(cb){
	//console.log(cb)
	PIXI.loader
		.add('cow', 'assets/cow.png')
		.load(cb.bind(this));		
} // end loadAssets
var loadTextures = function(){
	//debugger;
	var cowTexture = PIXI.Texture.fromFrame("cow"); 
}
var assets = function(){};
assets.loadAssets = loadAssets;
assets.loadTextures = loadTextures;
module.exports = exports = assets;