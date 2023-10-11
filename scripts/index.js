// jeopardy plan https://docs.google.com/document/d/1c04c2d0jmkFQ-dfVAeHXimEf9s4ej6K3ss096c9ea_k/edit

// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// Questions imported in chunks of 5
const natureQ = placeholderQuestions.filter((placeholderQuestions) => placeholderQuestions.category === "Nature");
const natureQ1 = natureQ.slice(0, 5);
const natureQ2 = natureQ.slice(5, 10);

const animalQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="Animals");
const animalQ1 = animalQ.slice(0, 5);
const animalQ2 = animalQ.slice(5, 10);

const computerQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="Computers");
const computerQ1 = computerQ.slice(0, 5);
const computerQ2 = computerQ.slice(5, 10);

const mythologyQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="Mythology");
const mythologyQ1 = mythologyQ.slice(0, 5);
const mythologyQ2 = mythologyQ.slice(5, 10);

const historyQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="History");
const historyQ1 = historyQ.slice(0, 5);
const historyQ2 = historyQ.slice(5, 10);

const generalQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="General");
const generalQ1 = generalQ.slice(0, 5);
const generalQ2 = generalQ.slice(5, 10);

// Final question
const finalQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="Final");
console.log(finalQ);

// Creating variables for every category of questions, for every round
const natureCat1=document.querySelectorAll(".nature") 
const animalCat1=document.querySelectorAll(".animals") 
const computerCat1=document.querySelectorAll(".computers");
const mythologyCat1=document.querySelectorAll(".mythology");
const historyCat1=document.querySelectorAll(".history");
const generalCat1=document.querySelectorAll(".general");

const natureCat2=document.querySelectorAll(".nature") 
const animalCat2=document.querySelectorAll(".animals") 
const computerCat2=document.querySelectorAll(".computers");
const mythologyCat2=document.querySelectorAll(".mythology");
const historyCat2=document.querySelectorAll(".history");
const generalCat2=document.querySelectorAll(".general");

const finalCat=document.querySelectorAll(".final");

// Fishing
// Variables for guessing, passing and next
let guess=document.querySelector("#guess");
let pass=document.querySelector("#pass");
let next=document.querySelector("#next");

// Variable that displays the questions and states the questions that will be displayed
let questionDisplay1=document.querySelector(".questionDisplay1")
let currentQuestion = ""
let currentAnswer = ""

// Variables that keep track of whose turn it is and their points
let currentPlayer = 1;

let pointAmount=0;

let player1Score=0;
let player2Score=0; 

// Loops so that questions from all categories are asked, selecting the rounds when they will be asked
natureCat1.forEach((nature, index)=>{
  nature.addEventListener("click",()=>{
    console.log(nature.innerHTML)
    pointAmount=parseInt(nature.innerHTML)
    if (window.location.pathname === "/round-1.html") {
    console.log(natureQ1[index].question);
    console.log(natureQ1[index].answer);
    currentQuestion=natureQ1[index].question;
    currentAnswer=natureQ1[index].answer;
    questionDisplay1.textContent=currentQuestion;
    nature.classList.add("clicked");
    } 
  })
});

animalCat1.forEach((animal, index)=> {
  animal.addEventListener("click",()=>{
    console.log(animal.innerHTML)
    pointAmount=parseInt(animal.innerHTML)
    if (window.location.pathname === "/round-1.html") {
    console.log(animalQ1[index].question)
    console.log(animalQ1[index].answer)
    currentQuestion=animalQ1[index].question
    currentAnswer=animalQ1[index].answer
    questionDisplay1.textContent=currentQuestion;
    animal.classList.add("clicked");
    }
  })
});

computerCat1.forEach((computers, index)=> {
  computers.addEventListener("click",()=>{
    console.log(computers.innerHTML)
    pointAmount=parseInt(computers.innerHTML)
    if (window.location.pathname === "/round-1.html") {
    console.log(computerQ1[index].question)
    console.log(computerQ1[index].answer)
    currentQuestion=computerQ1[index].question
    currentAnswer=computerQ1[index].answer
    questionDisplay1.textContent=currentQuestion;
    computers.classList.add("clicked");
    }
  })
})

