const getComputerChoice = () => {
  let val = Math.random();
  if (val < 0.33) {
    return "Rock";
  } else if (val > 0.33 && val < 0.66) {
    return "Paper";
  } else {
    return "Scissor";
  }
};

const printResult = (user, comp) => {
  if (user == "Rock") {
    if (comp == "Rock") {
      return "Draw";
    } else if (comp == "Scissor") {
      return "User wins";
    } else {
      return "Computer wins";
    }
  } else if (user == "Paper") {
    if (comp == "Paper") {
      return "Draw";
    } else if (comp == "Rock") {
      return "User wins";
    } else {
      return "Computer wins";
    }
  } else {
    if (comp == "Scissor") {
      return "Draw";
    } else if (comp == "Rock") {
      return "Computer wins";
    } else {
      return "User wins";
    }
  }
};
let computerWin = 0;
let userWin = 0;
const result = document.querySelector("h3");
const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissor = document.querySelector("#Scissor");

let userInput = "";
btnRock.addEventListener("click", () => {
  userInput = "Rock";
  let computerInput = getComputerChoice();
  console.log(`User chose ${userInput}`);
  console.log(`Computer chose ${computerInput}`);
  result.textContent = printResult(userInput, computerInput);
});

btnPaper.addEventListener("click", () => {
  userInput = "Paper";
  let computerInput = getComputerChoice();
  console.log(`User chose ${userInput}`);
  console.log(`Computer chose ${computerInput}`);
  result.textContent = printResult(userInput, computerInput);
});

btnScissor.addEventListener("click", () => {
  userInput = "Scissor";
  let computerInput = getComputerChoice();
  console.log(`User chose ${userInput}`);
  console.log(`Computer chose ${computerInput}`);
  result.textContent = printResult(userInput, computerInput);
});

/*for(let i=1;i<=5;i++){
let userchoice = getUserChoice();
let computerchoice = getComputerChoice();
let result = printResult(userchoice,computerchoice);

if(result == 'User wins'){
    userwin++;
    alert(`Round ${i} : You Win`);

}
else if(result == 'Computer wins'){
    computerwin++;
    alert(`Round ${i} : Computer Wins`);
}
else{
    alert(`Round ${i} : Draw`);
}
alert(`Current Standings : You -> ${userwin} | Computer -> ${computerwin}`);
}

if(userwin > computerwin){
    alert("You won");
}
else if(computerwin > userwin)
{
    alert("Computer win");
}
else
{
    alert("It's a draw");
}
*/
