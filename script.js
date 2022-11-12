const container = document.querySelector('.numbers');
makeGrid();

const operators = ['+', '-', '*', '/'];


function makeGrid() {
    for (let i = -2; i <= 9; i++) {
            const gridButton = document.createElement('button');
            container.appendChild(gridButton);
            gridButton.classList.add('gridButton');
            if (i == -1){
                gridButton.textContent = "Enter"
            } else if (i == -2) {
                gridButton.textContent = "Clear"
            } else {
            gridButton.textContent = `${i}`;
            }
    }
}

const operatorsDiv = document.querySelector('.operators');
makeOperatorGrid();

function makeOperatorGrid () {
    for (let i = 0; i < 4; i++) {
        const operatorButton = document.createElement('button');
        operatorsDiv.appendChild(operatorButton);
        operatorButton.classList.add('operatorButton');
        operatorButton.textContent = `${operators[i]}`
    }
}










//simple functions for calculator operations

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    if(op === '+') {
        return sum(a, b);
    } else if(op === '-') {
        return subtract(a, b);
    } else if(op === '*') {
        return multiply(a, b);
    } else if(op === '/') {
        return divide(a, b);
    }
}