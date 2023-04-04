let angle = 0;

function setup() {
  createCanvas(900, 900, WEBGL);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(50);


  let ySize = height * 0.6;
  let yTop = height * 0.2;
  let yLeft = width * 0.3;
  let yRight = width * 0.7;

  
  push();
  rotateX(angle);
  rotateY(angle * 1.3);
  translate(-width / 2, -height / 2, -200);


  noFill();
  beginShape();
  vertex(yLeft, yTop, 0);
  vertex(yLeft, yTop + ySize * 0.4, 0);
  vertex(yLeft + ySize * 0.2, yTop + ySize * 0.6, 0);
  vertex(yLeft + ySize * 0.2, yTop + ySize * 0.9, 0);
  vertex(width / 2, yTop + ySize, 0);
  vertex(yRight - ySize * 0.2, yTop + ySize * 0.9, 0);
  vertex(yRight - ySize * 0.2, yTop + ySize * 0.6, 0);
  vertex(yRight, yTop + ySize * 0.4, 0);
  vertex(yRight, yTop, 0);
  endShape(CLOSE);

  strokeWeight(2);
  for (let i = yLeft; i <= yRight; i += 10) {
    for (let j = yTop; j <= yTop + ySize; j += 10) {
      push();
      translate(i, j, sin(angle * 0.5 + i * 0.01 + j * 0.005) * 50);
      fill(255, 255, 255, 50);
      box(5);
      pop();
    }
  }
  pop();

  angle += 0.01;
}


function mousePressed() {
    saveCanvas(c, "03.15", "png")
}