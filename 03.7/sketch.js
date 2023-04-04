function setup() {
    createCanvas(900, 900);
  }
  
  function draw() {
    background(255);
    fill(mouseX/3, mouseY/3, 200);
  
    quad(250, 100, 225, 325, 175, 325, 200, 100);
    quad(400, 100, 425, 325, 475, 325, 450, 100);
    rect(299, 325, 50, 180);
    rect(225, 325, 200, 50);
  }

function mousePressed() {
    saveCanvas(c, "03.15", "png")
}