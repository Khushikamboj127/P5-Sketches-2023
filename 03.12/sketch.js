let particles = [];
let numParticles = 100;
let noiseScale = 0.02;

function setup() {
  createCanvas(900, 900);
  colorMode(HSB, 360, 100, 100);
  
  
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0);

    
    scale(1.5);
    fill(255, 204, 40);
    quad(250, 100, 225, 325, 175, 325, 200, 100);
    quad(400, 100, 425, 325, 475, 325, 450, 100);
    rect(299, 325, 50, 180);
    rect(225, 325, 200, 50);
    

  for (let i = 0; i < numParticles; i++) {
    particles[i].update();
    particles[i].display();
  }
}


class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.maxSpeed = 5;
    this.hue = random(0, 360);
  }
  

  update() {
    let noiseVal = noise(this.pos.x * noiseScale, this.pos.y * noiseScale);
    let angle = map(noiseVal, 0, 1, -PI/2, PI/2);
    this.acc = p5.Vector.fromAngle(angle);
    this.acc.setMag(0.1);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.checkEdges();
  }
  

  checkEdges() {
    if (this.pos.x < -10) this.pos.x = width + 10;
    if (this.pos.y < -10) this.pos.y = height + 10;
    if (this.pos.x > width + 10) this.pos.x = -10;
    if (this.pos.y > height + 10) this.pos.y = -10;
  }
  
  display() {
    let segmentLength = 10;
    let segmentDirection = this.vel.copy().normalize().mult(segmentLength);
    let segmentStart = this.pos.copy().sub(segmentDirection);
    let segmentEnd = this.pos.copy().add(segmentDirection);
    stroke(this.hue, 100, 100);
    line(segmentStart.x, segmentStart.y, segmentEnd.x, segmentEnd.y);
  }
}


function mousePressed() {
    saveCanvas(c, "03.15", "png")
}