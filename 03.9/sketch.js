let angle = 0;

function setup() {
  createCanvas(900, 900, WEBGL);
}

function draw() {
  background(220);
  stroke(0);
  noFill();


  push();
  translate(60, 300, 0);
  rotateX(-PI/6);
  box(100, 300, 100);
  pop();

 
  
  push();
  translate(0, -10, 30);
  rotateZ(-PI/6);
  box(100, 300, 100);
  pop();

  
  push();
  translate(140, -10, 0);
  rotateZ(PI/6);
  box(100, 300, 100);
  pop();

  angle += 0.01;
}


function mousePressed() {
    saveCanvas(c, "03.15", "png")
}