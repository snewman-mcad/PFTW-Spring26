let submitAnswerButton;
let resetButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let subheading;
let wrongCounter = 0;
let statements = createStatementArray();

function createStatementArray() {
    //making the function return an array so that I can use the function for the reset button later
    return [
    {question: 'What color is opposite orange on the color wheel?', answer: 'blue'}, 
    {question: 'What color is opposite yellow on the color wheel?', answer: 'purple'}, 
    {question: 'What color is opposite red on the color wheel?', answer: 'green'}, 
    {question: 'When white is added to red, what color is produced?', answer: 'pink'}, 
    {question: 'What color do you get when you mix yellow and red?', answer: 'orange'}, 
    {question: 'What color is made by combining opposites on the color wheel?', answer: 'brown'} 
    ];
}

function next() {
    //if there are no more questions, alert the user that they have won
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
    //alerting the user to restart the quiz when there are no more questions
    if (currentQuestion === undefined) {
        alert('Please reset quiz.');
        return;
    }
    //asking user to enter an answer if they try to submit nothing
    //.trim gets rid of white space just in case user tries to enter only spaces
    if (questionInput.value().trim() === '') {
        alert('Please enter an answer.');
        return;
    }
    if (currentQuestion.answer === questionInput.value().trim()) {
        //remove correct answer from array
        //keeps all incorrect values in the array by returning back all incorrect values
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        //this is the correct condition
        response = 'Correct! Next question!';
        responseColor = 'green';
    } else {
        //this is the wrong answer condition
        response = 'Oops, that wasn\'t quite right! Try another question.';
        responseColor = 'red';
        //adds to the wrong number counter by increments of one
        wrongCounter = (wrongCounter + 1);
        //keeps track of the amount of wrong answers given and if the wrong answers equal 5, tells the user to try again
        if (wrongCounter === 5) {
            alert('Sorry, you guessed wrong too many times. Reset the quiz and try again.');
        }
    }
    currentQuestion = next();
    //clears out previous answer
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
}

function getChoices() {
    //creating variable to use to display the answers to choose from
    let choices = '';
    //looping through the statements array to retrieve all of the answers
    statements.forEach((statements) => {
        choices = choices + statements.answer + '       ';
    });
    return choices;
}

function resetQuiz () {
    //resets the count for amount wrong to 0
    wrongCounter = 0;
    //resets the statement array to include all of the questions/answers
    statements = createStatementArray();
    response = '';
}

//calls the next function to get the next random question
currentQuestion = next();
//the message is the current question that was given by the next function
let message = currentQuestion.question;

function setup() {
    createCanvas(800, 600);
    textFont("Figtree");
    //creating heading for Color Quiz
    heading = createElement('h1', ['Color Quiz']);
    heading.position(75, 100);
    //creating subheading for answers remaing
    subheading = createElement('h2', ['Possible answers remaining:']);
    subheading.position(75, 370);
    //creating input text box
    questionInput = createInput('');
    questionInput.size(250, 24);
    questionInput.position(100, 230);
    //creating submit answer button
    submitAnswerButton = createButton('submit');
    submitAnswerButton.size(150, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(150, 270);
    //creating reset button
    resetButton = createButton('reset quiz');
    resetButton.size(100, 24);
    resetButton.position(550, 70);
    resetButton.mousePressed(resetQuiz);
}

function draw() {
    background(240, 250, 249);
    fill(61, 43, 86);
    textSize(24);
    //displays the current question
    text(message, 75, 200);
    //response color will be either red or green based on whether the user answered correctly or incorrectly
    fill(responseColor);
    //displays the response text (either correct or incorrect)
    text(response, 100, 350);
    fill(221, 4, 38);
    //displays the count of questions answered incorrectly
    text('amount wrong: ' + wrongCounter, 500, 50);
    fill(61, 43, 86);
    //displays all choices at the bottom
    text(getChoices(), 100, 450);
}