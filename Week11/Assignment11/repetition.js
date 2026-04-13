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

//second sketch
function sketch2 (p) {
    p.setup = function() {
        p.createCanvas(600, 600);
        p.background(15, 36, 18);
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
        for(i = 0; i < 50; i += 1) {
            //choosing random x and y coordinates
            let x = p.random(20, 580);
            let y = p.random(20, 580);
            new Leaf (x, y);
            //rotating the coordinate system
            p.rotate(20);
            //using push and pop so that the translations don't accumulate
            p.push();
            p.translate(x/20, x/20);
            p.pop();
        }
        p.noLoop();
    }
    //copied the code for the leaves above to create a darker version
    class DarkLeaf {
        constructor (x, y) {
        this.x = x;
        this.y = y;
        this.show();
        }
        show () {
            p.noStroke();
            p.fill(56, 102, 65);
            //leaf shape
            p.beginShape();
            p.vertex(this.x + 25, this.y + 25);
            p.bezierVertex(this.x + 70, this.y + 25, this.x + 100, this.y + 25, this.x + 100, this.y + 100);
            p.bezierVertex(this.x + 100, this.y + 100, this.x + 20, this.y + 100, this.x + 25, this.y + 25);
            p.vertex(this.x + 25, this.y + 25);
            p.endShape();
            //stem shape
            p.fill(37, 81, 47);
            p.beginShape();
            p.vertex(this.x + 5, this.y + 15);
            p.bezierVertex(this.x + 60, this.y + 35, this.x + 80, this.y + 35, this.x + 100, this.y + 100);
            p.bezierVertex(this.x + 70, this.y + 40, this.x + 60, this.y + 40, this.x - 5, this.y + 25);
            p.vertex(this.x -5, this.y + 25);
            p.vertex(this.x + 5, this.y + 15);
            p.endShape();
        }
    }
    function makeDarkLeaves() {
        for(i = 0; i < 50; i += 1) {
            let x = p.random(20, 580);
            let y = p.random(20, 580);
            new DarkLeaf (x, y);
            p.rotate(20);
            p.push();
            p.translate(x/20, x/20);
            p.pop();
        }
        p.noLoop();
    }
    p.draw = function() {
        makeDarkLeaves();
        makeLeaves();
    }
}

//third sketch
function sketch3 (p) {
    p.setup = function() {
        p.createCanvas(600, 600);
        p.background(171, 16, 55);
    };
    class PetalMedium {
        constructor (x, y) {
            this.x = x;
            this.y = y;
            this.show();
        }
        show() {
            p.noStroke();
            p.fill(255, 143, 171);
            p.beginShape();
            p.vertex(this.x, this.y);
            p.bezierVertex(this.x + 30, this.y + 30, this.x + 30, this.y + 50, this.x + 10, this.y + 100);
            p.vertex(this.x, this.y + 85);
            p.vertex(this.x - 10, this.y + 100);
            p.bezierVertex(this.x -30, this.y + 50, this.x -30, this.y + 30, this.x, this.y);
            p.vertex(this.x, this.y);
            p.endShape();
        }
    }
    function makeFlowers () {
        for(k = 50; k > 0; k -= 1) {
            let x = p.random(20, 580);
            let y = p.random(20, 580);
            new PetalMedium (x, y);
            p.rotate(20);
            p.push();
            p.translate(x/20, x/20);
            p.pop();
        }
        p.noLoop();
    }
        class PetalLight {
        constructor (x, y) {
            this.x = x;
            this.y = y;
            this.show();
        }
        show() {
            p.noStroke();
            p.fill(255, 194, 209);
            p.beginShape();
            p.vertex(this.x, this.y);
            p.bezierVertex(this.x + 30, this.y + 30, this.x + 30, this.y + 50, this.x + 10, this.y + 100);
            p.vertex(this.x, this.y + 85);
            p.vertex(this.x - 10, this.y + 100);
            p.bezierVertex(this.x -30, this.y + 50, this.x -30, this.y + 30, this.x, this.y);
            p.vertex(this.x, this.y);
            p.endShape();
        }
    }
    function makeFlowersLight () {
        for(k = 50; k > 0; k -= 1) {
            let x = p.random(20, 580);
            let y = p.random(20, 580);
            new PetalLight (x, y);
            p.rotate(20);
            p.push();
            p.translate(x/20, x/20);
            p.pop();
        }
        p.noLoop();
    }

    p.draw = function() {
        makeFlowers();
        makeFlowersLight();
    }
}

new p5(sketch1);
new p5(sketch2);
new p5(sketch3);