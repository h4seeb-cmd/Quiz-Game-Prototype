const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
const scoreBar = document.querySelector('#scoreBar');
const scoreBarFull = document.querySelector('#scoreBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What do we use for the Linux virtual machine on our laptops?',
        choice1: 'wsl',
        choice2: 'json',
        choice3: 'whats a vm?',
        choice4: 'i do not like cs...',
        answer: 1
    },
    {
        question: 'What is NOT a benefit of crowdsourcing?',
        choice1: 'getting more varied ideas',
        choice2: 'fact-checking',
        choice3: 'whats crowdsourcing?',
        choice4: 'creates more bias',
        answer: 4
    },
    {
        question: 'Is most computer bias intentional?',
        choice1: 'HELP ME PLEASE',
        choice2: 'Yes, all computers are racist',
        choice3: 'No, because computers can do no wrong',
        choice4: 'No, as most bias is simply a product of bad testing',
        answer: 4
    },
    {
        question: 'What do we use for the preferred IDE?',
        choice1: 'VSCode',
        choice2: 'json',
        choice3: 'whats a vm?', 
        choice4: 'i do not like cs...',
        answer: 1
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    score = 0
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    scoreText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    scoreBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    
}