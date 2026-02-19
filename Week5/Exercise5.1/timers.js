let blockX = 0;
let blockY = 0;
let blockColorR = 60;
let blockColorG = 225;
let blockColorB = 200;
let drawTimer;
const speed = 10;
const distance = 2;

function setup () {
    createCanvas(500, 500);
    background(0);
    alert('Press numbers and letters on your keyboard to change the color of the moving box.');
}

function drawBlock(x, y, color) {
    noStroke();
    fill(color || 'turquoise');
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    //maps number keys to a number from 1 to 255
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    //changes blockColorR to the mapped number
    blockColorR = keyToNumber;
}

function keyPressed() {
    //using letters pressed to change the color values for G and B in RGB
    //left side of keyboard changes G
    let letterArrayLeft = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
    //converts pressed key into a number
    let letterArrayIndexLeft = Number(letterArrayLeft.indexOf(key));
    //maps the number (converted from the key press) to a number from 0 to 255
    blockColorG = map(letterArrayIndexLeft, 0, 14, 0, 255);
    //right side of keyboard changes B, same process as for left side changing G
    let letterArrayRight = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];
    let letterArrayIndexRight = Number(letterArrayRight.indexOf(key));
    blockColorB = map(letterArrayIndexRight, 0, 10, 0, 255);
}

window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
        if (blockY - 50 <= height) {
            drawBlock(blockX, blockY, [blockColorR, blockColorG, blockColorB]);
            blockY += distance;
        } else {
            //when the block goes past the height of the canvas, resets y to 0 and moves the block to the right
            blockY = 0;
            blockX += 50;
        }
        if (blockY - 50 >= height && blockX + 50 >= width) {
            //cancels the timer so that it doesn't continue to run
            window.clearInterval(drawTimer);
            alert('done');
        }
    }, speed);
}, 1500);