mythologyCat1.forEach((mythology, index)=> {
  mythology.addEventListener("click",()=>{
    console.log(mythology.innerHTML)
    pointAmount=parseInt(mythology.innerHTML)
    if (window.location.pathname === "/round-1.html") {
    console.log(mythologyQ1[index].question)
    console.log(mythologyQ1[index].answer)
    currentQuestion=mythologyQ1[index].question
    currentAnswer=mythologyQ1[index].answer
    questionDisplay1.textContent=currentQuestion;
    mythology.classList.add("clicked");
    }
  })
})

historyCat1.forEach((history, index)=> {
  history.addEventListener("click",()=>{
    console.log(history.innerHTML)
    pointAmount=parseInt(history.innerHTML)
    if (window.location.pathname === "/round-1.html") {
    console.log(historyQ1[index].question)
    console.log(historyQ1[index].answer)
    currentQuestion=historyQ1[index].question
    currentAnswer=historyQ1[index].answer
    questionDisplay1.textContent=currentQuestion;
    history.classList.add("clicked");
    }
  })
})

generalCat1.forEach((general, index)=> {
  general.addEventListener("click",()=>{
    console.log(general.innerHTML)
    pointAmount=parseInt(general.innerHTML)
    if (window.location.pathname === "/round-1.html") {
    console.log(generalQ1[index].question)
    console.log(generalQ1[index].answer)
    currentQuestion=generalQ1[index].question
    currentAnswer=generalQ1[index].answer
    questionDisplay1.textContent=currentQuestion;
    general.classList.add("clicked");
    }
  })
})

natureCat2.forEach((nature, index)=>{
  nature.addEventListener("click",()=>{
    console.log(nature.innerHTML)
    pointAmount=parseInt(nature.innerHTML)
    if (window.location.pathname === "/round-2.html") {
    console.log(natureQ2[index].question)
    console.log(natureQ2[index].answer)
    currentQuestion=natureQ2[index].question
    currentAnswer=natureQ2[index].answer
    questionDisplay1.textContent=currentQuestion;
    nature.classList.add("clicked");
    }
  })
});

animalCat2.forEach((animal, index)=> {
  animal.addEventListener("click",()=>{
    console.log(animal.innerHTML)
    pointAmount=parseInt(animal.innerHTML)
    if (window.location.pathname === "/round-2.html") {
    console.log(animalQ2[index].question)
    console.log(animalQ2[index].answer)
    currentQuestion=animalQ2[index].question
    currentAnswer=animalQ2[index].answer
    questionDisplay1.textContent=currentQuestion;
    animal.classList.add("clicked");
    }
  })
});

computerCat2.forEach((computers, index)=> {
  computers.addEventListener("click",()=>{
    console.log(computers.innerHTML)
    pointAmount=parseInt(computers.innerHTML)
    if (window.location.pathname === "/round-2.html") {
    console.log(computerQ2[index].question)
    console.log(computerQ2[index].answer)
    currentQuestion=computerQ2[index].question
    currentAnswer=computerQ2[index].answer
    questionDisplay1.textContent=currentQuestion;
    computers.classList.add("clicked");
    }
  })
})

mythologyCat2.forEach((mythology, index)=> {
  mythology.addEventListener("click",()=>{
    console.log(mythology.innerHTML)
    pointAmount=parseInt(mythology.innerHTML)
    if (window.location.pathname === "/round-2.html") {
    console.log(mythologyQ2[index].question)
    console.log(mythologyQ2[index].answer)
    currentQuestion=mythologyQ2[index].question
    currentAnswer=mythologyQ2[index].answer
    questionDisplay1.textContent=currentQuestion;
    mythology.classList.add("clicked");
    }
  })
})

historyCat2.forEach((history, index)=> {
  history.addEventListener("click",()=>{
    console.log(history.innerHTML)
    pointAmount=parseInt(history.innerHTML)
    if (window.location.pathname === "/round-2.html") {
    console.log(historyQ2[index].question)
    console.log(historyQ2[index].answer)
    currentQuestion=historyQ2[index].question
    currentAnswer=historyQ2[index].answer
    questionDisplay1.textContent=currentQuestion;
    document.querySelector("#guess").classList.remove("disabled") ; 
    history.classList.add("clicked");
    }
  })
})

