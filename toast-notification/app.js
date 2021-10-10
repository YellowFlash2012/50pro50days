const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'message one',
    'message two',
    'message three',
    'message four'
]

console.log(messages[Math.floor(Math.random() * 4)]);

button.addEventListener('click', () => createNotifications());

const types = ["info", "success", "error"];

function createNotifications(message, type) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());

    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}