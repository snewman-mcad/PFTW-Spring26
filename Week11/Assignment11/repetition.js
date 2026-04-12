//first sketch and canvas
function sketch1 (p) {
    p.setup = function() {
        p.createCanvas(600, 600);
        p.background(10, 10, 50);
    };
    class Bubble {
        constructor (x, y, diameter) {
        //properties for creating a circle
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.show();
        }
        show () {
            p.noStroke();
            let number = 200;
            for (this.diameter; this.diameter > 0; this.diameter -= 7) {
                p.fill(number, 100, 150, number);
                //draws a circle with the x, y, and diameter that are passed to it
                p.circle(this.x, this.y, this.diameter);
                number = (number -= 25);
            }
        }
    }
    function makeBubbleDrawing() {
        for(i = 25; i > 0; i -= 1) {
            //creating random numbers for x, y, and diameter to pass to class Bubble
            let diameter = p.random(20, 100);
            let x = p.random(20, 580);
            let y = p.random(20, 580);
            new Bubble (x, y, diameter);
        }
        p.noLoop();
    }
    p.draw = function() {
        makeBubbleDrawing();
    }
}

//sketch 2
function sketch2 (p) {
    p.setup = function() {
        p.createCanvas(600, 600);
        p.background(17, 49, 29);
    };
    class Leaf {
        constructor (x, y) {
        this.x = x;
        this.y = y;
        this.show();
        }
        show () {
            p.noStroke();
            p.fill(167, 201, 87);
            //leaf shape
            p.beginShape();
            p.vertex(this.x + 25, this.y + 25);
            p.bezierVertex(this.x + 70, this.y + 25, this.x + 100, this.y + 25, this.x + 100, this.y + 100);
            p.bezierVertex(this.x + 100, this.y + 100, this.x + 20, this.y + 100, this.x + 25, this.y + 25);
            p.vertex(this.x + 25, this.y + 25);
            p.endShape();
            //stem shape
            p.fill(106, 152, 78);
            p.beginShape();
            p.vertex(this.x + 5, this.y + 15);
            p.bezierVertex(this.x + 60, this.y + 35, this.x + 80, this.y + 35, this.x + 100, this.y + 100);
            p.bezierVertex(this.x + 70, this.y + 40, this.x + 60, this.y + 40, this.x - 5, this.y + 25);
            p.vertex(this.x -5, this.y + 25);
            p.vertex(this.x + 5, this.y + 15);
            p.endShape();
        }
    }
    function makeLeaves() {
        //for(i = 25; i > 0; i -= 1) {
            //let x = p.random(20, 580);
            //let y = p.random(20, 580);
            new Leaf (100, 200);
        //}
        p.noLoop();
    }
    p.draw = function() {
        makeLeaves();
    }
}

new p5(sketch1);
new p5(sketch2);