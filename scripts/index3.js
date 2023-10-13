// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// catching the URL parameters and their values
const url = new URL(window.location.href);
const searchParams = url.searchParams;
let currentPlayer = parseInt(searchParams.get("currentPlayer"));
let player1Score = parseInt(searchParams.get("player1Score"));
let player2Score = parseInt(searchParams.get("player2Score"));

// Final question
const finalQ= placeholderQuestions.find((placeholderQuestions)=> placeholderQuestions.category==="Final");

// Fishing

// Variable that displays the questions and states the questions that will be displayed
let questionDisplay1=document.querySelector(".questionDisplay1")
let currentQuestion = ""
let currentAnswer = ""

// Variables that keep track of whose turn it is and their points
let pointAmount=0;

finalCategory()


function finalCategory() {
    if (window.location.pathname === "/final-jeopardy.html") {
      console.log(finalQ.question);
      console.log(finalQ.answer);
      currentQuestion = finalQ.question;
      currentAnswer = finalQ.answer;
      questionDisplay1.textContent = currentQuestion;
      
      const finalBetInput = document.getElementById("finalBet");
      finalBetInput.addEventListener("input", function() {
        //take the value from the input?
        pointAmount = parseInt(finalBetInput.value); 
        console.log(pointAmount);
      });
    }
  }

let finalBet=document.querySelector("#finalBet");

// function to show the score
function updateScoreDisplay() {
  document.querySelector("#player1Score").textContent = (`Player 1 - Score: ${player1Score}`);
  document.querySelector("#player2Score").textContent = (`Player 2 - Score: ${player2Score}`);
}

// function to add points
function addPoints() {
  if (currentPlayer === 1) {player1Score=player1Score+pointAmount}
  else if (currentPlayer === 2) {player2Score=player2Score+pointAmount}
}
// function to take away points
function takeAwayPoints() {
  if (currentPlayer === 1) {player1Score=player1Score-pointAmount}
  else if (currentPlayer === 2) {player2Score=player2Score-pointAmount}
}

guess.addEventListener("click", ()=>{
  let userInput1=document.querySelector(".userAnswer1").value
  if (userInput1.toLowerCase()===currentAnswer.toLowerCase()) {
    addPoints(); // if right, add points
    updateScoreDisplay(); // display score
    console.log(`Player1:${player1Score}, Player2:${player2Score}`); 
    alert("Congratulations! Your answer was right! You won the game! END OF THE GAME");
  } else if (userInput1.toLowerCase()!=currentAnswer.toLowerCase()) {
    takeAwayPoints(); // if wrong, take away points
    updateScoreDisplay(); // display score
    console.log(`Player1:${player1Score}, Player2:${player2Score}`);
    alert("Wrong answer! END OF THE GAME");
  }
})

window.addEventListener("load", () => {
  if (window.location.pathname === "/final-jeopardy.html") {
    document.querySelector("#turnRound").textContent = `Player ${currentPlayer}'s turn!`; // turns
    updateScoreDisplay(); //updating the score after the turn
  }
});