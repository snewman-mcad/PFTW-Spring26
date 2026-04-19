let myButtons = [];
let allSliders;

function preload() {
    soundFormats("wav", "m4a");
    //loading in some random instrumental sounds from freesound.org
    let sound1 = loadSound("./Sounds/thirsk__128-cello-loop-2.wav");
    let sound2 = loadSound("./Sounds/deleted_user_5205523__junk-drum-kit-loop-3.wav");
    let sound3 = loadSound("./Sounds/chrisbutler99__tropical-loop-1.wav");
    let sound4 = loadSound("./Sounds/violinsimma__violin-carnatic-phrase-am.wav");
    let sound5 = loadSound("./Sounds/animastudios__steel-drum-105bpm-gm.wav");
    let sound6 = loadSound("./Sounds/thesoundlibrary__drum-loop-2.wav");
    let sound7 = loadSound("./Sounds/overfieldsofwheat__uplifting-acoustic-guitar.wav");
    let sound8 = loadSound("./Sounds/eee3333e__guitar-and-piano-loop.m4a");

    myButtons = [
        { x: 70, y: 70, w: 100, h: 70, r: 15, sound: sound1, name: "cello"},
        { x: 220, y: 70, w: 100, h: 70, r: 15, sound: sound2, name: "drum"},
        { x: 370, y: 70, w: 100, h: 70, r: 15, sound: sound3, name: "trop"},
        { x: 520, y: 70, w: 100, h: 70, r: 15, sound: sound4, name: "violin"},
        { x: 70, y: 190, w: 100, h: 70, r: 15, sound: sound5, name: "steel"},
        { x: 220, y: 190, w: 100, h: 70, r: 15, sound: sound6, name: "drum"},
        { x: 370, y: 190, w: 100, h: 70, r: 15, sound: sound7, name: "guitar"},
        { x: 520, y: 190, w: 100, h: 70, r: 15, sound: sound8, name: "piano"}
    ];

    allSliders = [
        { x: 120, y: 170, sound: sound1},
        { x: 270, y: 170, sound: sound2},
        { x: 240, y: 170, sound: sound3},
        { x: 570, y: 170, sound: sound4},
        { x: 120, y: 290, sound: sound5},
        { x: 270, y: 290, sound: sound6},
        { x: 420, y: 290, sound: sound7},
        { x: 570, y: 290, sound: sound8}
    ]
}

function setup() {
    createCanvas(700, 330);
    //charcoal blue color
    background(62, 80, 91);

    slider = createSlider(0, 1, 0.5, 0.05);
    slider.position(allSliders[0].x, allSliders[0].y);
    slider.size(90);
}


function draw() {
    for(let btn of myButtons) {
        let hover = mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h;
        if (hover) {
            //soft apricot color
            fill(255, 219, 181);
        } else {
            //sage green color
            fill(112, 174, 110);
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
    allSliders[0].sound.setVolume(slider.value());
}

function mousePressed () {
    for (let btn of myButtons) {
        //determining which button is clicked so that different sounds will play for each button
        if(mouseX > btn.x && mouseX < btn.x + btn.w && mouseY > btn.y && mouseY < btn.y + btn.h) {
            console.log('the button has been clicked', btn);
            btn.sound.play();
        } //else {
            //btn.sound.stop();
        //}
    }
}