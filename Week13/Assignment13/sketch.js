let fireflies = [];
let population = 5;

function setup(){
    createCanvas(600, 600);
    for(let i = 0; i < population; i++) {
        fireflies.push(new Firefly());
    }
}

function draw() {
    background(0, 5, 15);
    for(let i = 0; i < fireflies.length; i++) {
        fireflies[i].update();
    }
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