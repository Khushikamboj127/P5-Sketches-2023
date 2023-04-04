let angle = 0;
let ySize;
let yColor;

function setup() {
  createCanvas(900, 900, WEBGL);
  ySize = height * 0.4;
  yColor = color(255, 0, 0);
}

function draw() {
  background(255);
  noStroke();
  fill(yColor);
  rotateX(angle);
  rotateY(angle*1.3);
  drawY(0, 0, ySize);
  angle += 0.02;
}

function drawY(x, y, size) {
  push();
  translate(-150, 0, 0);
  box(50, 400, 50);
  pop();

  push();
  translate(150, 0, 0);
  box(50, 400, 50);
  pop();

  push();
  translate(0, 200, 0);
  rotateX(PI/4);
  box(300, 50, 50);
  pop();

  push();
  translate(0, 275, 0);
  box(50, 200, 50);
  pop();
  
}


function mousePressed() {
  yColor = color(random(255), random(255), random(255));
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ySize += 10;
  } else if (keyCode === DOWN_ARROW) {
    ySize -= 10;
  }
}
