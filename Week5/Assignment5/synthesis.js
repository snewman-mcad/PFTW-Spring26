//creating constants for face down and face up
const DOWN = 'down';
const UP = 'up';
//first card starts at these coordinates
let startingX = 50;
let startingY = 120;
//empty array to add cards into
let cards = [];
const gameState = {
    totalPairs: 9,
    flippedCards: [],
    numberOfMatches: 0,
    attempts: 0,
    waiting: false
}

let cardFrontArray = [];
function preload () {
    cardFrontArray = [
        loadImage('img/Articuno-150x200.png'),
        loadImage('img/Butterfree-150x200.png'),
        loadImage('img/Cyndaquil-150x200.png'),
        loadImage('img/Mew-150x200.png'),
        loadImage('img/Pikachu-150x200.png'),
        loadImage('img/Porygon-150x200.png'),
        loadImage('img/Totodile-150x200.png'),
        loadImage('img/Umbreon-150x200.png'),
        loadImage('img/Vaporeon-150x200.png'),
    ]
    fontPokemon = loadFont('font/PokemonSolid.ttf');
}

function setup () {
    createCanvas(1150, 900);
    background('aliceblue');
    let selectedFronts = [];
    //looping through 9 times because that is the number of card pairs
    for (let z = 0; z < 9; z++) {
        //creating variable for random index number from the length of the array
        const randomIndex = floor(random(cardFrontArray.length));
        //choose random front from the array using random number that was generated
        const front = cardFrontArray[randomIndex];
        //adding the random front twice because two copies are needed
        selectedFronts.push(front);
        selectedFronts.push(front);
        //remove the used card front so that it doesn't get randomly selected again
        cardFrontArray.splice(randomIndex, 1);
    }
    //shuffles/randomizes the card fronts
    selectedFronts = shuffleArray(selectedFronts);
    //making 3 rows of cards
    for (let j = 0; j < 3; j++) {
        //making 6 columns of cards
        for (let i = 0; i < 6; i++) {
            //removes and returns last item in the array
            const frontImage = selectedFronts.pop();
            //adds returned image to the cards in the array
            cards.push(new Card(startingX, startingY, frontImage));
            startingX += 180;
        }
        //reseting the x and y for the start of each row
        startingX = 50;
        startingY += 230;
    }
}

