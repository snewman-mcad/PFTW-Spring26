let position;
let increase;

function setup(){
    createCanvas(600, 600);
    angleMode(DEGREES);
    position = 0.0;
    increase = 3.0;
}
function pendulum() {
    clear();
    let mySinVal = sin(position);
    let ampSin = mySinVal * 200;
    //using math.abs to use absolute/positive values
    //negative values will cause the circle to move all of the way through the cosine curve
    let myCosVal = Math.abs(cos(position));
    let ampCos = myCosVal * 70;
    strokeWeight(5);
    stroke(255, 183, 3);
    line(width/2, 0, ampSin + 300, height/2 + ampCos);
    fill(255, 183, 3);
    ellipse(ampSin + 300, height/2 + ampCos - 10, 100, 100);
    position = position + increase;
}
function draw() {

    pendulum();
}