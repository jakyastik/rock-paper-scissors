let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;

function getHumanChoice(choice) {
  humanChoice = choice;
  getComputerChoice();
}

function getComputerChoice() {
  let computerChoiceNum = Math.floor(Math.random() * 3) + 1;

  if (computerChoiceNum == 1) {
    computerChoice = "Rock";
  } else if (computerChoiceNum == 2) {
    computerChoice = "Paper";
  } else if (computerChoiceNum == 3) {
    computerChoice = "Scissors";
  }

  playRound();
}

function rockChoice() {
  let choice = "Rock";
  getHumanChoice(choice);
}

function paperChoice() {
  let choice = "Paper";
  getHumanChoice(choice);
}

function scissorsChoice() {
  let choice = "Scissors";
  getHumanChoice(choice);
}

function playRound() {
  if ((humanChoice == "Rock") & (computerChoice == "Rock")) {
    humanScore = humanScore + 1;
    computerScore = computerScore + 1;
    console.log("It's a tie");
  } else if ((humanChoice == "Rock") & (computerChoice == "Paper")) {
    humanScore = humanScore + 0;
    computerScore = computerScore + 1;
    console.log("Computer Wins this Round");
  } else if ((humanChoice == "Rock") & (computerChoice == "Scissors")) {
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
    console.log("Human Wins this Round");
  } else if ((humanChoice == "Paper") & (computerChoice == "Rock")) {
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
    console.log("Human Wins this Round");
  } else if ((humanChoice == "Paper") & (computerChoice == "Paper")) {
    humanScore = humanScore + 1;
    computerScore = computerScore + 1;
    console.log("It's a tie");
  } else if ((humanChoice == "Paper") & (computerChoice == "Scissors")) {
    humanScore = humanScore + 0;
    computerScore = computerScore + 1;
    console.log("Computer Wins this Round");
  } else if ((humanChoice == "Scissors") & (computerChoice == "Rock")) {
    humanScore = humanScore + 0;
    computerScore = computerScore + 1;
    console.log("Computer Wins this Round");
  } else if ((humanChoice == "Scissors") & (computerChoice == "Paper")) {
    humanScore = humanScore + 1;
    computerScore = computerScore + 0;
    console.log("Human Wins this Round");
  } else if ((humanChoice == "Scissors") & (computerChoice == "Scissors")) {
    humanScore = humanScore + 0;
    computerScore = computerScore + 0;
    console.log("It's a tie");
  }

  let computerNumber = document.querySelector(".computerScore");
  computerNumber.innerHTML = computerScore;

  let humanNumber = document.querySelector(".humanScore");
  humanNumber.innerHTML = humanScore;

  if (humanScore == 10 || computerScore == 10) {
    document.querySelector(".messageBox").innerHTML = winnerLogic();
  }
}

function winnerLogic() {
  if (humanScore > computerScore) {
    return "Your Win. Play Again!";
  } else {
    return "Computer Wins. Better Luck Next Time!";
  }
}
