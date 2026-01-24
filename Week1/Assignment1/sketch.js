function setup() {
    createCanvas(1000, 800);
    background('#A3C3D9');
}

function draw() {
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
    //hat brim
    stroke('#1a1a1a');
    strokeWeight(30);
    line(275, 245, 425, 245);
    //hat body
    fill('#1a1a1a');
    quad(300, 245, 300, 175, 400, 175, 400, 245);
    //eyes
    point(300, 295);
    point(400, 295);
    //mouth
    strokeWeight(15);
    point(350, 355);
    point(373, 350);
    point(390, 335);
    point(327, 350);
    point(310, 335);
}
