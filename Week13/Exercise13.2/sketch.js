let position;
let increase;

function setup(){
    createCanvas(600, 600);
    angleMode(DEGREES);
    position = 0.0;
    increase = 4.0;
}
function pendulum() {
    let mySinVal = sin(position);
    let ampSin = mySinVal * 140;
    //using math.abs to use absolute/positive values
    //negative values will cause the circle to move all of the way through the cosine curve
    let myCosVal = Math.abs(cos(position));
    let ampCos = myCosVal * 60;
    strokeWeight(5);
    stroke(255, 183, 3);
    line(width/2, 200, ampSin + 300, height/2 + ampCos + 100);
    fill(255, 183, 3);
    ellipse(ampSin + 300, height/2 + ampCos + 100, 50, 50);
    position = position + increase;
}
function clockBack() {
    noStroke();
    fill(33, 160, 160);
    rect(0, 550, width, 50);
    fill(99, 60, 40);
    beginShape();
    vertex(width/2, 50);
    vertex(500, 200);
    vertex(500, 570);
    vertex(100, 570);
    vertex(100, 200);
    endShape(CLOSE);
    fill(35, 31, 32);
    rect(120, 220, 360, 320);
}
function clockFront() {
    stroke(99, 60, 40);
    strokeWeight(30);
    line(100, 210, 500, 210);
    line(100, 540, 500, 540);
    stroke(163, 88, 47);
    strokeWeight(10);
    line(90, 200, 510, 200);
    line(90, 530, 510, 530);
    //clock base at the top
    stroke(255, 183, 3);
    strokeWeight(3);
    fill(255, 232, 173);
    circle(300, 140, 80);
    noStroke();
    fill(35, 31, 32);
    circle(300, 140, 10);
}
function glass() {
    strokeWeight(5);
    stroke(255, 183, 3)
    line(280, 380, 280, 420);
    line(520, 380, 520, 420);
    //left pane
    noStroke();
    fill(145, 200, 200, 50);
    rect(120, 225, 180, 300);
    //right pane
    beginShape();
    vertex(480, 225);
    vertex(480, 525);
    vertex(530, 550);
    vertex(530, 200);
    endShape(CLOSE);
}
function clockHands() {
    //creating a functioning clock that will keep the time
    //using the built in functions to get second, minute, and hour
    let hr = hour();
    let mn = minute();
    let sc = second();
    //translating center to clock center
    translate(300, 140);
    rotate(-90);
    
    //second hand
    noFill();
    stroke(229, 61, 0);
    strokeWeight(2);
    //mapping the angle needed to keep track of the second hand
    let secondAngle = map(sc, 0, 60, 0, 360);
    //worked through the angles by drawing arcs first (keeping them in for reference)
    //arc(0, 0, 60, 60, 0, secondAngle);
    push();
    //rotating by the angle created by the map
    rotate(secondAngle);
    line(0, 0, 35, 0);
    pop();

    //minute hand
    stroke(35, 31, 32);
    strokeWeight(5);
    let minuteAngle = map(mn, 0, 60, 0, 360);
    //arc(0, 0, 60, 60, 0, minuteAngle);
    push();
    rotate(minuteAngle);
    line(0, 0, 30, 0);
    pop();

    //hour hand
    stroke(35, 31, 32);
    strokeWeight(7);
    //reseting the clock every twelve hours with the modulus %
    let hourAngle = map(hr % 12, 0, 12, 0, 360);
    //arc(0, 0, 45, 45, 0, hourAngle);
    push();
    rotate(hourAngle);
    line(0, 0, 20, 0);
    pop();
}
function draw() {
    clockBack();
    pendulum();
    clockFront();
    glass();
    clockHands();
}