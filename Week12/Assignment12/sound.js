let myButtons = [];
let allSliders;
let slider0;
let slider1;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;
let slider7;

function preload() {
    soundFormats("wav", "m4a", "mp3");
    //loading in some random instrumental sounds from freesound.org
    let sound0 = loadSound("./Sounds/andymanister__one-thing-cafe-scene-cello.mp3");
    let sound1 = loadSound("./Sounds/lukaszzz123__classical-slow-violin.wav");
    let sound2 = loadSound("./Sounds/chalicewell__harp.mp3");
    let sound3 = loadSound("./Sounds/khoeppel__guitarsample2.m4a");
    let sound4 = loadSound("./Sounds/josefpres__bass-loops-009.wav");
    let sound5 = loadSound("./Sounds/bernardogc__rumba-criolla.wav");
    let sound6 = loadSound("./Sounds/ethang__kerriflute.wav");
    let sound7 = loadSound("./Sounds/josefpres__piano-loops-203.wav");

    myButtons = [
        { x: 70, y: 70, w: 100, h: 70, r: 15, sound: sound0, name: "cello"},
        { x: 220, y: 70, w: 100, h: 70, r: 15, sound: sound1, name: "violin"},
        { x: 370, y: 70, w: 100, h: 70, r: 15, sound: sound2, name: "harp"},
        { x: 520, y: 70, w: 100, h: 70, r: 15, sound: sound3, name: "guitar"},
        { x: 70, y: 230, w: 100, h: 70, r: 15, sound: sound4, name: "bass"},
        { x: 220, y: 230, w: 100, h: 70, r: 15, sound: sound5, name: "drum"},
        { x: 370, y: 230, w: 100, h: 70, r: 15, sound: sound6, name: "flute"},
        { x: 520, y: 230, w: 100, h: 70, r: 15, sound: sound7, name: "piano"}
    ];

    allSliders = [
        { x: 80, y: 330, sound: sound0},
        { x: 230, y: 330, sound: sound1},
        { x: 380, y: 330, sound: sound2},
        { x: 530, y: 330, sound: sound3},
        { x: 80, y: 490, sound: sound4},
        { x: 230, y: 490, sound: sound5},
        { x: 380, y: 490, sound: sound6},
        { x: 530, y: 490, sound: sound7}
    ]
}

function setup() {
    createCanvas(700, 450);
    //deep space blue color
    background(0, 48, 69);

    //creating all of the sliders for volume control
    slider0 = createSlider(0, 1, 0.5, 0.05);
    slider0.position(allSliders[0].x, allSliders[0].y);
    slider0.size(90);
    //adding class of slider to each slider
    //this will make it easier to style the slider with css
    slider0.class("slider");

    slider1 = createSlider(0, 1, 0.5, 0.05);
    slider1.position(allSliders[1].x, allSliders[1].y);
    slider1.size(90);
    slider1.class("slider");

    slider2 = createSlider(0, 1, 0.5, 0.05);
    slider2.position(allSliders[2].x, allSliders[2].y);
    slider2.size(90);
    slider2.class("slider");

    slider3 = createSlider(0, 1, 0.5, 0.05);
    slider3.position(allSliders[3].x, allSliders[3].y);
    slider3.size(90);
    slider3.class("slider");

    slider4 = createSlider(0, 1, 0.5, 0.05);
    slider4.position(allSliders[4].x, allSliders[4].y);
    slider4.size(90);
    slider4.class("slider");

    slider5 = createSlider(0, 1, 0.5, 0.05);
    slider5.position(allSliders[5].x, allSliders[5].y);
    slider5.size(90);
    slider5.class("slider");

    slider6 = createSlider(0, 1, 0.5, 0.05);
    slider6.position(allSliders[6].x, allSliders[6].y);
    slider6.size(90);
    slider6.class("slider");

    slider7 = createSlider(0, 1, 0.5, 0.05);
    slider7.position(allSliders[7].x, allSliders[7].y);
    slider7.size(90);
    slider7.class("slider");
}


function draw() {
    for(let btn of myButtons) {
        let hover = mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h;
        if (hover) {
            //turquoise color
            fill(0, 236, 221);
            strokeWeight(2);
            stroke(0, 21, 36);
        } else {
            //lemon lime color
            fill(194, 232, 18);
            strokeWeight(2);
            stroke(0, 21, 36);
        }
        //creating rectangle for each button
        rect(btn.x, btn.y, btn.w, btn.h, btn.r);
        noStroke();
        fill(0);
        textSize(18);
        textAlign(CENTER, CENTER);
        text(btn.name, btn.x + btn.w / 2, btn.y + btn.h / 2);
    }
    //telling each slider which sound volume it will control
    allSliders[0].sound.setVolume(slider0.value());
    allSliders[1].sound.setVolume(slider1.value());
    allSliders[2].sound.setVolume(slider2.value());
    allSliders[3].sound.setVolume(slider3.value());
    allSliders[4].sound.setVolume(slider4.value());
    allSliders[5].sound.setVolume(slider5.value());
    allSliders[6].sound.setVolume(slider6.value());
    allSliders[7].sound.setVolume(slider7.value());

    //creating the play all button
    let hoverOverPlay = mouseX > 225 && mouseX < 275 && mouseY > 380 && mouseY < 420;
    if(hoverOverPlay) {
        //play button on hover
        //bright fern color
        fill(6, 183, 0);
        strokeWeight(2);
        stroke(255);
        rect(225, 380, 50, 50, 10);
        noStroke();
        fill(0);
        //play arrow
        beginShape();
        vertex(240, 390);
        vertex(265, 405);
        vertex(240, 420);
        endShape(close);
    } else {
        //play button
        //green color
        fill(4, 113, 0);
        strokeWeight(2);
        stroke(255);
        rect(225, 380, 50, 50, 10);
        noStroke();
        fill(255);
        //play arrow
        beginShape();
        vertex(240, 390);
        vertex(265, 405);
        vertex(240, 420);
        endShape(close);
    }
    fill(255);
    noStroke();
    text("Play All:", 180, 405);

    //creating the stop button
    let hoverOverStop = mouseX > 530 && mouseX < 580 && mouseY > 380 && mouseY < 420;
    if (hoverOverStop) {
        //stop button on hover
        //raspberry color
        fill(221, 45, 74);
        strokeWeight(2);
        stroke(255);
        rect(530, 380, 50, 50, 10);
        noStroke();
        fill(0);
        rect(545, 395, 20, 20);
    } else {
        //stop button
        //crushed berry color
        fill(136, 13, 30);
        strokeWeight(2);
        stroke(255);
        rect(530, 380, 50, 50, 10);
        noStroke();
        fill(255);
        rect(545, 395, 20, 20);
    }
    fill(255);
    noStroke();
    text("Stop:", 500, 405);
}

function mousePressed () {
    for (let btn of myButtons) {
        //determining which button is clicked so that different sounds will play for each button
        if(mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h) {
            console.log('the button has been clicked', btn);
            btn.sound.play();
        }
        if(mouseX > 530 && mouseX < 580 && mouseY > 380 && mouseY < 420) {
            //if the stop button is clicked on, all music stops
            btn.sound.stop();
        }
        if(mouseX > 225 && mouseX < 275 && mouseY > 380 && mouseY < 420) {
            //plays all sound files if clicked since it is not linked to one of the buttons in the myButtons array
            btn.sound.play();
        }
    }
}