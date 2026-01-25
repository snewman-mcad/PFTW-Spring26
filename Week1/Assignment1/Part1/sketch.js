let grid;
let hatColor = prompt("What color should the hat be?");

function setup() {
    createCanvas(1000, 800);
    background('#A3C3D9');
    grid = loadImage("assets/100px_grid.png");
}

function draw() {
    //background(grid);
    fill('#E9ECF5');
    //ground snow
    noStroke();
    quad(0, 800, 0, 500, 1000, 500, 1000, 800);
    stroke('#CCD6EB');
    strokeWeight(20);
    //ellipse(x, y, w, [h])
    //bottom ball
    ellipse(350, 650, 300);
    //middle ball
    ellipse(350, 450, 200);
    //top ball
    ellipse(350, 300, 150);
    //eyes
    stroke('#1a1a1a');
    strokeWeight(30);
    point(300, 295);
    point(400, 295);
    //mouth
    strokeWeight(15);
    point(350, 355);
    point(373, 350);
    point(390, 335);
    point(327, 350);
    point(310, 335);
    //carrot nose
    fill('#B16828');
    noStroke();
    beginShape();
    vertex(350, 300);
    vertex(300, 325);
    vertex(357, 320);
    endShape(CLOSE);
    //arms
    stroke('#58300D');
    strokeWeight(20);
    line(275, 425, 200, 330);
    line(425, 425, 500, 330);
    //hat brim
    stroke(hatColor);
    strokeWeight(30);
    line(275, 245, 425, 245);
    //hat body
    fill(hatColor);
    quad(300, 245, 300, 175, 400, 175, 400, 245);
}
