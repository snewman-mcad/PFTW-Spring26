function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('teal');
    noStroke();
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('yellow');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('orange');
    strokeWeight(7);
    circle(100, 100, 100);
    circle(100, 100, 180);
}
function draw() {
    createTile();
}