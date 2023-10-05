"use strict";

// Declare the empty variables to store the arrays in later
const textArrayLength = 25;
let greetingsArray;
let fact1Array;
let fact2Array;
let goodbyeArray;

// Fetch all the JSON files and store them in those variables

fetch("../Data/greetings.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (objectReturned) {
    greetingsArray = objectReturned;
  });

fetch("../Data/fact1.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (objectReturned) {
    fact1Array = objectReturned;
  });

fetch("../Data/fact2.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (objectReturned) {
    fact2Array = objectReturned;
  });

fetch("../Data/goodbye.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (objectReturned) {
    goodbyeArray = objectReturned;
  });

// randomNumberGenerator gives a number between 0 and 25.
function randomNumberGenerator() {
  let randomNumber = Math.floor(Math.random() * textArrayLength);
  return randomNumber;
}

// textChanger function then takes those arrays and prints their values via <p> tags

function textChanger() {
  let randomGreeting = randomNumberGenerator();
  let randomFact1 = randomNumberGenerator();
  let randomFact2 = randomNumberGenerator();
  let randomGoodbye = randomNumberGenerator();

  //Change the greetings text
  document.getElementById("firstText-Greeting").innerHTML =
    greetingsArray[randomGreeting];
  //Change the fact1 text
  document.getElementById("secondText-Fact1").innerHTML =
    fact1Array[randomFact1];
  //Change the fact2 text
  document.getElementById("thirdText-Fact2").innerHTML =
    fact2Array[randomFact2];
  //Change the goodbye text
  document.getElementById("fourthText-Goodbye").innerHTML =
    goodbyeArray[randomGoodbye];
}
