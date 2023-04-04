let noiseOffset = 0;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(255);

  let color1 = color(random(255), random(255), random(255));
  let color2 = color(random(255), random(255), random(255));


  let noiseX = noise(noiseOffset) * width;
  let noiseY = noise(noiseOffset + 100) * height;

  fill(color1);
  quad(250 + noiseX, 100 + noiseY, 225, 325, 175, 325, 200 + noiseX, 100 + noiseY);
  quad(400 + noiseX, 100 + noiseY, 425, 325, 475, 325, 450 + noiseX, 100 + noiseY);
  fill(color2);
  rect(299 + noiseX, 325 + noiseY, 50, 180);
  rect(225 + noiseX, 325 + noiseY, 200, 50);

 
  noiseOffset += 0.01;
}

function mouseClicked() {
  redraw();
}

function mousePressed() {
    saveCanvas(c, "03.15", "png")
}