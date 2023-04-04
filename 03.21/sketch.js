let angle = 0;

function setup() {
  createCanvas(900, 900, WEBGL);
}

function draw() {
  background(220);

  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);

  fill(200, 200, 200);
  stroke(0);
  strokeWeight(2);


  push();
  translate(0, 200, 0);
  box(100, 200, 100);
  pop();

 
  push();
  translate(100, 0, 0);
  rotateZ(PI / 4);
  box(100, 200, 100);
  pop();

  push();
  translate(-100, 0, 0);
  rotateZ(-PI / 4);
  box(100, 200, 100);
  pop();

  angle += 0.02;
}

