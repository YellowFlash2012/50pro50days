const resultEl = document.querySelector('.result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumbers,
    symbol: getRandomSymbols
}

// events listeners

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) { return };

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
})


generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    console.log(length);

    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasNumber, hasUpper, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';

    const typeCount = lower + upper + number + symbol;

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typeCount === 0) {
        return '';
    }

    for (let index = 0; index < length; index+=typeCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunctions[funcName]();
        })
        
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

// string.fromcharcode()

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    // 97 because lower case letters start at 97
}

console.log(getRandomLower());

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    // 65 because uppercase letters start at -()
}

console.log(getRandomUpper());

function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    // 48 because 0 = 48
}

console.log(getRandomNumbers());

function getRandomSymbols() {
    const symbols = '!@#$%^&*()[]{}=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)]
    
}

console.log(getRandomSymbols());