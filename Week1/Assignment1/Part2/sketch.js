let hatColor = prompt("What color should the hat be? Type in lowercase color name.", 'black');
let numberOfSnowFlakes = prompt('How many snowflakes should there be? Give me a number greater than 0.');

function setup() {
    createCanvas(1000, 800);
    background('#3c8cce');
    //snowflake generator
    strokeWeight(5);
    stroke('white');
    for (let i = 0; i < numberOfSnowFlakes; i++) {
        let x = random(width);
        let y = random(height);
        point(x, y);
    }
}

function draw() {
    //background(grid);
    fill('#E9ECF5');
    //ground snow
    noStroke();
    quad(0, 800, 0, 500, 1000, 500, 1000, 800);

    //right tree
    //tree trunk
    fill('#58300D');
    beginShape();
        vertex(800, 550);
        vertex(810, 275);
        vertex(840, 275);
        vertex(850, 550);
    endShape(CLOSE);
    //tree needles
    fill('#095e37');
    beginShape();
        vertex(725, 425);
        vertex(775, 365);
        //next up from bottom left point
        vertex(740, 365);
        vertex(785, 310);
        //2nd up from bottom left point
        vertex(755, 310);
        vertex(805, 240);
        //next down from top left point
        vertex(785, 240);
        //top middle point
        vertex(825, 150);
        //next down from top right point
        vertex(865, 240);
        vertex(845, 240);
        //2nd up from bottom right point
        vertex(895, 310);
        vertex(865, 310);
        //next up from bottom right point
        vertex(910, 365);
        vertex(875, 365);
        vertex(925, 425);
    endShape(CLOSE);

    //middle tree
    //tree trunk
    fill('#58300D');
    beginShape();
        vertex(500, 550);
        vertex(510, 275);
        vertex(540, 275);
        vertex(550, 550);
    endShape(CLOSE);
    //tree needles
    fill('#095e37');
    beginShape();
        vertex(425, 425);
        vertex(475, 365);
        //next up from bottom left point
        vertex(440, 365);
        vertex(485, 310);
        //2nd up from bottom left point
        vertex(455, 310);
        vertex(505, 240);
        //next down from top left point
        vertex(485, 240);
        //top middle point
        vertex(525, 150);
        //next down from top right point
        vertex(565, 240);
        vertex(545, 240);
        //2nd up from bottom right point
        vertex(595, 310);
        vertex(565, 310);
        //next up from bottom right point
        vertex(610, 365);
        vertex(575, 365);
        vertex(625, 425);
    endShape(CLOSE);

    //left tree
    //tree trunk
    fill('#58300D');
    beginShape();
        vertex(200, 550);
        vertex(210, 275);
        vertex(240, 275);
        vertex(250, 550);
    endShape(CLOSE);
    //tree needles
    fill('#095e37');
    beginShape();
        vertex(125, 425);
        vertex(175, 365);
        //next up from bottom left point
        vertex(140, 365);
        vertex(185, 310);
        //2nd up from bottom left point
        vertex(155, 310);
        vertex(205, 240);
        //next down from top left point
        vertex(185, 240);
        //top middle point
        vertex(225, 150);
        //next down from top right point
        vertex(265, 240);
        vertex(245, 240);
        //2nd up from bottom right point
        vertex(295, 310);
        vertex(265, 310);
        //next up from bottom right point
        vertex(310, 365);
        vertex(275, 365);
        vertex(325, 425);
    endShape(CLOSE);

    //snowman character
    fill('#E9ECF5');
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
    //stroke('teal');
    strokeWeight(30);
    line(275, 245, 425, 245);
    //hat body
    fill(hatColor);
    //fill('teal');
    quad(300, 245, 300, 175, 400, 175, 400, 245);

    //snowflake generator
    strokeWeight(5);
    stroke('white');
    for (let i = 0; i < numberOfSnowFlakes; i++) {
        let x = random(width);
        let y = random(height);
        point(x, y);
        noLoop();
    }
}
