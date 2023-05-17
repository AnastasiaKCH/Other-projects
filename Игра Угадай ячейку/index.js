const cell = document.querySelectorAll(".cell");
const button = document.querySelector("#btn");
const p = document.querySelector(".playerTurn");

let stepCount = 0;
let rightChoice = 0;
let randomNumb = getRandomInt(1, 9);
console.log(randomNumb);

for (let i = 0; i < cell.length; i++) { //Обработчик событий при клике на поле
    cell[i].addEventListener("click", cellClick);
}

function getRandomInt(min, max) { //Функция для генерации случайных полей

    let array = [];
    for (let countCycle = 1; countCycle <= 3; countCycle++) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        let found = array.includes(number);
        if (found) {
            countCycle--;
            continue;
        } else {
            array.push(number);
        }
    }
    return array;
}

function cellClick() { //Основаная функция при клике на поле

    let cellNumb = Number(this.getAttribute("data-num"));

    let checkTurn = randomNumb.includes(cellNumb);

    if (checkTurn && stepCount < 5 && rightChoice !== 3) {
        this.style.cssText = "background-color: green";
        rightChoice++;
    } else if (!checkTurn && stepCount < 5 && rightChoice !== 3) {
        this.style.cssText = "background-color: red";
    }

    stepCount++;

    if (stepCount === 5 && rightChoice !== 3) {
        setTimeout(function () {
            p.innerHTML = "Вы проиграли! Сочувствуем:(";
        }, 50);
    } else if (stepCount <= 5 && rightChoice == 3) {
        setTimeout(function () {
            p.innerHTML = "Вы выиграли! Поздравляем!!!";
        }, 50);
    }
}

button.addEventListener("click", function () { //Функция для сброса поля и начала новой игры
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.cssText = "background-color: #f5f2eb";
    }

    stepCount = 0;
    rightChoice = 0;
    p.innerHTML = " ";

    randomNumb =  getRandomInt(1, 9);
    console.log(randomNumb);

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", cellClick);
    }
});




