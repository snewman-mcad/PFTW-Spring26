let submitAnswerButton;
let resetButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let wrongCounter = 0;
let statements = createStatementArray();

function createStatementArray() {
    //making the function return an array so that I can use the function for the reset button later
    return [
    {question: 'What color is opposite blue on the color wheel?', answer: 'orange'}, 
    {question: 'What color is opposite yellow on the color wheel?', answer: 'purple'}, 
    {question: 'What color is opposite red on the color wheel?', answer: 'green'}, 
    {question: 'When white is added to red, what color is produced?', answer: 'pink'}, 
    {question: 'What visible color produces the longest waves of light?', answer: 'red'}, 
    {question: 'What color is made by combining opposites on the color wheel?', answer: 'brown'} 
    ];
}
function next() {
    if (statements.length < 1) {
        alert('You won!');
        return;
    }
    //generate random number based on amount of objects in the statements array
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    //return the object in the array that matches the index of the random number
    return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        //remove correct answer from array
        //keeps all incorrect values in the array by returning back all incorrect values
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        //this is the correct condition
        response = 'correct! next question';
        responseColor = 'green';
    } else {
        //this is the wrong answer condition
        response = 'oops, that wasn\'t quite right! try another question';
        responseColor = 'red';
        wrongCounter = (wrongCounter + 1);
        //keeps track of the amount of wrong answers given
        if (wrongCounter >= 5) {
            alert('Sorry, you guessed wrong too many times. Try again.');
        }
    }
    currentQuestion = next();
    //clears out previous answer
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
}

//calls the next function to get the next random question
currentQuestion = next();
//the message is the current question that was given by the next function
let message = currentQuestion.question;

let choices = '';
statements.forEach((statements) => {
    choices = choices + statements.answer + '       ';
});

function resetQuiz () {
    //resets the count for amount wrong to 0
    wrongCounter = 0;
    //resets the statement array to include all of the questions/answers
    statements = createStatementArray();
}

function setup() {
    createCanvas(800, 600);
    heading = createElement('h1', ['Color Quiz']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(100, 220);
    submitAnswerButton = createButton('submit');
    submitAnswerButton.size(250, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 260);
    resetButton = createButton('reset quiz');
    resetButton.size(200, 24);
    resetButton.position(500, 70);
    resetButton.mousePressed(resetQuiz);
}

function draw() {
    background('lightblue');
    fill('purple');
    textSize(24);
    //displays the current question
    text(message, 100, 200);
    //response color will be either red or green based on whether the user answered correctly or incorrectly
    fill(responseColor);
    //displays the response text (either correct or incorrect)
    text(response, 100, 350);
    fill('magenta');
    //displays the count of questions answered incorrectly
    text('amount wrong: ' + wrongCounter, 500, 50);
    //displays all choices at the bottom
    text(choices, 100, 450);
}