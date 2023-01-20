let possibleChoices = ["rock", "paper", "scissors"]
let playerWinCount = 0
let computerWinCount = 0
const imgs = document.querySelector(".imgs")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const playerObjCount = document.querySelector("#player")
const compObjCount = document.querySelector("#comp")
const reset = document.querySelector(".reset")
const comp = document.querySelector(".comp")
const human = document.querySelector(".human")
const scissorsy = document.querySelector("#scissorsy")
const rocky = document.querySelector("#rocky")
const papery = document.querySelector("#papery")


rock.addEventListener("mouseenter", () => {
    rock.classList.add("hover")
})
paper.addEventListener("mouseenter", () => {
    paper.classList.add("hover")
})
scissors.addEventListener("mouseenter", () => {
    scissors.classList.add("hover")
})
rock.addEventListener("mouseleave", () => {
    rock.classList.remove("hover")
})
paper.addEventListener("mouseleave", () => {
    paper.classList.remove("hover")
})
scissors.addEventListener("mouseleave", () => {
    scissors.classList.remove("hover")
})


function getComputerChoice() {

    let comp = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
    return comp

}

function singleGame(computerSelection, playerSelection) {
    switch (true) {
        case (computerSelection === playerSelection):
            document.querySelector("h1").innerText = "it is a tie!"
            break;
        case (computerSelection === "rock" && playerSelection === "paper"):
            playerWinCount++
            document.querySelector("h1").innerText = "You won this round!"
            playerObjCount.innerText = playerWinCount
            break;

        case (computerSelection === "paper" && playerSelection === "rock"):
            computerWinCount++
            document.querySelector("h1").innerText = "You lost this round!"
            compObjCount.innerText = computerWinCount
            break;

        case (computerSelection === "paper" && playerSelection === "scissors"):
            playerWinCount++
            document.querySelector("h1").innerText = "You won this round!"
            playerObjCount.innerText = playerWinCount
            break;

        case (computerSelection === "scissors" && playerSelection === "paper"):
            computerWinCount++
            document.querySelector("h1").innerText = "You lost this round!"
            compObjCount.innerText = computerWinCount

            break;

        case (computerSelection === "scissors" && playerSelection === "rock"):
            playerWinCount++
            document.querySelector("h1").innerText = "You won this round!"
            playerObjCount.innerText = playerWinCount
            break;

        case (computerSelection === "rock" && playerSelection === "scissors"):
            computerWinCount++
            document.querySelector("h1").innerText = "You lost this round!"
            compObjCount.innerText = computerWinCount

            break;

    }

}
human.addEventListener("click", imgy,)

function imgy(e) {
    let theId = e.target.id
    if (theId === "rock") {
        rock.classList.remove("click")
        setTimeout(() => {
            rock.classList.add("click")

        }, 200)
        paper.classList.remove("click")
        scissors.classList.remove("click")


    }
    else if (theId === "paper") {
        paper.classList.remove("click")

        setTimeout(() => {
            paper.classList.add("click")
            0
        }, 200)
        rock.classList.remove("click")
        scissors.classList.remove("click")


    }
    else if (theId === "scissors") {
        rock.classList.remove("click")
        paper.classList.remove("click")
        scissors.classList.remove("click")
        setTimeout(() => {
            scissors.classList.add("click")

        }, 200)
    }

    let ask = getComputerChoice()
    if (e.target.id) {
        if (ask === "rock") {
            rocky.classList.remove("change")
            setTimeout(() => {
                rocky.classList.add("change")

            }, 200)
            papery.classList.remove("change")
            scissorsy.classList.remove("change")
            rocky.classList.remove("change")

        }
        else if (ask === "paper") {
            setTimeout(() => {
                papery.classList.add("change")
                0
            }, 200)
            rocky.classList.remove("change")
            scissorsy.classList.remove("change")
            papery.classList.remove("change")

        }
        else if (ask === "scissors") {
            rocky.classList.remove("change")
            papery.classList.remove("change")
            scissorsy.classList.remove("change")
            setTimeout(() => {
                scissorsy.classList.add("change")

            }, 200)
        }
    }
    singleGame(ask, theId)





    end()

}


function end() {
    if (playerWinCount >= 5 || computerWinCount >= 5) {
        human.removeEventListener("click", imgy)

        if (playerWinCount === computerWinCount) {
            document.querySelector("h1").innerHTML = `You scored ${playerWinCount}, the computer scored ${computerWinCount}<br> <P style="text-align: center; margin-top:5px">Tie</P>`
        }

        else if (playerWinCount <= computerWinCount) {
            document.querySelector("h1").innerHTML = `You scored ${playerWinCount}, the computer scored ${computerWinCount}<br><P style="text-align: center; margin-top:5px">You lost</P>`

        }

        else {
            document.querySelector("h1").innerHTML = `You scored ${playerWinCount}, the computer scored ${computerWinCount}<br style> <P style="text-align: center; margin-top:5px">You won</P>`

        }
        reseter()



    }

}
function reseter() {
    const button = document.createElement("button")
    button.innerText = "reset"
    button.classList.add("list")
    reset.append(button)
    button.addEventListener("click", () => {
        window.location.reload();

    })

}