let canvasWidth = 900;
let canvasHeight = 900;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255);
}

function draw() {
  translate(width/2, height/2);
  strokeWeight(3);
  stroke(0);
  

  line(0, 350, 0, 50); 
  line(0, 200, -150, 0); 
  line(0, 200, 150, 0); 


  noStroke();
  fill(255, 0, 0);
  circle(0, 350, 50);
  fill(0, 255, 0);
  circle(-150, 0, 50);
  fill(0, 0, 255);
  circle(150, 0, 50); 

  rotate(frameCount / 100.0);
}

