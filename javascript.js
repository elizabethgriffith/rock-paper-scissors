//Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
function computerPlay(){
    //generate random number between 0 and 1
    let randNum = Math.random()
    //assign to RPS based on < .33 and < .67
    if (randNum < 0.33){
        return "rock"
    } else if (randNum < 0.67) {
        return "paper"
    } else {
        return "scissors"
    }
}




//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).



//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function rockPaperScissors(){
    let playerSelection = prompt('Please enter your play :)').toLowerCase()
    let computerSelection = computerPlay()

    //if statement to lay out which hands beat which 
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock'){
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === computerSelection){
        return `You tie! You both played ${playerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    //output string declaring winner
}

//Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

console.log(rockPaperScissors())

//Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
function game(){
    for (let i = 1 ; i <= 5 ; i++){
        console.log(rockPaperScissors())
    }

}
game()
