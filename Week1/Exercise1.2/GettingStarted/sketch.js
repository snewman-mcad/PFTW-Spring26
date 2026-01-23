function setup() {
    createCanvas(windowWidth, windowHeight);
    background("teal");
}

function draw() {
    //array of flowers
    let flowers = (['🌸', '💮', '🪷']);
    //choose a random flower from the above array
    let choice = random(flowers);
    frameRate(5);
    textSize(80);
    text(choice, mouseX, mouseY);
}