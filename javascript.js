// Grab everything with the input element
const buttons = document.querySelectorAll('input')

// Initialize score
let computerScore = 0
let playerScore = 0

// Function to disable the buttons when the game is over forcing a refresh
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// Computer's random selection
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

// A single round of rock paper scissors calling computer play function for computer selection
function playRound(playerSelection){
    
    let computerSelection = computerPlay()
    let result =""
    
    //if statement to lay out which hands beat which 
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')){
        playerScore += 1
        // Capitalize first letter of player selection
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        result = `You win! ${playerSelection} beats ${computerSelection}! <br>
        Player Score: ${playerScore}<br>Computer Score: ${computerScore}`

        
        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
        
    } else if (playerSelection === computerSelection){
        result = `You tie! You both played ${playerSelection}!<br>
        Player Score: ${playerScore}<br>Computer Score: ${computerScore}`
        
       
    } else {
        computerScore += 1
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
        result = `You lose! ${computerSelection} beats ${playerSelection}<br>
        Player Score: ${playerScore}<br>Computer Score: ${computerScore}`
        
        if (computerScore === 5){
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
        
    }
    document.getElementById('result').innerHTML = result
}




// Function to keep score
// function game(){
    
       
//         let winner = playRound()
        
//         if(winner === 'you'){
//             playerScore += 1
//         } else if (winner === 'computer'){
//             computerScore += 1
//         }
    
  
//     if (playerScore === 5){
//         console.log(`Game over! Congrats, you beat the computer ${playerScore} to ${computerScore}. The scores have now reset`)
//         computerScore = 0
//         playerScore = 0
//     } else if (computerScore === 5){
//         console.log(`Game over! Woops, you lost to the computer ${computerScore} to ${playerScore}. The scores have now reset`)
//         computerScore = 0
//         playerScore = 0
//     }
// }

// Take the value from the button and input it for playerSelection in playRound function
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})