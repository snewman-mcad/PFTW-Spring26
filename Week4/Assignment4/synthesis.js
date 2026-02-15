const cardWidth = 90;
const cardHeight = 120;
let cardX = 50;
let cardY = 100;
let myCards = [];

function setup () {
    createCanvas(800, 600);
    background('aliceblue');
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 6; i++) {
            createCard();
            myCards.push({x: cardX, y: cardY, id: i});
            cardX += 120;
        }
        cardX = 50;
        cardY += 150;
    }
    console.log(myCards);
}

function createCard () {
    fill(0, 101,161);
    strokeWeight(4);
    stroke(25, 38, 70);
    rect(cardX, cardY, cardWidth, cardHeight, 10);
}