function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function GetComputerChoice(){
    const randomNumber = randomIntFromInterval(1,3); // Generates a random number between 1 and 3

    if (randomNumber === 1){
        return "rock"
    }

    else if (randomNumber === 2){
        return "paper"
    }

    else {
        return "scissors"
    }
}

function GetUserChoice()
{
    let userChoice = prompt("Type your choice: rock, paper or scissors:");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;}
    else{
        console.log("Invalid choice try again !")
        return(null);
    }
}

function playRound(userchoice, computerchoice)
{
    const loseConditions= {rock:"paper", scissors:"rock", paper:"scissors"};
    if(userchoice === computerchoice)
    {
        console.log("Tie!.... Try again!");
        return 0;
    }
    else if(loseConditions[computerchoice] === userchoice){
        console.log("You win the round! " +  "You got a point!");
        //UserScore++
        return 1;
    }
    else if(loseConditions[userchoice] === computerchoice)
    {
        console.log("You lost the round! :(     Endless struggle");
        //CompScore++
        return -1;
    }
    else{
        console.log("Invalid input!");

    }
        

}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        
        let humanChoice = GetUserChoice();
        if (humanChoice === null) {
            console.log("Invalid input, please try again.");
            i--; 
            continue;
        }

        let computerChoice = GetComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);

        const result = playRound(humanChoice, computerChoice);

        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }
        
        console.log(`Score after Round ${i} - You: ${humanScore}, Computer: ${computerScore}`);
        console.log("----------");
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("It's a tie! Great game!");
    }
    
}


playGame();