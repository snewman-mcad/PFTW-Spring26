let rectX = 0;
const rectWidth = 75;
let rectY;
const rectHeight = 75;
let clickCount = 0;
let speed;

function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectWidth);
    speed = random(1, 5);
}

function draw () {
    background(0);
    drawShape();
    rectX+=speed;
    if(rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape () {
    fill('turquoise');
    rect(rectX, rectY, rectWidth, rectHeight);
}