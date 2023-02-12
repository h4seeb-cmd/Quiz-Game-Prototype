// https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

const _question = document.getElementById('question'); // goes to game.html and finds the element "question", makes that equal to var "question"
const _options = document.querySelector('.quiz-options'); // goes to game.html and selects everything under 'quiz-options' id
const _correctScore = document.getElementById('score');
const _totalQuestion = document.getElementById('questionTotal');
const _checkBtn = document.getElementById('check-answer');
const _restart = document.getElementById('play-again');
const _result = document.getElementById('result');

let correctAnswer = '', correctScore = askedCount = 0, totalQuestion = 10

// event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}); 

function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer);
}


// simple function that pulls a question from the api link above.
async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple';
    const result = await fetch(`${APIUrl}`); // fetches the data from the API url defined above
    const data = await result.json(); // data here is defined as the jsonified version of result const
    showQuestion(data.results[0]);
}    

// function that displays the question. can be easily modified to single out correct or incorrect answers in the console.
function showQuestion(data){         
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); //adds the correct answer to the list of options, then randomizes it's position
    _question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li> 
        `).join('')}
    `;

    selectOption(); 
}

// function that lets us select options
function selectOption() {
    _options.querySelectorAll('li').forEach((option) => {
        option.addEventListener('click', () => {
            if (_options.querySelector('.selected')){
               const activeOption = _options.querySelector('.selected');
               activeOption.classList.remove('selected');

            }
            option.classList.add('selected');
        });
    });

    console.log(correctAnswer);
}

// function that checks the answer
function checkAnswer() {
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        if(selectedAnswer == correctAnswer){
            correctScore ++;
            _result.innerHTML = '<h2> <i class = "fas fa-check"></i>Correct Answer! </h2>';
        } else {
            _result.innerHTML = '<h2> <i class = "fas fa-check"></i>Wrong Answer! <b>Correct Answer:</b> ${correctAnswer}</h2>';
        }
}
}



















