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

let questionDisplay1=document.querySelector("#questionDisplay1")
//let questionDisplay2=document.querySelector("#questionDisplay2")


let currentQuestion1 = ""
let currentAnswer1 = ""

let currentQuestion2 = ""
let currentAnswer2 = ""

/* let player1Score=0;
let player2Score=0; */
 
natureCat1.forEach((nature, index)=>{
  nature.addEventListener("click",()=>{
    if (window.location.pathname === "/round-1.html") {
    console.log(natureQ1[index].question)
    console.log(natureQ1[index].answer)
    currentQuestion1=natureQ1[index].question
    currentAnswer1=natureQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
    }
  })
});

animalCat1.forEach((animal, index)=> {
  animal.addEventListener("click",()=>{
    if (window.location.pathname === "/round-1.html") {
    console.log(animalQ1[index].question)
    console.log(animalQ1[index].answer)
    currentQuestion1=animalQ1[index].question
    currentAnswer1=animalQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
    }
  })
});

computerCat1.forEach((computers, index)=> {
  computers.addEventListener("click",()=>{
    if (window.location.pathname === "/round-1.html") {
    console.log(computerQ1[index].question)
    console.log(computerQ1[index].answer)
    currentQuestion1=computerQ1[index].question
    currentAnswer1=computerQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
    }
  })
})

mythologyCat1.forEach((mythology, index)=> {
  mythology.addEventListener("click",()=>{
    if (window.location.pathname === "/round-1.html") {
    console.log(mythologyQ1[index].question)
    console.log(mythologyQ1[index].answer)
    currentQuestion1=mythologyQ1[index].question
    currentAnswer1=mythologyQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
    }
  })
})

historyCat1.forEach((history, index)=> {
  history.addEventListener("click",()=>{
    if (window.location.pathname === "/round-1.html") {
    console.log(historyQ1[index].question)
    console.log(historyQ1[index].answer)
    currentQuestion1=historyQ1[index].question
    currentAnswer1=historyQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
    document.querySelector("#guess").classList.remove("disabled") ; 
    //call function enable
    }
  })
})

generalCat1.forEach((general, index)=> {
  general.addEventListener("click",()=>{
    if (window.location.pathname === "/round-1.html") {
    console.log(generalQ1[index].question)
    console.log(generalQ1[index].answer)
    currentQuestion1=generalQ1[index].question
    currentAnswer1=generalQ1[index].answer
    questionDisplay1.textContent=currentQuestion1;
    }
  })
})

/* natureCat2.forEach((nature, index)=>{
  nature.addEventListener("click",()=>{
    if (window.location.pathname === "/round-2.html") {
    console.log(natureQ2[index].question)
    console.log(natureQ2[index].answer)
    currentQuestion2=natureQ2[index].question
    currentAnswer2=natureQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
    }
  })
});

animalCat2.forEach((animal, index)=> {
  animal.addEventListener("click",()=>{
    if (window.location.pathname === "/round-2.html") {
    console.log(animalQ2[index].question)
    console.log(animalQ2[index].answer)
    currentQuestion2=animalQ2[index].question
    currentAnswer2=animalQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
    }
  })
});

computerCat2.forEach((computers, index)=> {
  computers.addEventListener("click",()=>{
    if (window.location.pathname === "/round-2.html") {
    console.log(computerQ2[index].question)
    console.log(computerQ2[index].answer)
    currentQuestion2=computerQ2[index].question
    currentAnswer2=computerQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
    }
  })
})

mythologyCat2.forEach((mythology, index)=> {
  mythology.addEventListener("click",()=>{
    if (window.location.pathname === "/round-2.html") {
    console.log(mythologyQ2[index].question)
    console.log(mythologyQ2[index].answer)
    currentQuestion2=mythologyQ2[index].question
    currentAnswer2=mythologyQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
    }
  })
})

historyCat2.forEach((history, index)=> {
  history.addEventListener("click",()=>{
    if (window.location.pathname === "/round-2.html") {
    console.log(historyQ2[index].question)
    console.log(historyQ2[index].answer)
    currentQuestion2=historyQ2[index].question
    currentAnswer2=historyQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
    document.querySelector("#guess").classList.remove("disabled") ; 
    //call function enable
    }
  })
})

generalCat2.forEach((general, index)=> {
  general.addEventListener("click",()=>{
    if (window.location.pathname === "/round-2.html") {
    console.log(generalQ2[index].question)
    console.log(generalQ2[index].answer)
    currentQuestion2=generalQ2[index].question
    currentAnswer2=generalQ2[index].answer
    questionDisplay2.textContent=currentQuestion2;
    }
  })
}) */

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

  function correctAnswerSubmitted() {
  console.log("function works");
}

/* for (let index = 0; index < natureCat.length; index++) {
  const div = natureCat[index];
  
  div.addEventListener("click", (e) => {
    currentQuestion = natureQ1[index].question;
    currentAnswer = natureQ1[index].answer; */

    // You can also perform other actions with the current question and answer here
/*     console.log(`Current Question: ${currentQuestion}`);
    console.log(`Current Answer: ${currentAnswer}`);
  });
}
 */
/* function revealQuestionAndAnswer() {
  console.log(currentQuestion);
  console.log(currentAnswer);
}
*/

questionDisplay1.addEventListener("console.log(currentQuestion1)", ()=>{
    alert("you pass")
  })

/* questionDisplay2.addEventListener("console.log(currentQuestion2)", ()=>{
    alert("you pass")
  }) */

guess.addEventListener("click", ()=>{
    let userInput=document.querySelector("#userAnswer").value
    if (userInput.toLowerCase()===currentAnswer1.toLowerCase()) {
      correctAnswerSubmitted()
    } else {
      alert("incorrect answer")
    }
})




pass.addEventListener("click", ()=>{
  alert("you pass")
})

next.addEventListener("click", ()=>{
  alert("you go to the next round")
})

// turns for round 1
window.addEventListener("load", () => {
  if (window.location.pathname === "/round-1.html") {
    document.querySelector("#turn").textContent = "Player 1's turn!";
    enable();
  } else {
    document.querySelector("#turn").textContent = "Player 2's turn!";
    enable();
  }
});

