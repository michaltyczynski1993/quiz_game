import { questions } from "./questions.js";
// selectors
const questionText = document.getElementById('question');
const buttons = document.getElementsByTagName('button');
// pick a question object - just for test single record from Array
let question = questions[0];
// show question
questionText.innerHTML = question.question;


// show buttons with replies from question
// check correction

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.innerHTML = question.replies[i];
    button.addEventListener('click', () => question.checkAnswer(button.innerHTML, button));
}
// move to next question
