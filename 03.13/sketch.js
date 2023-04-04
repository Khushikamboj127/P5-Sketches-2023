let angle = 0;
let noiseScale = 0.01;

let hueOffset = 0;
let ySpacing = 20;

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);
  
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      let noiseVal = noise(x * noiseScale, y * noiseScale);
      let size = map(noiseVal, 0, 1, 0, 10);
      let hue = map(noiseVal, 0, 1, 0 + hueOffset, 360 + hueOffset);
      fill(hue, 100, 100);
      noStroke();
      ellipse(x, y, size, size);
    }
  }
  
    rect(250, 200, 40, 80)
    rect(210, 200, 40, 80)
    rect(290, 280, 40, 80)
    rect(250, 280, 40, 80)
    rect(330, 360, 40, 80)
    rect(290, 360, 40, 80)

    rect(370, 360, 40, 80)
    rect(410, 360, 40, 80)
    rect(410, 280, 40, 80)
    rect(450, 280, 40, 80)
    rect(450, 200, 40, 80)
    rect(490, 200, 40, 80)

    rect(330, 440, 40, 80)
    rect(330, 520, 40, 80)
    rect(370, 440, 40, 80)
    rect(370, 520, 40, 80)

    noFill()
    strokeWeight(40)
    stroke(mouseX, mouseY, 10, 10)
}


function mousePressed() {
    saveCanvas(c, "03.15", "png")
}