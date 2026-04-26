let fireflies = [];
let population = 5;
let grass;
let rotateBy;
let length;

function setup(){
    createCanvas(600, 600);
    for(let i = 0; i < population; i++) {
        fireflies.push(new Firefly());
    }
    grass = new Yard();
}

function draw() {
    background(0, 5, 15);
    for(let i = 0; i < fireflies.length; i++) {
        fireflies[i].update();
    }
    grass.update();
}

class Firefly {
    constructor (x, y) {
        this.x = 0;
        this.y = 0;

        //relational offsets
        this.xoff = random(0, 100);
        this.yoff = random(0, 100);

        //flashing speed
        this.wave = random(0, 5);
        this.rate = random(0.05, 0.1)

        //variables for moving the firefly body
        this.rollOff = random(0, 10);
        this.turnOff = random(0, 25);

        //fireflies will rise from the grass
        this.rise = 0;

        this.update();
    }
    update() {
        this.xoff += 0.0025;
        this.yoff += 0.0025;

        let w = width * 0.25;
        let h = height * 0.25;

        this.rise += 0.001;

        //using noise to return random numbers that feel more organic
        //mapping what is returned to the values of w and h to become equal to this.x/y
        this.x = map(noise(this.xoff), 0, 1, -w, width + w);
        this.y = map(noise(this.yoff), 0, 1, -h, height + h);

        this.wave += this.rate;
        //creating the glow that will change/pulse
        //flash has full color
        let flash = abs(sin(this.wave)*255);
        let transparency = map(flash, 0, 255, 50, 155);
        //yellow color that will change
        //this halo effect will have a fraction of flash(full color)
        stroke(flash * 0.5, flash * 0.5-10, 0, transparency);

        //encapsulating the transformations of the firefly
        push();
        //position of object is now origin
        translate(this.x, this.y);
        //body and wing rotation
        //this makes it look like the 'body' turned and so did the direction/angle of the wings
        this.turnOff += 0.1;
        let turnWing = map(noise(this.turnOff), 0, 1, -PI * 0.5, PI * 0.5);
        rotate(turnWing);

        //wing beating
        this.rollOff += 1;
        //want wings to beat out to the side
        let wingBeating = map(sin(this.rollOff), -1, 1, -PI * 0.25, PI * 0.25);
        strokeWeight(2);
        let wingLength = 8;
        //isolating transformations for the wings
        //left wing
        push();
        stroke(255, 200, 0, 100);
        rotate(wingBeating);
        line(0, 0, -wingLength, 0);
        pop();
        //right wing
        push();
        stroke(255, 200, 0, 100);
        rotate(-wingBeating);
        line(0, 0, wingLength, 0);
        pop();

        //creating the flashing halo
        let flashSize = map(flash, 0, 255, 10, 30);
        strokeWeight(flashSize);
        //lightning bug/firefly
        point(0, 0);
        strokeWeight(flashSize * 0.25);
        stroke(255, 240, 0);

        pop();
    }
}

class Yard {
    constructor() {
        this.grass = [];
        //rotational value offset to use for rotating segments
        this.rotation = [];
        //size of the segment
        this.size = [];
        //for length of the grass to vary
        this.segment = [];
        //keep track of the elements in the array
        this.index = 0;
        this.population = 130;
        for(let x = 0; x < width; x += width/this.population) {
            this.index += 1;
            this.grass.push(x);
            //rotational offset slightly different for each blade of grass
            this.rotation.push((this.index * 0.055) + 0.015);
            //min max size of the blade of grass
            this.size.push(random(35, 55));
            //how much the segments are decremented as it goes from one segment in the grass blade to the next
            this.segment.push(0.7);
        }
        this.update();
    }
    update() {
        for(let k = 0; k < this.index; k++) {
            let length = this.size[k];

            //encapsulating translations and rotations of the blades of grass
            push();
            translate(this.grass[k], height);
            this.blade(length, k);
            pop();
        }
    }
    blade(length, index) {
        //checking to see if the index is an even number
        if(index % 2 === 0) {
            //even number rotation and styles
            this.rotation[index] += 0.0025;
            stroke(10, 140 - (length * 2.5), 100 - length * 1.5);
            rotateBy = map(noise(this.rotation[index]), 0, 1, -QUARTER_PI * 0.75, QUARTER_PI * 0.75);
        } else {
            //odd number rotation and styles
            this.rotation[index] += 0.0025;
            stroke(10, 140 - (length * 2.5), 100 - length * 1.5);
            rotateBy = map(-sin(this.rotation[index]), -1, 1, -QUARTER_PI * 0.25, QUARTER_PI * 0.25);
        }
        //stroke weight changing based on length of segment so that shorter segments at top of blade get thinner
        strokeWeight(length * 2 * random(0.07, 0.1));
        rotate(rotateBy);
        //drawing line from where rotation was started to the end of the length
        //negative length because we want the grass blade to 'grow' upward
        line(0, 0, 0, -length);
        translate(0, -length);
        if(length > 20) {
            this.blade(length * this.segment[index], index)
        }
    }
}

function mousePressed() {
    fireflies.push(new Firefly());
}