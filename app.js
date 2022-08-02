
//Function for round of Rock Paper Scissors where player and computer gets a choice
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

//Function for round of RPS.
function playRound(){

    var roundOver;
   computerSelection = getComputerChoice();
   playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    if ((playerSelection == 'rock' && computerSelection == 'rock') || 
        (playerSelection == 'paper' && computerSelection == 'paper') || 
        (playerSelection == 'scissors' && computerSelection == 'scissors'))
    {

        return roundOver = `You have tied! Your choice of ${playerSelection} is the same as your opponent's choice of ${computerSelection}.\nPlayer:${playerScore} - Computer:${computerScore}`;
    
    } else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock'))
        {
            computerScore++;
            return roundOver = `You have lost! Your opponent's choice of ${computerSelection} beats your choice of ${playerSelection}.\nPlayer:${playerScore} - Computer:${computerScore}`;
    
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                (playerSelection == 'paper' && computerSelection == 'rock') ||
                (playerSelection == 'scissors' && computerSelection == 'paper')) {
                    playerScore++;
                    return roundOver = `You have won! Your choice of ${playerSelection} is the beats your opponent's choice of ${computerSelection}.\nPlayer:${playerScore} - Computer:${computerScore}`;
    
                }
                else {
                    return 'Please type a choice of rock, paper, or scissors';
                }

}
//Function for game of RPS (First to 5 rounds)

function game(){
    for (playerScore, computerScore; playerScore < 5, computerScore < 5;){
    
        console.log(playRound());
 
        if (playerScore == 5 || computerScore == 5){
        break;
    }
}
}


var playerScore = 0;
var computerScore = 0;
game();