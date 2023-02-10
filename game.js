// https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

const _question = document.getElementById('question'); // goes to game.html and finds the element "question", makes that equal to var "question"
const _options = document.querySelectorAll('.quiz-options'); // goes to game.html and selects everything under 'quiz-options' id


// simple function that pulls a question from the api link above.
async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple';
    const result = await fetch(`${APIUrl}`); // fetches the data from the API url defined above
    const data = await result.json(); // data here is defined as the jsonified version of result const
    showQuestion(data.results[0]);
}    

// function that displays the question. can be easily modified to single out correct or incorrect answers in the console.
function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    //adds the correct answer to the list of options, then randomizes it's position
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    console.log(optionsList);
    console.log(correctAnswer);


    _question.innerHTML = `${data.question} <br> <span class = "category">${data.category} </span>`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => ` 
        <li> ${index + 1}. <span> ${option} </span> </li>
        `)}
    `;
}

loadQuestion();






























// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0588371053msha6940727d7c83aap107c98jsn19374300bf1d',
// 		'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
//     .then(response.content)
// 	.catch(err => console.error(err));
    
// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('.choice-text'));
// const scoreText = document.querySelector('#score');
// const scoreBar = document.querySelector('#scoreBar');
// const scoreBarFull = document.querySelector('#scoreBarFull');

// let currentQuestion = {}
// let acceptingAnswers = true
// let score = 0
// let questionCounter = 0
// let availableQuestions = []

// let questions = [
//     {
//         question: 'What do we use for the Linux virtual machine on our laptops?',
//         choice1: 'wsl',
//         choice2: 'json',
//         choice3: 'whats a vm?',
//         choice4: 'i do not like cs...',
//         answer: 1
//     },
//     {
//         question: 'What is NOT a benefit of crowdsourcing?',
//         choice1: 'getting more varied ideas',
//         choice2: 'fact-checking',
//         choice3: 'whats crowdsourcing?',
//         choice4: 'creates more bias',
//         answer: 4
//     },
//     {
//         question: 'Is most computer bias intentional?',
//         choice1: 'HELP ME PLEASE',
//         choice2: 'Yes, all computers are racist',
//         choice3: 'No, because computers can do no wrong',
//         choice4: 'No, as most bias is simply a product of bad testing',
//         answer: 4
//     },
//     {
//         question: 'What do we use for the preferred IDE?',
//         choice1: 'VSCode',
//         choice2: 'json',
//         choice3: 'whats a vm?', 
//         choice4: 'i do not like cs...',
//         answer: 1
//     }
// ]

// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 4

// startGame = () => {
//     score = 0
//     questionCounter = 0
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
//         localStorage.setItem('mostRecentScore', score)

//         return window.location.assign('/end.html')
//     }

//     questionCounter++
//     scoreText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
//     scoreBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    
//}


