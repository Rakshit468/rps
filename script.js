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

const reset = () => {
  computerWin = 0;
  userWin = 0;
};

const roundResult = document.querySelector("h3");
const btns = document.querySelectorAll("button");
const scoreBoard = document.querySelector(".scoreboard");

let userInput = "";
btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.id == "Rock") {
      userInput = "Rock";
    } else if (event.target.id == "Paper") {
      userInput = "Paper";
    } else userInput = "Scissor";
    let computerInput = getComputerChoice();
    console.log(`User chose ${userInput}`);
    console.log(`Computer chose ${computerInput}`);
    let result = printResult(userInput, computerInput);
    roundResult.textContent = result;
    if (result == "User wins") userWin++;
    else if (result == "Computer wins") computerWin++;
    scoreBoard.textContent = `Current Scoreboard => User : ${userWin} | Computer : ${computerWin}`;
    if (userWin == 5) {
      alert("Yay you won! Wanna play another one?");
      reset();
    } else if (computerWin == 5) {
      alert("You are a sore loser, wanna try again?");
      reset();
    }
  });
});

/*btnPaper.addEventListener("click", () => {
  userInput = "Paper";
  let computerInput = getComputerChoice();
  console.log(`User chose ${userInput}`);
  console.log(`Computer chose ${computerInput}`);
  let result = printResult(userInput, computerInput);
  roundResult.textContent = result;
  if (result == "User wins") userWin++;
  else if (result == "Computer wins") computerWin++;
  scoreBoard.textContent = `Current Scoreboard => User : ${userWin} | Computer : ${computerWin}`;
  if (userWin == 5) {
    alert("Yay you won! Wanna play another one?");
    reset();
  } else if (computerWin == 5) {
    alert("You are a sore loser, wanna try again?");
    reset();
  }
});

btnScissor.addEventListener("click", () => {
  userInput = "Scissor";
  let computerInput = getComputerChoice();
  console.log(`User chose ${userInput}`);
  console.log(`Computer chose ${computerInput}`);
  let result = printResult(userInput, computerInput);
  roundResult.textContent = result;
  if (result == "User wins") userWin++;
  else if (result == "Computer wins") computerWin++;
  scoreBoard.textContent = `Current Scoreboard => User : ${userWin} | Computer : ${computerWin}`;
  if (userWin == 5) {
    alert("Yay you won! Wanna play another one?");
    reset();
  } else if (computerWin == 5) {
    alert("You are a sore loser, wanna try again?");
    reset();
  }
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
