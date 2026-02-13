let rectX = 0;
const rectWidth = 75;
let rectY;
const rectHeight = 75;
let clickCount = 0;
let speed;
let rectColor = 'turquoise';
//starting color
let randomColor = ['turquoise', 'lime', 'purple', 'gold', 'magenta', 'tomato'];
//array of colors to change the square fill

function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    //start point is from the square's height and the canvas
    speed = random(1, 5);
    //number from 1 to 5 generated for the speed
}

function draw () {
    background(0);
    drawShape();
    textSize(24);
    fill('white');
    text('Click the square as many times as you can!', 20, 450);
    rectX+=speed;
    //square moves across the screen based on the speed increment
    if(rectX > width) {
        noLoop();
        fill('white');
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
    if(rectColor) {
        let newColor = random(randomColor);
        //generates a new color from the randomColor array
        rectColor = newColor;
        //assigns the new color to the square
    }
}

function drawShape () {
    fill(rectColor);
    rect(rectX, rectY, rectWidth, rectHeight);
}