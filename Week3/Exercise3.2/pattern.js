function setup() {
    createCanvas(600, 600);
}

//creating color variables
const evergreen = [19, 42, 19];
const hunterGreen = [49, 87, 44];
const saffron = [244, 140, 6];
const amberFlame = [255, 186, 8];
const gold = [255, 215, 7];
const oxblood = [157, 2, 8];
const nightBordeaux = [55, 6, 23];
const cherryBlossom = [255, 179, 193];
const cottonCandy = [255, 128, 151];
const bubblegum = [255, 77, 109];

function createTile(originX, originY, backPetals, middlePetals, innerPetals) {
    translate(originX, originY);
    fill('teal');
    noStroke();
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(25);
    line(100, 0, 200, 100);
    line(100, 200, 200, 100);
    line(0, 100, 100, 0);
    line(0, 100, 100, 200);

    //making some leaves
    fill(evergreen);
    noStroke();
    //upper left leaf
    beginShape();
    //first anchor point
    vertex(40, 45);
    //add bezier vertices
    bezierVertex(80, 50, 100, 30, 100, 100);
    bezierVertex(80, 120, 50, 100, 40, 45);
    //stop drawing shape
    endShape();

    //upper right dark leaf
    beginShape();
    vertex(185, 70);
    bezierVertex(120, 50, 120, 80, 100, 100);
    bezierVertex(180, 120, 150, 100, 185, 70);
    endShape();

    //lower left leaf
    beginShape();
    vertex(70, 185);
    bezierVertex(100, 120, 100, 140, 100, 100);
    bezierVertex(50, 100, 40, 140, 70, 185);
    endShape();

    fill(hunterGreen);
    //upper right lighter leaf
    beginShape();
    vertex(160, 50);
    bezierVertex(120, 50, 120, 80, 100, 100);
    bezierVertex(160, 100, 150, 100, 160, 50);
    endShape();

    //making a flower in the center of the square using circles
    noStroke();
    fill(backPetals);
    //upper left circle/petal
    circle(80, 80, 50);
    //upper right circle/petal
    circle(120, 80, 50);
    //lower right circle/petal
    circle(120, 120, 50);
    //lower left circle/petal
    circle(80, 120, 50);
    fill(middlePetals);
    //top circle/petal
    circle(100, 70, 50);
    //left circle/petal
    circle(70, 100, 50);
    //right circle/petal
    circle(130, 100, 50);
    //bottom circle/petal
    circle(100, 130, 50);
    fill(innerPetals);
    //upper left inner petal
    circle(90, 90, 45);
    //upper right inner petal
    circle(110, 90, 45);
    //lower right inner petal
    circle(110, 110, 45);
    //lower left inner petal
    circle(90, 110, 45);
    //center of flower
    fill(oxblood);
    circle(100, 100, 35);

    //adding some stamens
    noFill();
    stroke(nightBordeaux);
    strokeWeight(5);
    //using points for stamens within the oxblood circle
    point(95, 95);
    point(90, 100);
    point(92, 90);
    point(100, 92);
    point(100, 100);
    point(97, 111);
    point(92, 108);
    point(95, 102);
    point(101, 105);
    point(105, 97);
    point(107, 90);
    point(110, 100);
    point(106, 108);
}

function draw() {
    createTile(0, 0, saffron, amberFlame, gold);
    createTile(0, 200, bubblegum, cottonCandy, cherryBlossom);
    createTile(0, 200, saffron, amberFlame, gold);
    createTile(200, -400, bubblegum, cottonCandy, cherryBlossom);
    createTile(0, 200, saffron, amberFlame, gold);
    createTile(0, 200, bubblegum, cottonCandy, cherryBlossom);
    createTile(200, -400, saffron, amberFlame, gold);
    createTile(0, 200, bubblegum, cottonCandy, cherryBlossom);
    createTile(0, 200, saffron, amberFlame, gold);
    noLoop();
}