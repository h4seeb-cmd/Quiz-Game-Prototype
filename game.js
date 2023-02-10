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
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer); //adds the correct answer to the list of options, then randomizes it's position
    _question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li> 
        `).join('')}
    `;
}

loadQuestion();






















