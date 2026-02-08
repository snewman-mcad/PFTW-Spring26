let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
    {question: 'What color is opposite blue on the color wheel?', answer: 'orange'}, 
    {question: 'What color is opposite yellow on the color wheel?', answer: 'purple'}, 
    {question: 'What color is opposite red on the color wheel?', answer: 'green'}, 
    {question: 'When white is added to red, what color is produced?', answer: 'pink'}, 
    {question: 'What visible color produces the longest waves of light?', answer: 'red'}, 
    {question: 'What color is made by combining opposites on the color wheel?', answer: 'brown'} 
];
function next() {
    if(statements.length < 1) {
        alert('You won!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        //remove correct answer from array
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
    }
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
}

currentQuestion = next();
let message = currentQuestion.question;

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
}

function draw() {
    background('lightblue');
    fill('purple');
    textSize(24);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 350);
}