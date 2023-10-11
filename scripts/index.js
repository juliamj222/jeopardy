// jeopardy plan https://docs.google.com/document/d/1c04c2d0jmkFQ-dfVAeHXimEf9s4ej6K3ss096c9ea_k/edit

//! I was trying to make it so that you can't see the question again.

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
let guess=document.querySelector("#guess");
let pass=document.querySelector("#pass");
let next=document.querySelector("#next");

let colContainer=document.querySelector("#colContainer");

let questionDisplay1=document.querySelector("#questionDisplay1")
let questionDisplay2=document.querySelector("#questionDisplay2")


let currentQuestion1 = ""
let currentAnswer1 = ""

let currentQuestion2 = ""
let currentAnswer2 = ""

let currentPlayer = 1;

let pointAmount=0;

let player1Score=0;
let player2Score=0; 

let hasGuessedOrPassed = false;

natureCat1.forEach((nature, index)=>{
  nature.addEventListener("click",()=>{
    console.log(nature.innerHTML)
    pointAmount=parseInt(nature.innerHTML)
    if (window.location.pathname === "/round-1.html") {
    console.log(natureQ1[index].question);
    console.log(natureQ1[index].answer);
    currentQuestion1=natureQ1[index].question;
    currentAnswer1=natureQ1[index].answer;
    questionDisplay1.textContent=currentQuestion1;
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
    currentQuestion1=animalQ1[index].question
    currentAnswer1=animalQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
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
    currentQuestion1=computerQ1[index].question
    currentAnswer1=computerQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
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
    currentQuestion1=mythologyQ1[index].question
    currentAnswer1=mythologyQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
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
    currentQuestion1=historyQ1[index].question
    currentAnswer1=historyQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
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
    currentQuestion1=generalQ1[index].question
    currentAnswer1=generalQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
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
    currentQuestion2=natureQ2[index].question
    currentAnswer2=natureQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
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
    currentQuestion2=animalQ2[index].question
    currentAnswer2=animalQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
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
    currentQuestion2=computerQ2[index].question
    currentAnswer2=computerQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
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
    currentQuestion2=mythologyQ2[index].question
    currentAnswer2=mythologyQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
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
    currentQuestion2=historyQ2[index].question
    currentAnswer2=historyQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
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
    currentQuestion2=generalQ2[index].question
    currentAnswer2=generalQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
    general.classList.add("clicked");
    }
  })
})

function enable() {
  document.querySelector("#guess").classList.remove("disabled");
  document.querySelector("#pass").classList.remove("disabled");
}

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

questionDisplay1.addEventListener("console.log(currentQuestion1)", ()=>{
    alert("you pass")
  })

questionDisplay1.addEventListener("console.log(currentQuestion1)", ()=>{
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
  let userInput1=document.querySelector("#userAnswer1").value
  if (userInput1.toLowerCase()===currentAnswer1.toLowerCase()) {
    addPoints();
    updateScoreDisplay();

    console.log(`Player1:${player1Score}, Player2:${player2Score}`); 
  } else if (userInput1.toLowerCase()!=currentAnswer1.toLowerCase()) {
    takeAwayPoints();
    updateScoreDisplay();
    console.log(`Player1:${player1Score}, Player2:${player2Score}`);
   // alert("Incorrect answer");
    changePlayers();
  }
})

guess.addEventListener("click", ()=>{
  let userInput2=document.querySelector("#userAnswer1").value
  if (userInput2.toLowerCase()===currentAnswer2.toLowerCase()) {
    addPoints();
    updateScoreDisplay();

    console.log(`Player1:${player1Score}, Player2:${player2Score}`); 
  } else if (userInput2.toLowerCase()!=currentAnswer2.toLowerCase()) {
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
    enable();
  } else if (window.location.pathname === "/round-2.html") {
    document.querySelector("#turnRound").textContent = `Player ${currentPlayer}'s turn!`; // turns
    updateScoreDisplay();
    enable();
  } else if (window.location.pathname === "/final-jeopardy.html") {
    document.querySelector("#turnRound").textContent = `Player ${currentPlayer}'s turn!`; // turns
    updateScoreDisplay();
    enable();
  }
});
