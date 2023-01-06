let possibleChoices = ["rock", "paper", "scissors"]
let playerWinCount = 0
let computerWinCount = 0
function getComputerChoice() {

    let comp = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return comp
}


function getPlayerChoice() {

    let ask = (prompt("choice between rock paper scissors")).toLocaleLowerCase()
    return ask

}

function singleGame(computerSelection, playerSelection) {
    switch (true) {
        case (computerSelection === playerSelection):
            alert("draw")
            break;
        case (computerSelection === "rock" && playerSelection === "paper"):
            alert(`You choice ${playerSelection} And the computer choice rock, You win ! `)
            playerWinCount++
            break;

        case (computerSelection === "paper" && playerSelection === "rock"):
            alert(`You choice ${playerSelection} And the computer choice rock, You lose! `)
            computerWinCount++
            break;

        case (computerSelection === "paper" && playerSelection === "scissors"):
            alert(`You choice ${playerSelection} And the computer choice rock, You win! `)
            playerWinCount++
            break;

        case (computerSelection === "scissors" && playerSelection === "paper"):
            alert(`You choice ${playerSelection} And the computer choice rock, You lose! `)
            computerWinCount++
            break;

        case (computerSelection === "scissors" && playerSelection === "rock"):
            alert(`You choice ${playerSelection} And the computer choice rock, You win! `)
            playerWinCount++
            break;

        case (computerSelection === "rock" && playerSelection === "scissors"):
            alert(`You choice ${playerSelection} And the computer choice rock, You lose! `)
            computerWinCount++

            break;

        default:
            alert("invalid choice")
    }

}

function game() {
     singleGame(getComputerChoice(), getPlayerChoice())
}
for (let i = 0; i < 5; i++) {
    game()
}

if (playerWinCount > computerWinCount) {
    alert(`you scored ${playerWinCount}, the computer scored ${computerWinCount}, congratulations you won the game !`)
}
else if (playerWinCount === computerWinCount) {
    alert(`you scored ${playerWinCount}, the computer scored ${computerWinCount}, it is a draw !`)
}
else {
    alert(`you scored ${playerWinCount}, the computer scored ${computerWinCount}, you lost the game !`)
}