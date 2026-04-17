let startX = 70;
let startY = 70;
let myButtons = [];

function preload() {
    //loading in some random instrumental sounds from freesound.org
    allSounds = [
        sound1 = loadSound("./Sounds/thirsk__128-cello-loop-2.wav"),
        sound2 = loadSound("./Sounds/deleted_user_5205523__junk-drum-kit-loop-3.wav"),
        sound3 = loadSound("./Sounds/chrisbutler99__tropical-loop-1.wav"),
        sound4 = loadSound("./Sounds/violinsimma__violin-carnatic-phrase-am.wav"),
        sound5 = loadSound("./Sounds/animastudios__steel-drum-105bpm-gm.wav"),
        sound6 = loadSound("./Sounds/thesoundlibrary__drum-loop-2.wav"),
        sound7 = loadSound("./Sounds/overfieldsofwheat__uplifting-acoustic-guitar.wav"),
        sound8 = loadSound("./Sounds/eee3333e__guitar-and-piano-loop.m4a")
    ]
}

function setup() {
    createCanvas(700, 350);
    background(21, 97, 109);
    for(let i = 0; i < allSounds.length; i++) {
        for(let y = 0; y < 2; y ++) {
            for(let x = 0; x < 4; x ++) {
                createRect();
                //adding buttons to the array myButtons
                //buttons have a starting x and y, an id, and a sound determined by the length of allSounds
                myButtons.push({x: startX, y: startY, id: myButtons.length, sound: allSounds[i]});
                //removing sounds from the array so that they don't get used for the next created button
                allSounds.splice(allSounds[i], 1);
                startX += 150;
            }
            startX = 70;
            startY += 120;
        }
    }
}

//function to create my buttons
function createRect() {
    fill(255, 125, 0);
    strokeWeight(2);
    stroke(0, 21, 36);
    rect(startX, startY, 100, 70, 15);
    
}

function mousePressed () {
    for (let j = 0; j < myButtons.length; j++) {
        //determining which button is clicked so that different sounds will play for each button
        if((mouseX > myButtons[j].x && mouseX <= myButtons[j].x + 80) && (mouseY > myButtons[j].y && mouseY <= myButtons[j].y + 100)) {
            console.log('the button has been clicked', myButtons[j]);
            myButtons[j].sound.play();
        } else {
            //will stop playing sound if another button is clicked (or the empty area around the buttons)
            myButtons[j].sound.stop();
        }
    }
}