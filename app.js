import { questions } from "./questions.js";

// selectors
const buttons = document.getElementsByTagName('button');
const questionText = document.getElementById('question');
const scoreText = document.getElementById('score');

// variables
let score = 0;
let questionNum = 0;
let correctAnswer;

function handleButtonClick() {
    checkAnswer(this);
}
// show question 
const showQuestion = () => {
    const question = questions[questionNum];
    scoreText.innerHTML = `Score: ${score}`;
    // show current question 
    questionText.innerHTML = question.question;

    // set correct answer and show possible replies
    correctAnswer = question.correctAnswer;
    const buttonsCount = buttons.length;
    for (let i = 0; i < buttonsCount; i++) {
        const button = buttons[i];

        button.innerHTML = question.replies[i];
        button.addEventListener("click", handleButtonClick);
    }
}

const checkAnswer = (button) => {
    if (button.innerHTML === correctAnswer) {
        alert('Correct pick!');
        score++;
        questionNum++;
        nextQuestion();
    } else {
        endGameMessage();
        location.reload();
    }
}

const nextQuestion = () => {
    if (questionNum <= questions.length - 1) {
        // display next question
        showQuestion();
    } else {
        // end game
        endGameMessage();

    }
}

const endGameMessage = () => {
    alert(`Koniec gry! Twój wynik to: ${score}`);
    scoreText.innerHTML = `Score: ${score}`;
}

showQuestion();