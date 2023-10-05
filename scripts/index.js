// jeop plan https://docs.google.com/document/d/1c04c2d0jmkFQ-dfVAeHXimEf9s4ej6K3ss096c9ea_k/edit

// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

const natureQ = placeholderQuestions.filter((placeholderQuestions) => placeholderQuestions.category === "Nature");

const natureQ1 = natureQ.slice(0, 5);
const natureQ2 = natureQ.slice(5, 10);

console.log(natureQ1)
console.log(natureQ2)

const animalQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="Animals");

const animalQ1 = animalQ.slice(0, 5);
const animalQ2 = animalQ.slice(5, 10);

console.log(animalQ1);
console.log(animalQ2);

const computerQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="Computers");

const computerQ1 = computerQ.slice(0, 5);
const computerQ2 = computerQ.slice(5, 10);

console.log(computerQ1);
console.log(computerQ2);

const mythologyQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="Mythology");

const mythologyQ1 = mythologyQ.slice(0, 5);
const mythologyQ2 = mythologyQ.slice(5, 10);

console.log(mythologyQ1);
console.log(mythologyQ2);

const historyQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="History");

const historyQ1 = historyQ.slice(0, 5);
const historyQ2 = historyQ.slice(5, 10);

console.log(historyQ1);
console.log(historyQ2);

const generalQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="General");

const generalQ1 = generalQ.slice(0, 5);
const generalQ2 = generalQ.slice(5, 10);

console.log(generalQ1);
console.log(generalQ2);

const finalQ= placeholderQuestions.filter((placeholderQuestions)=> placeholderQuestions.category==="Final");
console.log(finalQ);




/* 
<table>
      <tr>
        <th>Method</th>
        <th>Node List, HTML Collection, Element</th>
        <th>Single or Multiple</th>
        <th>Loop through it?</th>
      </tr>
      <tr>
        <td>getElementByID()</td>
        <td>Element</td>
        <td>Single</td>
        <td>NA</td>
      </tr>
      <tr>
        <td>getElementsByClassName()</td>
        <td>HTML Collection</td>
        <td>Multiple</td>
        <td>Yes - but not .forEach()</td>
      </tr>
      <tr>
        <td>getElementsByTagName()</td>
        <td>HTML Collection</td>
        <td>Multiple</td>
        <td>Yes - but not .forEach()</td>
      </tr>
      <tr>
        <td>querySelector()</td>
        <td>Element</td>
        <td>Single</td>
        <td>NA</td>
      </tr>

      <tr>
        <td>querySelectorAll()</td>
        <td>Node List</td>
        <td>Multiple</td>
        <td>Yes - to include .forEach()</td>
      </tr>
    </table>
*/