function draw () {
    background('aliceblue');
    textSize(60);
    strokeWeight(5);
    stroke('midnightblue');
    fill('yellow');
    textFont(fontPokemon);
    text('Match that Pokémon!', 260, 80);
    for (let r = 0; r < cards.length; r++) {
        //if cards do not match
        if (!cards[r].isMatch) {
            cards[r].face = DOWN;
        }
        cards[r].show();
    }
    if (gameState.numberOfMatches === gameState.totalPairs) {
        fill(64, 188, 216, 200);
        rect(215, 300, 720, 200);
        strokeWeight(5);
        stroke('midnightblue');
        fill('yellow');
        textSize(60);
        text('You Matched Them All!', 255, 425);
        noLoop();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    textSize(36);
    strokeWeight(5);
    stroke('midnightblue');
    fill('yellow');
    text('attempts ' + gameState.attempts, 300, 850);
    text('matches ' + gameState.numberOfMatches, 50, 850);
}

function mousePressed () {
    if (gameState.waiting) {
        //if in a waiting state, stop the rest of the function
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        //checking flipped cards length, and then trigger the flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    //if two cards have been flipped, check to see if they match
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFrontImg === gameState.flippedCards[1].cardFrontImg) {
            //mark cards as matched so that they don't flip back over
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //reset the array length to zero to clear the array
            gameState.flippedCards.length = 0;
            //increment the correct number of matches for the score
            gameState.numberOfMatches++;
            //want to continue the loop
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor (x, y, cardFrontImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.cardFrontImg = cardFrontImg;
        this.isMatch;
        this.show();
    }
    show () {
        if (this.face === UP || this.isMatch) {
            //front of card
            fill('white');
            strokeWeight(4);
            stroke('midnightblue');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFrontImg, this.x, this.y);
        } else {  
            //back of card
            fill(37, 53, 98);
            strokeWeight(4);
            stroke(25, 38, 70);
            rect(this.x, this.y, this.width, this.height, 10);

            fill(64, 188, 216, 150);
            noStroke();
            //making the swirled shapes
            //top large mid-blue swirl
            beginShape();
            //first anchor point
            vertex(this.x + 25, this.y + 2);
            //add bezier vertices
            bezierVertex(this.x + 25, this.y + 2, this.x - 25, this.y + 80, this.x + 75, this.y + 100);
            bezierVertex(this.x + 75, this.y + 100, this.x + 75, this.y + 20, this.x + 148, this.y + 50);
            vertex(this.x + 148, this.y + 10);
            bezierVertex(this.x + 148, this.y + 10, this.x + 148, this.y, this.x + 138, this.y + 2);
            //stop drawing shape
            endShape();

            //bottom large mid-blue swirl
            beginShape();
            vertex(this.x + 125, this.y + 198);
            bezierVertex(this.x + 125, this.y + 198, this.x + 175, this.y + 120, this.x + 75, this.y + 100);
            bezierVertex(this.x + 75, this.y + 100, this.x + 75, this.y + 190, this.x + 2, this.y + 150);
            vertex(this.x + 2, this.y + 190);
            bezierVertex(this.x + 2, this.y + 190, this.x + 2, this.y + 198, this.x + 12, this.y + 198);
            endShape();

            //top medium light blue swirl
            fill(139, 213, 240, 150);
            beginShape();
            //first anchor point
            vertex(this.x + 75, this.y + 2);
            //add bezier vertices
            bezierVertex(this.x + 75, this.y + 2, this.x + 20, this.y + 50, this.x + 75, this.y + 100);
            bezierVertex(this.x + 75, this.y + 100, this.x + 55, this.y + 20, this.x + 148, this.y + 30);
            vertex(this.x + 148, this.y + 10);
            bezierVertex(this.x + 148, this.y + 10, this.x + 148, this.y, this.x + 138, this.y + 2);
            //stop drawing shape
            endShape();

            //bottom medium light blue swirl
            beginShape();
            vertex(this.x + 75, this.y + 198);
            bezierVertex(this.x + 75, this.y + 198, this.x + 140, this.y + 150, this.x + 75, this.y + 100);
            bezierVertex(this.x + 75, this.y + 100, this.x + 100, this.y + 190, this.x + 2, this.y + 170);
            vertex(this.x + 2, this.y + 190);
            bezierVertex(this.x + 2, this.y + 190, this.x + 2, this.y + 198, this.x + 12, this.y + 198);
            endShape();

            //top left light blue swirl
            beginShape();
            vertex(this.x + 45, this.y + 15);
            bezierVertex(this.x + 45, this.y + 15, this.x, this.y + 90, this.x + 75, this.y + 100);
            bezierVertex(this.x + 75, this.y + 100, this.x + 30, this.y + 60, this.x + 45, this.y + 15);
            endShape();

            //bottom right light blue swirl
            beginShape();
            vertex(this.x + 105, this.y + 185);
            bezierVertex(this.x + 105, this.y + 185, this.x + 160, this.y + 120, this.x + 75, this.y + 100);
            bezierVertex(this.x + 75, this.y + 100, this.x + 125, this.y + 130, this.x + 105, this.y + 185);
            endShape();

            fill(211, 243, 255, 150);
            //top middle light swirl
            beginShape();
            vertex(this.x + 75, this.y + 100);
            bezierVertex(this.x + 75, this.y + 100, this.x + 15, this.y + 20, this.x + 125, this.y + 10);
            bezierVertex(this.x + 125, this.y + 10, this.x + 50, this.y + 20, this.x + 75, this.y + 100);
            endShape();

            //bottom middle light swirl
            beginShape();
            vertex(this.x + 75, this.y + 100);
            bezierVertex(this.x + 75, this.y + 100, this.x + 135, this.y + 180, this.x + 25, this.y + 190);
            bezierVertex(this.x + 25, this.y + 190, this.x + 100, this.y + 180, this.x + 75, this.y + 100);
            endShape();

            //top left light swirl
            beginShape();
            vertex(this.x + 50, this.y + 2);
            bezierVertex(this.x + 50, this.y + 2, this.x + 25, this.y + 15, this.x + 20, this.y + 55);
            bezierVertex(this.x + 20, this.y + 55, this.x + 15, this.y + 18, this.x + 32, this.y + 2);
            endShape();

            //bottom right light swirl
            beginShape();
            vertex(this.x + 100, this.y + 198);
            bezierVertex(this.x + 100, this.y + 198, this.x + 125, this.y + 185, this.x + 130, this.y + 150);
            bezierVertex(this.x + 130, this.y + 150, this.x + 138, this.y + 175, this.x + 118, this.y + 198);
            endShape();

            //bottom left swirl (more transparent)
            fill(211, 243, 255, 100);
            beginShape();
            vertex(this.x + 2, this.y + 150);
            bezierVertex(this.x + 2, this.y + 150, this.x + 40, this.y + 175, this.x + 60, this.y + 150);
            bezierVertex(this.x + 60, this.y + 150, this.x + 50, this.y + 180, this.x + 2, this.y + 180);
            endShape();

            //top right transparent swirl
            beginShape();
            vertex(this.x + 148, this.y + 50);
            bezierVertex(this.x + 148, this.y + 50, this.x + 120, this.y + 35, this.x + 95, this.y + 50);
            bezierVertex(this.x + 95, this.y + 50, this.x + 110, this.y + 20, this.x + 148, this.y + 20);
            endShape();

            //start of creating a pokeball
            fill('red');
            strokeWeight(2);
            stroke(25, 38, 70);
            circle(this.x + this.width/2, this.y + this.height/2, 90);
            fill('white');
            arc(this.x + this.width/2, this.y + this.height/2, 90, 90, 0, PI, PIE);
            circle(this.x + this.width/2, this.y + this.height/2, 20);
        }
    }

    didHit (mouseX, mouseY) {
        //detection for clicking the card
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            //if the card is clicked, flips the card
            this.flip();
            return true;
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            //if the card is face down, flips the card to face up
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const index = Math.floor(Math.random() * counter);
        //decrease the counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}