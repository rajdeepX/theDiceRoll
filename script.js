let randNo1 = Math.floor(Math.random() * 6 + 1)

let randImgP1 = document.querySelector(".imgP1")

randImgP1.setAttribute("src", `./images/dice${randNo1}.png`)



let randNo2 = Math.floor(Math.random() * 6 + 1)

let randImgP2 = document.querySelector(".imgP2")

randImgP2.setAttribute("src", `./images/dice${randNo2}.png`)


function winner() {
    if (randNo1 > randNo2) {
        return "Player 1 wins!"
    }
    else if (randNo1 < randNo2) {
        return "Player 2 wins!"
    }
    else if (randNo1 === randNo2) {
        return "Draw"
    }
}

document.querySelector("#title").innerHTML = winner();