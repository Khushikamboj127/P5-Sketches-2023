let c; 

function setup() {
    c = createCanvas(800, 750)
    background(0)


}

function draw() {

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
