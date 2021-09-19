const canvas = document.getElementById('canvas');
const incBtn = document.getElementById('increase');
const decBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;

    console.log(isPressed, x, y);
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = '';
    y = '';

    console.log(isPressed, x, y);
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

colorEl.addEventListener('change', (e) => color = e.target.value);

incBtn.addEventListener('click', () => {
    size += 3;

    if (size > 45) {
        size = 45;
    }

    updateSizeOnScreen();
})

decBtn.addEventListener('click', () => {
    size -= 3;

    if (size < 3) {
        size = 3;
    }

    updateSizeOnScreen();
})

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));