let showAllRolls = document.querySelector("#Showallrolls");
let rollButton = document.querySelector("#rollbutton");
let totalRolls = document.querySelector("#totalrolls");
let diceRoller = document.querySelector("#diceroller");
let rollResults = document.querySelector("#roll-results");
let dieRolls = [];

function giveMeRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

rollButton.addEventListener("click", function () {
  let numberOfDice = diceRoller.value;
  console.log("dice rolled!");
  console.log(numberOfDice);
  let index = 0;
  dieRolls = [];
  diceRoller.value = "";

  while (index < numberOfDice) {
    dieRolls.push("The number rolled: " + giveMeRandomNumber());
    index = index + 1;
  }
  console.log(dieRolls);
});

showAllRolls.addEventListener("click", function () {
  rollResults.innerHTML = "";
  let index = 0;
  while (index < dieRolls.length) {
    rollResults.innerHTML += "<li>" + dieRolls[index] + "</li>";
    index = index + 1;
  }
});
