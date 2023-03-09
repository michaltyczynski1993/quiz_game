export class Question {
    constructor(question, replies, correctAnswer) {
        this.question = question;
        this.replies = replies;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer = (answer, button) => {
        // check answer correction and set button color on green and score +1. Then move to another question.
        if (answer == this.correctAnswer) {
            button.style.backgroundColor = 'green';
            console.log('Correct pick!');
        }
    }
}