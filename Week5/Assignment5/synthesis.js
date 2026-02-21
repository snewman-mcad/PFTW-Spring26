//creating constants for face down and face up
const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 120;
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
    if (gameState.numberOfMatches === gameState.totalPairs) {
        fill('green');
        textSize(60);
        text('you win!', 400, 425);
        noLoop();
    }
    for (let r = 0; r < cards.length; r++) {
        //if cards do not match
        if (!cards[r].isMatch) {
            cards[r].face = DOWN;
        }
        cards[r].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(0);
    textSize(36);
    text('attempts ' + gameState.attempts, 300, 840);
    text('matches ' + gameState.numberOfMatches, 50, 840);
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
            fill(0, 101, 161);
            strokeWeight(4);
            stroke(25, 38, 70);
            rect(this.x, this.y, this.width, this.height, 10);
            //start of creating a pokeball
            fill('red');
            strokeWeight(2);
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