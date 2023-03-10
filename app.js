// Refaktoryzacja:
import { questions } from "./questions.js";

// selectors
const buttons = document.getElementsByTagName('button');
const questionText = document.getElementById('question');

// variables
let score = 0;
let gameOver = false;
let questionNum = 0;
let correctAnswer;  // dodano zmienną przechowującą poprawną odpowiedź 

//pokaż pytanie 
const showQuestion = () => {
    const question = questions[questionNum];

    // show current question 
    questionText.innerHTML = question.question;

    // show possible replies and set correct answer  // dodano ustawienie poprawnej odpowiedzi  
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.innerHTML = question.replies[i];

        if (question.replies[i] === question.correctAnswer) {   // dodano sprawdzenie, która odpowiedź jest poprawna  
            correctAnswer = button.innerHTML;   // jeśli odpowiedź jest poprawna, zapisz ją w zmiennej  

            button.addEventListener('click', () => checkAnswer(button));   // wywołanie funkcji checkAnswer przekazując do niej tylko przycisk, a nie odpowiedź  

        } else {   // jeśli odpowiedź jest błędna, dla każdego przycisku ustaw event listener na sprawdzenie odpowiedzi  

            button.addEventListener('click', () => checkAnswer(button));   // wywołanie funkcji checkAnswer przekazując do niej tylko przycisk, a nie odpowiedź    

        }

    }

}

const checkAnswer = (button) => {   // zmieniono argumenty funkcji na tylko jeden - przycisk, który został kliknięty    

    if (button.innerHTML == correctAnswer) {   // sprawdzenie czy wartość innerHTML danego przycisku równa się wartości zapisanej w zmiennej correctAnswer    

        alert('Correct pick!');
        nextQuestion();

    }
}

const nextQuestion = () => {
    questionNum++;
    score++;
    if (questionNum < questions.length) {
        // wyświetl kolejne pytanie
        showQuestion();
    } else {
        // koniec gry
        alert(`Koniec gry! Twój wynik to: ${score}`);
    }
}

showQuestion();