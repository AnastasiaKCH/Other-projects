const board = document.querySelector("#board");
const colors = ["#6A5ACD", "#9966CC", "#755D9A", "#DF73FF", "#5D76CB"];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", setColor(square))

    square.addEventListener("mouseleave", removeColor(square))

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
    return colors[ Math.floor(Math.random() * colors.length)];
}