generalCat2.forEach((general, index)=> {
  general.addEventListener("click",()=>{
    console.log(general.innerHTML)
    pointAmount=parseInt(general.innerHTML)
    if (window.location.pathname === "/round-2.html") {
    console.log(generalQ2[index].question)
    console.log(generalQ2[index].answer)
    currentQuestion=generalQ2[index].question
    currentAnswer=generalQ2[index].answer
    questionDisplay1.textContent=currentQuestion;
    general.classList.add("clicked");
    }
  })
})

finalCat.forEach((final, index) => {
  finalCategory(final, index);
});

function finalCategory(final, index) {
  final.addEventListener("click", () => {
    console.log(final.innerHTML);

    if (window.location.pathname === "/final-jeopardy.html") {
      console.log(finalQ.question);
      console.log(finalQ.answer);
      currentQuestion=finalQ.question
      currentAnswer=finalQ.answer
      var questionDisplay1 = document.getElementById("questionDisplay1");
      if (questionDisplay1) {
        questionDisplay1.textContent = currentQuestion;
      }

      final.classList.add("clicked");
    }
  });
}

// Functions to enable or disable buttons
/* function enable() {
  document.querySelector("#guess").classList.remove("disabled");
  document.querySelector("#pass").classList.remove("disabled");
} */

function disable() {
  document.querySelector("#guess").classList.add("disabled");
  document.querySelector("#pass").classList.add("disabled");
}

function enableNextRound() {
  document.querySelector("#next").classList.remove("disabled");
}

function disableNextRound() {
  document.querySelector("#next").classList.add("disabled");
}

function updateScoreDisplay() {
  document.querySelector("#player1Score").textContent = (`Player 1 - Score: ${player1Score}`);
  document.querySelector("#player2Score").textContent = (`Player 2 - Score: ${player2Score}`);
}

function changePlayers() {
  currentPlayer = currentPlayer === 2 ? 1 : 2;
  console.log(currentPlayer);
  document.querySelector("#turnRound").textContent =(`Player ${currentPlayer}, It's your turn!`)
}

function addPoints() {
  if (currentPlayer === 1) {player1Score=player1Score+pointAmount}
  else if (currentPlayer === 2) {player2Score=player2Score+pointAmount}
}

function takeAwayPoints() {
  if (currentPlayer === 1) {player1Score=player1Score-pointAmount}
  else if (currentPlayer === 2) {player2Score=player2Score-pointAmount}
}

questionDisplay1.addEventListener("console.log(currentQuestion)", ()=>{
    alert("you pass")
  })

pass.addEventListener("click", ()=>{
  alert("you pass");
  changePlayers();
})

next.addEventListener("click", ()=>{
  alert("you go to the next round")
})

guess.addEventListener("click", ()=>{
  let userInput1=document.querySelector(".userAnswer1").value
  if (userInput1.toLowerCase()===currentAnswer.toLowerCase()) {
    addPoints();
    updateScoreDisplay();

    console.log(`Player1:${player1Score}, Player2:${player2Score}`); 
  } else if (userInput1.toLowerCase()!=currentAnswer.toLowerCase()) {
    takeAwayPoints();
    updateScoreDisplay();
    console.log(`Player1:${player1Score}, Player2:${player2Score}`);
   // alert("Incorrect answer");
    changePlayers();
  }
})

window.addEventListener("load", () => {
  if (window.location.pathname === "/round-1.html") {
    document.querySelector("#turnRound").textContent = `Player ${currentPlayer}'s turn!`; // turns
    updateScoreDisplay();
  } else if (window.location.pathname === "/round-2.html") {
    document.querySelector("#turnRound").textContent = `Player ${currentPlayer}'s turn!`; // turns
    updateScoreDisplay();
  } else if (window.location.pathname === "/final-jeopardy.html") {
    document.querySelector("#turnRound").textContent = `Player ${currentPlayer}'s turn!`; // turns
    updateScoreDisplay();
  }
});