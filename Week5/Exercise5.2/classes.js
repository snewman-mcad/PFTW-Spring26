//array of objects to create individual circles
let manyBubbles = [
    {
        x: 50,
        y: 100,
        diameter: 100
    }, {
        x: 100,
        y: 50,
        diameter: 70
    }, {
        x: 200,
        y: 300,
        diameter: 70
    }, {
        x: 300,
        y: 150,
        diameter: 50
    }, {
        x: 300,
        y: 200,
        diameter: 125
    }
]

function setup () {
    createCanvas(500, 500);
    background(0);
}

class Bubble {
    constructor (x, y, diameter) {
        //properties for creating a circle
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }
    move () {
        //changes the x and y values to move the circle
        this.x = this.x + random(-8, 8);
        this.y = this.y + random(-8, 8);
    }
    show () {
        stroke('turquoise');
        strokeWeight(2);
        //transparent blue color
        fill(50, 60, 170, 70);
        //draws a circle with the x, y, and diameter that are passed to it
        circle(this.x, this.y, this.diameter);
    }
}

function draw () {
    background(0);
    frameRate(8)
    for(i = 0; i < manyBubbles.length; i++) {
        //creates a new circle/bubble from the properties passed to it from the objects in the array
        manyBubbles[i] = new Bubble(manyBubbles[i].x, manyBubbles[i].y, manyBubbles[i].diameter);
        //calls move for each bubble/circle
        manyBubbles[i].move();
        //calls show for each circle/bubble
        manyBubbles[i].show();
    }
}