let angle = 0;

function setup() {
  createCanvas(900, 900, WEBGL);
}

function draw() {
  background(255);
  rotateY(angle);
  angle += 0.01;

  noStroke();
  fill(0);


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
  translate(0, 320, 0);
  box(50, 200, 50);
  pop();

}