const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function draw(compChoice, usrChoice) {
  result_div.innerHTML = "<p>You chose <span id='draw'>" + usrChoice + "</span>. Computer Chose <span id='draw'>" + compChoice + "</span>.</p>";
  console.log("The round is a draw");
}

function win(compChoice, usrChoice) {
  result_div.innerHTML = "<p>You chose <span id='win'>" + usrChoice + "</span>. Computer Chose <span id='lose'>" + compChoice + "</span>.</p>";
  console.log("You won this round!! Congratulations!!!");
}

function lose(compChoice, usrChoice) {
  result_div.innerHTML = "<p>You chose <span id='lose'>" + usrChoice + "</span>. Computer Chose <span id='win'>" + compChoice + "</span>.</p>";
  console.log("You lost the round! Try again!");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  if (computerChoice == userChoice) {
    draw(computerChoice, userChoice);
  } else if (computerChoice === "rock" && userChoice === "paper"){
    win(computerChoice, userChoice);
  } else if  (computerChoice === "paper" && userChoice === "scissors") {
    win(computerChoice, userChoice);
  } else if  (computerChoice === "rock" && userChoice === "scissors") {
    lose(computerChoice, userChoice);
  } else if  (computerChoice === "scissors" && userChoice === "paper") {
    lose(computerChoice, userChoice);
  } else if  (computerChoice === "paper" && userChoice === "rock") {
    lose(computerChoice, userChoice);
  } else if  (computerChoice === "scissors" && userChoice === "rock") {
    win (computerChoice, userChoice);
  } else {
    console.log("Invalid choice try again");
  }
}

rock_div.addEventListener('click', function(){
  game("rock");
});


paper_div.addEventListener('click', function(){
  game("paper");
});

scissors_div.addEventListener('click', function(){
  game("scissors");
});
