let c; 

function setup() {
    c = createCanvas(1000, 1000)
    background(230)

    line(300, 200, 80, 80)



    //rect(100, 100, 100, 250)
    //rect(215, 130, 100, 250)
    //rect(330, 100, 100, 250)
    //rect(445, 130, 100, 250)

    //ellips(400, 200, 500)

   
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