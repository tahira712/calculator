let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const display = document.getElementById('display');

function updateDisplay() {
    display.innerText = `${previousOperand} ${operation || ''} ${currentOperand}`;
}

function handleNumberClick(number) {
    if (number === '.' && currentOperand.includes('.')) return 0;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function handleOperatorClick(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function handleClear() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function handleNegativeClick() {
    if (currentOperand === '') return;
    currentOperand = parseFloat(currentOperand) * -1;
    updateDisplay();
}

function handlePercentClick() {
    if (currentOperand === '') return;
    currentOperand = parseFloat(currentOperand) / 100;
    updateDisplay();
}

function handleEqualClick() {
    if (currentOperand === '' || previousOperand === '') return;
    calculate();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    previousOperand = '';
}

updateDisplay();
