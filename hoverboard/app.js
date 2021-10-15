const container = document.querySelector('.container');

const colors = ["#DFFF00", "#9FE2BF", "#FFBF00", "#40E0D0", "#FF7F50", "#6495ED", "#DE3163", "#CCCCFF"];

const SQUARES = 500;

for (let index = 0; index < SQUARES; index++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
    
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`;
}

function removeColor(element) {
    element.style.background = '';
    element.style.boxShadow = '';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}