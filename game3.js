// // https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

// const _question = document.getElementById('question'); // goes to game.html and finds the element "question", makes that equal to var "question"
// const _options = document.querySelector('.quiz-options'); // goes to game.html and selects everything under 'quiz-options' id
// const _correctScore = document.getElementById('score');
// const _totalQuestion = document.getElementById('questionTotal');
// const _checkBtn = document.getElementById('check-answer');
// const _restart = document.getElementById('play-again');
// const _result = document.getElementById('result');

// let correctAnswer = '', correctScore = askedCount = 0, totalQuestion = 10


// // // simple function that pulls a question from the api link above.
// // async function loadQuestion(){
// //     const APIUrl = 'http://127.0.0.1:8086/api/users/';
// //     const result = await fetch(`${APIUrl}`); // fetches the data from the API url defined above
// //     const data = await result.json(); 
// //     _result.innerHTML = "";
// //     _question.innerHTML = `${data.question}`;
// //     console.log(data.question)
// // }


// // // event listeners
// // document.addEventListener('DOMContentLoaded', () => {
// //     loadQuestion();
// //     _totalQuestion.textContent = totalQuestion;
// //     _correctScore.textContent = correctScore;
// // }); 

// const apiEndpoint = 'http://127.0.0.1:8086/api/users/'

// let score = 0

// // Define an async function that makes the GET request and returns the question and answer
// async function fetchQuestionAndAnswer(apiEndpoint) {
//     const response = await fetch(apiEndpoint);
//     const data = await response.json();
//     console.log(answer);
//     console.log(question);
//     console.log(score);
//     return {
//       question: data.question,
//       answer: data.correctAnswer
//     };
//   }
  
//   // Add an event listener to the submit button
//   document.getElementById('submit-button').addEventListener('click', async function() {
//     // Get the user's answer from the form
//     const userAnswer = document.getElementById('user-answer').value;
  
//     // Get the question and answer from the API
//     const { question, correctAnswer } = await fetchQuestionAndAnswer('your-api-endpoint');
  
//     // Display the question on the pageq
//     document.getElementById('question').textContent = question;
  
//     // Check if the user's answer matches the correct answer
//     if (userAnswer === correctAnswer) {
//       score ++;
      
//     }
//   });


// $('#buttonID').click( async function(){
//     let userAnswer = document.getElementById('user-answer').value;
//     let url = 'http://127.0.0.1:8086/api/users/';
//     const headers = {
//         method: 'GET',
//         mode: 'cors',
//         credentials: 'omit',
//         headers: { 'Content-Type': 'application/json' },
//       };
//     try{
//         const response = await fetch(apiEndpoint);
//     }
//     }
// )