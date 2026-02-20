let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let manyBubbles = [bubble1, bubble2, bubble3, bubble4, bubble5];

function setup () {
    createCanvas(500, 500);
    background(0);
    //bubble = new Bubble(100, 200, 100);
}

class Bubble {
    constructor (x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }
    move () {
        this.x = this.x + random(-8, 8);
        this.y = this.y + random(-8, 8);
    }
    show () {
        stroke('turquoise');
        strokeWeight(2);
        noFill();
        circle(this.x, this.y, this.diameter);
    }
}

function draw () {
    background(0);
    frameRate(3)
    for(i = 0; i < manyBubbles.length; i++) {
        let randomX = random(50, 350);
        let randomY = random(70, 400);
        let randomDiameter = random(50, 100);
        manyBubbles[i] = new Bubble(randomX, randomY, randomDiameter);
        manyBubbles[i].move();
        manyBubbles[i].show();
    }
}