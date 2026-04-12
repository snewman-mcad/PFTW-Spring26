function setup() {
    createCanvas(600, 600);
}

class Bubble {
    constructor (x, y, diameter) {
        //properties for creating a circle
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.show();
    }
    show () {
        noStroke();
        let number = 200;
        for (this.diameter; this.diameter > 0; this.diameter -= 7) {
            fill(number, 100, 150, number);
            //draws a circle with the x, y, and diameter that are passed to it
            circle(this.x, this.y, this.diameter);
            number = (number -= 25);
        }
    }
}

function makeBubbleDrawing() {
    createCanvas(600, 600);
    for(i = 25; i > 0; i -= 1) {
        //creating random numbers for x, y, and diameter to pass to class Bubble
        let diameter = random(20, 100);
        let x = random(20, width - 20);
        let y = random(20, height - 20);
        new Bubble (x, y, diameter);
    }
    noLoop();
}

function draw() {
    makeBubbleDrawing();
}