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
    if (computerSelection === playerSelection) {
        return `you choice ${playerSelection} and computer also choice ${computerSelection} it is draw`
    }

    else if (computerSelection === "rock" && playerSelection === "paper") {

        playerWinCount++
        return `You choice ${playerSelection} And the computer choice ${computerSelection}, You win the round !
         `


    }
    else if (computerSelection === "paper" && playerSelection === "rock") {

        computerWinCount++
        return `You choice ${playerSelection} And the computer choice ${computerSelection}, You lose the round ! `

    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerWinCount++
        return `You choice ${playerSelection} And the computer choice ${computerSelection}, You win the round !`
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerWinCount++
        return `You choice ${playerSelection} And the computer choice ${computerSelection}, You lose the round !`
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerWinCount++
        return `You choice ${playerSelection} And the computer choice ${computerSelection}, You win the round! `
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerWinCount++
        return `You choice ${playerSelection} And the computer choice ${computerSelection}, You lost the round ! `
    }
    else {
        return "invalid"
    }

}

function game() {
    alert(singleGame(getComputerChoice(), getPlayerChoice()))
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

// switch (computerSelection, playerSelection) {
//     case computerSelection == playerSelection:
//         return "draw"
//     case computerSelection === "rock" && playerSelection === "paper":
//         return `You choice ${playerSelection} And the computer choice rock, You win ! `
//     case computerSelection === "paper" && playerSelection === "rock":
//         return `You choice ${playerSelection} And the computer choice rock, You lose ! `
//     case computerSelection === "paper" && playerSelection === "scissors":
//         return `You choice ${playerSelection} And the computer choice rock, You lose ! `
//     case computerSelection === "scissors" && playerSelection === "paper":
//         return `You choice ${playerSelection} And the computer choice rock, You win ! `
//     case computerSelection === "scissors" && playerSelection === "rock":
//         return `You choice ${playerSelection} And the computer choice rock, You win ! `
//     case computerSelection === "rock" && playerSelection === "scissors":
//         return `You choice ${playerSelection} And the computer choice rock, You win ! `
//     default:
//         return "invalid choice"
// }