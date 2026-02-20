function setup () {
    createCanvas(1150, 900);
    background('aliceblue');
    myCard = new Card();
}

function mousePressed () {
    console.log(myCard.didHit(mouseX, mouseY));
}

class Card {
    constructor () {
        this.x = 50;
        this.y = 120;
        this.width = 150;
        this.height = 200;
        this.show();
    }
    show () {
        //main back of card
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
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            return true;
        } else {
            return false;
        }
    }
}