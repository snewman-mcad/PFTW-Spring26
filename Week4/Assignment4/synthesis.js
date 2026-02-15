const cardWidth = 150;
const cardHeight = 200;
let cardX = 50;
let cardY = 120;
let myCards = [];

function setup () {
    createCanvas(1150, 900);
    background('aliceblue');
    for (let k = 0; k < 3; k++) {
        //creating 3 rows
        for (let i = 0; i < 6; i++) {
            //creating 6 columns
            createCard();
            myCards.push({x: cardX, y: cardY, id: i});
            //adding new cards to the array myCards
            cardX += 180;
        }
        cardX = 50;
        cardY += 230;
        //reseting the x and y for the start of each row
    }
}

function createCard () {
    fill(0, 101,161);
    strokeWeight(4);
    stroke(25, 38, 70);
    rect(cardX, cardY, cardWidth, cardHeight, 10);
}

function mousePressed () {
    for (let j = 0; j < myCards.length; j++) {
        if((mouseX > myCards[j].x && mouseX <= myCards[j].x + cardWidth) && (mouseY > myCards[j].y && mouseY <= myCards[j].y + cardHeight)) {
            console.log('the card has been clicked');
        }
        //using the array myCards to determine if one of the cards has been clicked
    }
}