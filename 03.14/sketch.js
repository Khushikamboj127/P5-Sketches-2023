let angle = 0;
let noiseScale = 0.01;
let ySize = 200;

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
 
  for (let y = 0; y < height; y++) {
    let hue = map(y, 0, height, 0, 360);
    let saturation = 100;
    let brightness = map(y, 0, height, 100, 0);
    stroke(hue, saturation, brightness);
    line(0, y, width, y);
  }

  
  translate(width / 2, height / 2);
  rotate(angle);
  angle += 0.005;

  let hue = map(mouseX, 0, width, 0, 360);
  let saturation = 100;
  let brightness = 100;
  fill(hue, saturation, brightness);
  noStroke();

  quad(-ySize/2, -ySize, -ySize/2, 0, -ySize*0.8, 0, -ySize*0.8, -ySize/2);
  quad(ySize/2, -ySize, ySize/2, 0, ySize*0.8, 0, ySize*0.8, -ySize/2);
  rect(-ySize/4, 0, ySize/2, ySize*0.8);
  rect(-ySize/2, -ySize/4, ySize, ySize/2);


  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let newSize = map(mouseY, 0, height, 100, 400);
    ySize = lerp(ySize, newSize, 0.1);
  }
}


function mousePressed() {
    saveCanvas(c, "03.15", "png")
}