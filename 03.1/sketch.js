let c; 

function setup() {
    c = createCanvas(1000, 1000)
    background(230)

    rect(250, 200, 55, 165)
    rect(500, 200, 55, 165)
    rect(250, 350, 305, 50)
    rect(380, 350, 55, 185)

   
}

function draw() {

    
    //background(255) //0 is black and 255 is white. look at p5 website for code references.

    //noFill()
    //strokeWeight(10)
    //stroke(mouseX, mouseY, 0)
    
    //rect(mouseX, mouseY, 100, 250)
    //rect(50, 50, mouseX, mouseY)
}

function mousePressed() {
    saveCanvas(c, "03.15", "png")
}