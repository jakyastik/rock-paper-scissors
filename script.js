let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;

function getComputerChoice() {
  let computerChoiceNum = Math.floor(Math.random() * 3) + 1;

  if (computerChoiceNum == 1) {
    computerChoice = "Rock";
  } else if (computerChoiceNum == 2) {
    computerChoice = "Paper";
  } else if (computerChoiceNum == 3) {
    computerChoice = "Scissors";
  }
}

function getHumanChoice() {
  humanChoice = prompt("What's your Choice?");
}

function playRound() {
  getComputerChoice();
  getHumanChoice();

  if ((humanChoice == "Rock") & (computerChoice == "Rock")) {
    console.log("It's a tie");
    humanScore = humanScore + 1;
    computerScore = computerScore + 1;
  } else if ((humanChoice == "Rock") & (computerChoice == "Paper")) {
    console.log("Computer Wins");
    humanScore = humanScore + 0;
    computerScore = computerChoice + 1;
  } else if ((humanChoice == "Rock") & (computerChoice == "Scissors")) {
    console.log("Human Wins");
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
  } else if ((humanChoice == "Paper") & (computerChoice == "Rock")) {
    console.log("Human Wins");
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
  } else if ((humanChoice == "Paper") & (computerChoice == "Paper")) {
    console.log("It's a tie");
    humanScore = humanScore + 1;
    computerScore = computerScore + 1;
  } else if ((humanChoice == "Paper") & (computerChoice == "Scissors")) {
    console.log("Computer Wins");
    humanScore = humanScore + 0;
    computerScore = computerScore + 1;
  } else if ((humanChoice == "Scissors") & (computerChoice == "Rock")) {
    console.log("Computer Wins");
    humanScore = humanScore + 0;
    computerScore = computerScore + 1;
  } else if ((humanChoice == "Scissors") & (computerChoice == "Paper")) {
    console.log("Human Wins");
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
  } else if ((humanChoice == "Scissors") & (computerChoice == "Scissors")) {
    console.log("It's a tie");
    humanScore = humanScore + 0;
    computerScore = computerScore + 0;
  }
}

function playGame() {
  alert("Let's play Rock, Paper, Scissors!");
  for (i = 0; i <= 4; i++) {
    playRound();
    console.log(humanScore);
    console.log(computerScore);
  }

  if (humanScore > computerScore) {
    console.log("You Win. Good Job");
  } else if (humanScore == computerScore) {
    console.log("It's a tie. Better luck next time.");
  } else {
    console.log("The computer wins.");
  }
}

playGame();
