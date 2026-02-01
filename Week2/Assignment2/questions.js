/*creating an array of objects:
the questions are book titles
and their authors are the answers*/
const questionsAndAnswers = [
    {
        question: "What author duo wrote Warping Minds & Other Misdemeanors?",
        answer: "Annette Marie and Rob Jacobsen",
    }, {
        question: "Who wrote Fourth Wing?",
        answer: "Rebecca Yarros",
    }, {
        question: "Who wrote A Study in Scarlet?",
        answer: "Arthur Conan Doyle",
    }, {
        question: "Who wrote Death on the Nile?",
        answer: "Agatha Christie",
    }, {
        question: "Who wrote Ready Player One?",
        answer: "Ernest Cline",
    }, {
        question: "Who wrote Divergent?",
        answer: "Veronica Roth",
    }, {
        question: "Who wrote In the Courts of the Sun?",
        answer: "Brian D'Amato",
    }, {
        question: "Who wrote Midlife Bounty Hunter?",
        answer: "Shannon Mayer",
    }
];

//generate a random number based on the length of the array questionsAndAnswers
//added in Math.floor to round down to give whole numbers
const randomNumber = Math.floor(Math.random() * questionsAndAnswers.length);

//prompts user to answer a random question, from the array questionsAndAnswers
let userAnswer = window.prompt(questionsAndAnswers[randomNumber].question);

//alerts the user that they answered and what their answer was
window.alert("You answered: " + userAnswer);

/*alerts user to correct answer
using the random number generated above (randomNumber) for the correct index*/
window.alert("The correct answer was: " + questionsAndAnswers[randomNumber].answer);