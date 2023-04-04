let x = 0;
let y = 0;
let angle = 0;
let speed = 0.05;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(255);

  stroke(0);
  strokeWeight(5);
  line(225 + x, 325 + y, 175 + x, 100 + y);
  line(225 + x, 325 + y, 275 + x, 100 + y);
  line(225 + x, 325 + y, 225 + x, 505 + y);
  rect(200 + x, 505 + y, 50, 50);

  x += cos(angle) * 5;
  y += sin(angle) * 5;

  angle += speed;
}

function mousePressed() {
  x = 0;
  y = 0;
  angle = 0;
}
