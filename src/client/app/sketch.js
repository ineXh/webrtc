
// for red, green, and blue color values
var r, g, b;
var bool = false;
var cowVideo;
var newVideo = null;
function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  cowVideo = createVideo(['src/client/assets/cow.webm']);
  cowVideo.hide();

}
function playNewVideo(blob){
  newVideo = createVideo(URL.createObjectURL(blob));
  newVideo.hide();
  newVideo.loop();
}

function draw() {
  background(127);
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  //image(cowVideo,10,10);
  if(newVideo) image(newVideo, 300,10);
  ellipse(360, 200, 200, 200);
  var fps = frameRate();
  text("FPS: " + fps.toFixed(2), 10, height - 10);


}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);

  	if(!bool){
  		renderEmpty();
  	}else{
  		renderApp();
  	}
  	bool = !bool;
    cowVideo.loop(); 
  }
}
