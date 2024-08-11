const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            appendValue(value);
        }
    });
});

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.textContent = '0';
}

function calculateResult() {
    if (operator && previousInput !== '') {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        display.textContent = currentInput;
        operator = '';
        previousInput = '';
    }
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }
}

function appendValue(value) {
    if (value === '.' && currentInput.includes('.')) return;
    currentInput += value;
    display.textContent = currentInput;
}
