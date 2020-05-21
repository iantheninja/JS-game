let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#comp-score");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const actionMessage_div = document.getElementById("action-message");



function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}


function draw(compChoice, usrChoice) {
  result_div.innerHTML = "<p>You chose <span id='draw'>" + usrChoice + "</span>. Computer Chose <span id='draw'>" + compChoice + "</span>.</p>";

  actionMessage_div.innerHTML = "The round is a draw, try again.";
}


function win(compChoice, usrChoice) {
  userScore += 1;

  userScore_span.innerText = userScore;

  result_div.innerHTML = "<p>You chose <span id='win'>" + usrChoice + "</span>. Computer Chose <span id='lose'>" + compChoice + "</span>.</p>";

  actionMessage_div.innerHTML = "You won this round!! Congratulations!!!"
}


function lose(compChoice, usrChoice) {
  computerScore += 1;

  computerScore_span.innerText = computerScore; 
  
  result_div.innerHTML = "<p>You chose <span id='lose'>" + usrChoice + "</span>. Computer Chose <span id='win'>" + compChoice + "</span>.</p>";

  actionMessage_div.innerHTML = "You lost this time, Try Again!"
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
