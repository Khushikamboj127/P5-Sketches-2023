let c; 

function setup() {
    c = createCanvas(1000, 1000)
    background(230)

    

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
    strokeWeight(5)
    stroke(mouseX, mouseY, 0)
    
    
    //rect(50, 50, mouseX, mouseY)
}

function mousePressed() {
    saveCanvas(c, "03.15", "png")
}