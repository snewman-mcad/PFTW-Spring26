/*creating an array of objects:
the questions are book titles
and their authors are the answers*/
const questionsAndAnswers = [
    {
        question: "What author duo wrote Warping Minds & Other Misdemeanors",
        answer: "Annette Marie and Rob Jacobsen",
    }, {
        question: "Who wrote Fourth Wing",
        answer: "Rebecca Yarros",
    }, {
        question: "Who wrote A Study in Scarlet",
        answer: "Arthur Conan Doyle",
    }, {
        question: "Who wrote Death on the Nile",
        answer: "Agatha Christie",
    }, {
        question: "Who wrote Ready Player One",
        answer: "Ernest Cline",
    }, {
        question: "Who wrote Divergent",
        answer: "Veronica Roth",
    }, {
        question: "Who wrote In the Courts of the Sun",
        answer: "Brian D'Amato",
    }
];

//generate a random number based on the length of the array questionsAndAnswers
//added in Math.floor to round down to give whole numbers
const randomNumber = Math.floor(Math.random() * questionsAndAnswers.length);
console.log("random number", randomNumber);