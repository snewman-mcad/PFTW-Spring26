//creating constants for face down and face up
const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 120;
let cards = [];
const gameState = {

}

function setup () {
    createCanvas(1150, 900);
    background('aliceblue');
    //making 3 rows of cards
    for (let j = 0; j < 3; j++) {
        //making 6 columns of cards
        for (let i = 0; i < 6; i++) {
            cards.push(new Card(startingX, startingY));
            startingX += 180;
        }
        //reseting the x and y for the start of each row
        startingX = 50;
        startingY += 230;
    }
    
}

function mousePressed () {
    for (let k = 0; k < cards.length; k++) {
        if (cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped');
        }
    }
}

class Card {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 200;
        this.face = DOWN;
        this.show();
    }
    show () {
        if (this.face === DOWN) {
            //back of card
            fill(0, 101, 161);
            strokeWeight(4);
            stroke(25, 38, 70);
            rect(this.x, this.y, this.width, this.height, 10)
            //start of creating a pokeball
            fill('red');
            strokeWeight(2);
            circle(this.x + this.width/2, this.y + this.height/2, 90);
            fill('white');
            arc(this.x + this.width/2, this.y + this.height/2, 90, 90, 0, PI, PIE);
            circle(this.x + this.width/2, this.y + this.height/2, 20);
        } else {
            //front of card
            fill('white');
            strokeWeight(4);
            stroke('midnightblue');
            rect(this.x, this.y, this.width, this.height, 10)
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