function setup () {
    createCanvas(600, 600);
    colorMode(RGB, 255);
    background(20, 40, 80);
}

function drawHexagon(centerX, centerY, radius) {
    beginShape();
    // starting fill of the top shapes
    fill(98, 255, 0);
    strokeWeight(2);
    // creating loop to create the hexagon shape
    // TAU is used because it is a full rotation
    for(let a=0; a < TAU; a+=TAU/6){
        // calculation the coordinates of the points/vertices of the hexagon
        let x = centerX + radius * cos(a);
        let y = centerY + radius * sin(a);
        vertex(x, y);
        // creating a gradient effect based on the position of the shape's x an y coordinate
        fill(y/2, 230, x/2);
    }
    endShape()
}

function makeGrid(radius) {
    let count = 0;
    // looping to make a grid of hexagons
    for(y = 0; y < height+radius; y += radius*1.7){
        for(x = 0; x < width+radius; x += radius*2){
            // evaluation of the count is parsed as an integer rather than true/false because of the parenthesis/arithmetic operators
            // this offsets every other row
            drawHexagon(x+radius*(count%2===0), y, radius);
            let number = random(0, 50);
            // rotating the coordinate system by the randomly generated number
            rotate(number);
        }
        count++;
    }
    // ending loop so that hexagons aren't continually created, there should be plenty with calling the function
    noLoop();
}

function draw() {
    // drawing three sizes of hexagons so that there is some variety
    makeGrid(30);
    makeGrid(40);
    makeGrid(20);
}
