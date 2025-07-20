const getComputerChoice = () => {
    let val = Math.random();
    if(val < 0.33)
    {
        return "Rock";
    }
    else if(val > 0.33 && val < 0.66)
    {
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

const getUserChoice = () => {
    let userInput = prompt("Choose between Rock,Paper and Scissors");
    return userInput;
}

const printResult = (user,comp) => {
    if(user == 'Rock')
    {
        if(comp == 'Rock')
        {
            return 'Draw';
        }
        else if(comp = 'Scissors')
        {
            return 'User wins';
        }
        else
        {
            return 'Computer wins';
        }
    }
    else if(user == 'Paper')
    {
        if(comp == 'Paper')
        {
            return 'Draw';
        }
        else if(comp == 'Rock')
        {
            return 'User wins';
        }
        else{
            'Computer wins';
        }
    }
    else
    {
        if(comp == 'Scissors')
        {
            return 'Draw';
        }
        else if(comp == 'Rock')
        {
            return 'Computer wins';
        }
        else
        {
            return 'User wins';
        }
    }
}
let computerwin = 0
let userwin = 0;
for(let i=1;i<=5;i++){
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

