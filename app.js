//Read in buttons
const playerButtons = document.querySelectorAll('.playerButton');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const score = document.querySelectorAll('.score');
const playingScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.computerScore');
const textResult = document.querySelector('.textResult');
const restart = document.querySelector('.restart');
const cheat = document.querySelector('.cheat');


//Adding button clicks and reading it in


restart.addEventListener('click', () => location.reload());

cheat.addEventListener('click', () => {
    if(playerScore < 5) {
        playerScore = 5;
        playingScore.textContent =  `${playerScore}`;
        cpuScore.textContent = '0';
        textResult.textContent = `You have won! You have cheated your way to victory! If only this worked in real life. \nPlayer:${playerScore} - Computer: 0`;
    }
    else {
        textResult.textContent = 'You have won!';
    }
})

//Function for getting computer choice of RPS
function getComputerChoice(){
    let choice = getRandomIntInclusive(1, 3);
    switch(choice){

        case 1:
            var decision = 'rock';
            break;
        case 2:
           var decision = 'paper';
            break;
        case 3: 
            var decision = 'scissors';
            break;
    }
    return decision;
}

//Function to randomize computer choice
function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

    rockBtn.onclick = function() {
        console.log('Hello!');
        playerSelection = 'rock';
        playRound('rock');
    }

    paperBtn.onclick = function() {
        console.log('Hello!');
        playerSelection = 'paper';
        playRound('paper');
    }

    scissorBtn.onclick = function() {
        console.log('Hello!');
        playerSelection = 'scissors';
        playRound('scissors');
    }

//Function for round of RPS.
function playRound(playerSelection){
if (playerScore == 5){
    textResult.textContent = 'You\'ve won congrats!';
    return;
    } else if (computerScore == 5){
    textResult.textContent = 'You\'ve lost. Better luck next time.';
    return;
} else {
   computerSelection = getComputerChoice();
    if (playerSelection == computerSelection)
    {

        textResult.textContent = `You have tied! Your choice of ${playerSelection} is the same as your opponent's choice of ${computerSelection}.\nPlayer:${playerScore} - Computer:${computerScore}`;
        return;
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock'))
        {
            computerScore++;
            cpuScore.textContent = `${computerScore}`;
            if (computerScore == 5){
                textResult.textContent = 'You\'ve lost. Better luck next time.';
                return;
            }
            textResult.textContent = `You have lost! Your opponent's choice of ${computerSelection} beats your choice of ${playerSelection}.\nPlayer:${playerScore} - Computer:${computerScore}`;
            return;
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
                    playerScore++;
                    playingScore.textContent = `${playerScore}`;
                    if (playerScore == 5){
                        textResult.textContent = 'You\'ve won congrats!';
                        return;
                    }
                    textResult.textContent = `You have won! Your choice of ${playerSelection} beats your opponent's choice of ${computerSelection}.\nPlayer:${playerScore} - Computer:${computerScore}`;
                    return;
                }
                else {
                    return 'Please select a choice of rock, paper, or scissors';
                }
            }

}
//Function for game of RPS (First to 5 rounds)

function game(){
    for (playerScore, computerScore; playerScore < 5, computerScore < 5;){
    
        playRound(playerSelection);
 
        if (playerScore == 5 || computerScore == 5){
        break;
    }
}
}


var playerScore = 0;
var computerScore = 0;
var playerSelection;



//THE PROBLEM:
//Write a RPS game that allows the player to click a button for Rock, Paper, or Scissors
    //
//Make it first to 5 wins vs a CPU
//Make the CPU choose choices randomly
//Display a score counter to show who is in the lead
//Have a restart button to allow players to restart the game
//Have a cheat button to allow players to get free points

