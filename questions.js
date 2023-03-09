import { Question } from "./questionModel.js";

export const questions = [
    new Question('Jakie jest największe państwo na świecie pod względem powierzchni?',
        ['Rosja', 'Kanada', 'Stany Zjednoczone', 'Chiny'], 'Rosja'),
    new Question('Które miasto jest stolicą Włoch?',
        { a: 'Rzym', b: 'Wenecja', c: 'Florencja', d: 'Neapol' }),
]