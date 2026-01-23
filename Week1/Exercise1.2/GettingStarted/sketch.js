function setup() {
    createCanvas(windowWidth, windowHeight);
    background("teal");
}

function draw() {
    frameRate(5);
    textSize(80);
    text("🌸", mouseX, mouseY);
}