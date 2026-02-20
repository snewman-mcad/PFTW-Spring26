let bubble;

function setup () {
    createCanvas(500, 500);
    background(0);
    bubble = new Bubble(100, 200, 100);
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
    bubble.move();
    bubble.show();
}