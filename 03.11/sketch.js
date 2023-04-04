let angle = 0;

function setup() {
  createCanvas(900, 900, WEBGL);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);

  // Draw the noisy background
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      let noiseVal = noise(x * 0.01, y * 0.01, frameCount * 0.01);
      let c = color(255 * noiseVal);
      stroke(c);
      strokeWeight(2);
      point(x, y);
    }
  }

  rotateY(angle);
  angle += 0.01;

  let hue = map(mouseX, 0, width, 0, 360);
  let saturation = 100;
  let brightness = 100;
  fill(hue, saturation, brightness);

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
    saveCanvas(c, "03.15", "png")
}