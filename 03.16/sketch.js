let noiseScale = 0.02;
let particles = [];

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 360, 100, 100);
  noStroke();

 
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0);

  scale(1)
  let ySize = height * 0.5;
  let yTop = height * 0.2;
  let yLeft = width * 0.3;
  let yRight = width * 0.7;

  fill(240, 80, 100);
  beginShape();
  vertex(yLeft, yTop);
  vertex(yLeft, yTop + ySize * 0.4);
  vertex(yLeft + ySize * 0.2, yTop + ySize * 0.6);
  vertex(yLeft + ySize * 0.2, yTop + ySize * 0.9);
  vertex(width / 2, yTop + ySize);
  vertex(yRight - ySize * 0.2, yTop + ySize * 0.9);
  vertex(yRight - ySize * 0.2, yTop + ySize * 0.6);
  vertex(yRight, yTop + ySize * 0.4);
  vertex(yRight, yTop);
  endShape();

  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.color = color(random(360), 80, 100);
  }

  update() {
    
    let noiseVal = noise(this.pos.x * noiseScale, this.pos.y * noiseScale);
    let angle = map(noiseVal, 0, 1, 0, TWO_PI);
    let force = p5.Vector.fromAngle(angle);
    force.mult(0.5);

   
    this.acc.add(force);
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;

    
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}


function mousePressed() {
    saveCanvas(c, "03.15", "png")
}