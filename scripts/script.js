let playButtonEl = document.getElementById("play-button");
let centerEl = document.getElementById("center");
let but1El = document.getElementById("but1");
let but2El = document.getElementById("but2");
let chooseEl = document.getElementById("choose");
let figurejumpingEl = document.getElementById("figure-jumping");
let keyboardEl = document.getElementById("keyboard");
let startCountEl = document.getElementById("start-count")
let countDownEL = document.getElementById("count-down")
let gameEl = document.getElementById("game")
let goEl = document.getElementById("go")
let gobackEl = document.getElementById("goback")
let yourScoreEl = document.getElementById("y-score")
let timeEl = document.getElementById("time")
let highScoreEl = document.getElementById("h-score")
let gameoverEl = document.getElementById("game-over")

let oneElement;
let idGame 

playButtonEl.addEventListener("click", chooseType)
but1El.addEventListener("click", chooseBut)

function chooseType() {
    centerEl.style.display = "none"
    chooseEl.style.display = "block"

}


function chooseBut() {
    chooseEl.style.display = "none"
    figurejumpingEl.style.display = "none"
    keyboardEl.style.display = "block"
    gameKeyboard()
}
function gameKeyboard() {
    let oneLetter = randomItem(letterArr)
    oneElement = document.getElementById(oneLetter)
    oneElement.classList.add("selected")

    document.addEventListener("keyup", function (e) {
        if (e.code == oneLetter) {
            oneElement.classList.remove("selected")
            oneLetter = randomItem(letterArr)
            oneElement = document.getElementById(oneLetter)
            oneElement.classList.add("selected")

        } else {
            let falseEl = document.getElementById(event.code)
            falseEl.classList.add("hit")
            setTimeout(function () {
                falseEl.classList.remove("hit")
            }, 10)


        }
    })

}

function randomItem(arr) {
    let inedex = Math.floor(Math.random() * arr.length)
    return arr[inedex]
}









but2El.addEventListener("click", chooseBut1)
function chooseBut1() {
    chooseEl.style.display = "none"
    figurejumpingEl.style.display = "none"

    countDownEL.style.display = "block"
    let count = 3
    startCountEl.innerHTML = count
    let id = setInterval(function () {
        count--;
        startCountEl.innerHTML = count
        if (count < 0) {
            clearInterval(id)
            startCountEl.style.display = "none"
            game()
        }
    }, 1000)
}

startCountEl.addEventListener("click", choosestart)
function choosestart() {

    but2El.style.display = "none"
    countDownEL.style.display = "block"

}

let inputEl = document.getElementById("input")



let textEl = document.getElementById("text");


function game() {
    
    let score = 0;
    let time = 8;
    let hScore;
    if (!localStorage.score) {
        localStorage.score = 0
    }

    countDownEL.style.display = "none"
    gameEl.style.display = "block"

    hScore = localStorage.score
    highScoreEl.innerHTML = hScore;
    yourScoreEl.innerHTML = score;
    timeEl.innerHTML = time


    idGame = setInterval(function () {
        time--;
        timeEl.innerHTML = time
        if (time <= 0) {
            clearInterval(idGame )
            gameEl.style.display = "none"
            gameover()
        }
    }, 1000)




    let oneWord = randomItem(wordsArr)
    textEl.innerHTML = oneWord
    inputEl.addEventListener("keyup", function (e) {

        if (e.keyCode == 13 && input.value != "") {
            if (e.code = "Enter") {
                if (input.value == oneWord) {
                    score++
                    console.log(time)
                    time += 4
                    yourScoreEl.innerHTML = score;

                    if (score > hScore) {
                        hScore = score;
                        localStorage.score = hScore
                        highScoreEl.innerHTML = hScore
                    }
                } else {
                    time -= 2
                }
                oneWord = randomItem(wordsArr)
                textEl.innerHTML = oneWord;
                input.value = ""
                if(time>=0)
                timeEl.innerHTML = time
            }
        }


    })
}



function gameover() {
  location.reload()
}


goEl.addEventListener("click", choosego)
function choosego() {
    keyboardEl.style.display = "none"
    chooseEl.style.display = "block"
    figurejumpingEl.style.display = "block"
    oneElement.classList.remove("selected")
}

gobackEl.addEventListener("click", choosegoback)
function choosegoback() {
    clearInterval(idGame)
    location.reload()
}










