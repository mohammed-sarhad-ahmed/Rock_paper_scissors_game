let possibleChoices = ["rock", "paper", "scissors"]
let playerWinCount = 0
let computerWinCount = 0
let gameCount = 0
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const playerObjCount = document.querySelector("#player")
const compObjCount = document.querySelector("#comp")


function getComputerChoice() {

    let comp = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return comp
}

function singleGame(computerSelection, playerSelection) {
    switch (true) {
        case (computerSelection === playerSelection):
            break;
        case (computerSelection === "rock" && playerSelection === "paper"):
            playerWinCount++
            playerObjCount.innerText = playerWinCount
            break;

        case (computerSelection === "paper" && playerSelection === "rock"):
            computerWinCount++
            compObjCount.innerText = computerWinCount
            break;

        case (computerSelection === "paper" && playerSelection === "scissors"):
            playerWinCount++
            playerObjCount.innerText = playerWinCount
            break;

        case (computerSelection === "scissors" && playerSelection === "paper"):
            computerWinCount++
            compObjCount.innerText = computerWinCount

            break;

        case (computerSelection === "scissors" && playerSelection === "rock"):
            playerWinCount++
            playerObjCount.innerText = playerWinCount
            break;

        case (computerSelection === "rock" && playerSelection === "scissors"):
            computerWinCount++
            compObjCount.innerText = computerWinCount

            break;

    }

}

rock.addEventListener("click", (e) => {
    gameCount++
    console.log(gameCount)
    singleGame(getComputerChoice(), "rock")
    end()
})
paper.addEventListener("click", (e) => {
    gameCount++
    console.log(gameCount)
    singleGame(getComputerChoice(), "paper")
    end()
})
scissors.addEventListener("click", (e) => {
    gameCount++
    console.log(gameCount)
    singleGame(getComputerChoice(), "scissors")
    end()
})
function end() {
    if (gameCount >= 5) {
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        if (playerWinCount === computerWinCount) {
            console.log("draw")
        }

        else if (playerWinCount <= computerWinCount) {
            console.log("you lose")

        }

        else {
            console.log("you win")

        }
        const reset = document.createElement("button")
        reset.innerText = "reset"
        document.querySelector(".buttons").append(reset)
        reset.addEventListener("click", () => {
            window.location.reload();

        })

    }

}
