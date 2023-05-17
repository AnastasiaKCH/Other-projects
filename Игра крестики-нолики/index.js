const cell = document.querySelectorAll(".cell");
const button = document.querySelector("#btn");
const p = document.querySelector(".playerTurn");

console.log(cell);

let player = "X";
p.innerHTML = "Ходит игрок X:";

stepCount = 0;

const winIndex = [ //Выигрышные комбинации
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

for (let i = 0; i < cell.length; i++) { //Обработчик событий при клике на поле
    cell[i].addEventListener("click", cellClick);
}

let player1 = [];
let player2 = [];

function cellClick() { //Основаная функция при клике на поле

    if (this.innerHTML) { //Проверка - пустое поле или нет?
        alert("Это поле уже занято!");
    } else {
        this.innerHTML = player;
    }

    let num = Number(this.getAttribute("data-num"));

    if (this.innerHTML === player && player === "X") {
        player1.push(num);
    } else if (this.innerHTML === player && player === "O") {
        player2.push(num);
    }

    if (player1.length >= 2 && checkWinner(player1, num)) {
        setTimeout(function () {
            p.innerHTML = "<b>Выиграл игрок X!</b>";
        }, 100);
        for (let i = 0; i < cell.length; i++) {
            cell[i].removeEventListener("click", cellClick);
        }
        stepCount = 0;
    } else if (player2.length >= 2 && checkWinner(player2, num)) {
        setTimeout(function () {
            p.innerHTML = "<b>Выиграл игрок O!</b>";
        }, 100);
        for (let i = 0; i < cell.length; i++) {
            cell[i].removeEventListener("click", cellClick);
        }
        stepCount = 0;
    }

    changePlayer(); //Смена игрока

    stepCount++; //Счёт количества ходов

    if (stepCount === 9) {
        setTimeout(function () {
            p.innerHTML = "<b>Победила дружба!</b>";
        }, 100);
    }
}

function changePlayer() { // Функция, отвечающая за смену игрока
    console.log(player);

    if (player === "X") {
        player = "O";
        p.innerHTML = "Ходит игрок O:";
    } else {
        player = "X";
        p.innerHTML = "Ходит игрок X:";
    }

    console.log(p);
}

button.addEventListener("click", function () { //Функция для сброса поля и начала новой игры
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }

    player1 = [];
    player2 = [];
    player = "X";
    stepCount = 0;
    p.innerHTML = "Ходит игрок X:";

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", cellClick);
    }
});

function checkWinner(array, num) { //Функция для определения победителя
    for (let j = 0; j < winIndex.length; j++) {
        let winArray = winIndex[j];
        let count = 0;

        if (winArray.indexOf(num) !== -1) {
            for (let n = 0; n < winArray.length; n++) {
                if (array.indexOf(winArray[n]) !== -1) {
                    count++;
                    if (count === 3) {
                        return true;
                    }
                }
            }

            count = 0;
        }
    }
}



