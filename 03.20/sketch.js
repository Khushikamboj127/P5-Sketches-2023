let angle = 0;
let yRotation = 0;

function setup() {
  createCanvas(900, 900, WEBGL);
}

function draw() {
  
  fill(0);
  stroke(255);

  
  camera(0, 0, mouseY);

  
  rotateX(angle);
  rotateY(yRotation);

  
  beginShape();
  vertex(-100, -200, 0);
  vertex(0, -100, 0);
  vertex(100, -200, 0);
  vertex(0, 100, 0);
  vertex(0, -100, 0);
  vertex(0, 0, -100);
  vertex(0, 100, 0);
  vertex(0, 0, 100);
  endShape();


  angle += 0.01;
  yRotation += 0.01;
}
