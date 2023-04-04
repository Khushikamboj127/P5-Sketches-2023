let ySize = 100;
let yColor = [255, 0, 0];

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(255);
  noStroke();
  fill(yColor);
  drawY(width/2, height/2, ySize);
}

function drawY(x, y, size) {
  rect(x-size/2, y-size, size/3, size); 
  rect(x+size/6, y-size/2, size/3, size/2); 
  rect(x-size/4, y-size/4, size/2, size/4); 
  rect(x-size/6, y, size/3, size); 
}

function mousePressed() {
  yColor = [random(255), random(255), random(255)];
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ySize += 10;
  } else if (keyCode === DOWN_ARROW) {
    ySize -= 10;
  }
}

