let favGames = [
    {
        title: "Clue",
        type: "logic puzzle",
        numberOfPlayers: "3-6",
        rating: 5,
        shortDescription: "The object of the game is to figure out who murdered the victim, where the crime took place, and which weapon was used.",
    }, {
        title: "Stakd",
        type: "strategy",
        numberOfPlayers: "1-6",
        rating: 4,
        shortDescription: "This is a strategic game where you stack pieces, block other players from using their pieces, and be the last to lay a piece so that you win."
    }, {
        title: "Cubed",
        type: "strategy",
        numberOfPlayers: "1-11",
        rating: 5,
        shortDescription: "This is a version of the classic Dominos game but with 3D hexagons. You have to match color and height of the pieces to play a legal piece."
    }
]

//prompting user for a number
const whichGame = window.prompt("I have " + favGames.length + " favorite games, pick a number between 1 and 3 and I'll tell you about one of them.");

//casting the user's prompt/number to a number, not a string
const selectedIndex = Number(whichGame) - 1;

//telling the user about the game that they chose from picking a number
window.alert("You chose " + favGames[selectedIndex].title + " which is a " + favGames[selectedIndex].type + " game for " + favGames[selectedIndex].numberOfPlayers + " players. " + favGames[selectedIndex].shortDescription + " For me, this game rates a " + favGames[selectedIndex].rating + " out of 5.");