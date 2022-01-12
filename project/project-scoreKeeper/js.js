const btn1 = document.querySelector("#player1btn");
const player1score = document.querySelector("#player1")
let winnerScore = 3;
let isGameOver = false;

function reset() {
    player1score.innerText = "0"
    player2score.innerText = "0"
    isGameOver = false
    player1score.classList.remove("winner","loser")
    player2score.classList.remove("winner","loser")
}

const playto = document.querySelector("#playto")
playto.addEventListener("change", function () {
    reset();
    return winnerScore = parseInt(this.value)
})

btn1.addEventListener("click", function () {
    if (player1score.innerText != winnerScore && isGameOver === false) {
        player1score.innerText = parseInt(player1score.innerText) + 1
    }
    if (player1score.innerText == winnerScore) {
        player1score.classList.add("winner")
        player2score.classList.add("loser")
        isGameOver = true
    }
})

const btn2 = document.querySelector("#player2btn");
const player2score = document.querySelector("#player2")
btn2.addEventListener("click", function () {
    if (player2score.innerText != winnerScore && isGameOver === false) {
        player2score.innerText = parseInt(player2score.innerText) + 1;
    }
    if (player2score.innerText == winnerScore) {
        player1score.classList.add("loser")
        player2score.classList.add("winner")
        isGameOver = true
    }

})

const btn3 = document.querySelector("#resetbtn");
btn3.addEventListener("click", function () {
    reset();
})


