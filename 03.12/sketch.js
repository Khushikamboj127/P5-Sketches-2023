let angle = 0;
let noiseScale = 0.02;

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);
  
  let noiseMax = map(mouseY, 0, height, 100, 500);
  
  
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      let noiseVal = noise(x * noiseScale, y * noiseScale);
      let size = map(noiseVal, 0, 1, 0, noiseMax);
      fill(255, 0, 0, 50);
      noStroke();
      ellipse(x, y, size, size);
    }
  }

  
  translate(width / 2, height / 2);
  rotate(angle);
  angle += 0.05;

  let hue = map(mouseX, 0, width, 0, 360);
  let saturation = 100;
  let brightness = 100;
  fill(hue, saturation, brightness);

  quad(-100, -200, -125, -25, -175, -25, -150, -200);
  quad(100, -200, 125, -25, 175, -25, 150, -200);
  rect(-51, -25, 102, 180);
  rect(-125, -25, 250, 50);
}

function mouseClicked() {
  noiseScale = random(0.01, 0.05);
}



function mousePressed() {
    saveCanvas(c, "03.15", "png")
}