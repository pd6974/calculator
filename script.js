// make number grid
const numbersDiv = document.querySelector('.numbers');
makeGrid();

const operators = ['/', '*', '-', '+'];

// add operators to calculator
const operatorsDiv = document.querySelector('.operators');
makeOperatorGrid();

// select display and allow numbers to appear
const displayDiv = document.querySelector('.display');

const container = document.querySelector('.container')

container.addEventListener("click", (e) => {
    if(e.target.id == "*" || e.target.id == "+" || e.target.id == "-" || e.target.id == "/") {
        x = logIt(e);
        ope = e.target.id
    }
    else if (e.target.id == "Enter") {
        displayDiv.textContent = (solve(x, ope))
    }

    //function to display the numbers
    displayNumber(e);
});


function solve(a, op) {
    b = Number(displayDiv.textContent)
    a = Number(a)
    return operate(op, a, b)
}


function logIt(e) {
        return displayDiv.textContent
}


function displayNumber(e) {
    if (e.target !== e.currentTarget) {
        if (!isNaN(e.target.id)) {
            var clickedItem = e.target.id;
            displayDiv.textContent += clickedItem
        } else if (e.target.id == "AC") {
            displayDiv.textContent = ""
        }
        else if (e.target.id == "Enter") {
            
        } else {
            var clickedItem = e.target.id
            displayDiv.textContent = ""
        }

    }

}

// logic for creating number grid
function makeGrid() {
    for (let i = -2; i <= 9; i++) {
            const gridButton = document.createElement('button');
            numbersDiv.appendChild(gridButton);
            gridButton.classList.add(`button${i}`);
            if (i == -1){
                gridButton.textContent = "Enter"
                gridButton.setAttribute('id', "Enter")
            } else if (i == -2) {
                gridButton.textContent = "AC"
                gridButton.setAttribute('id', "AC")
            } else {
            gridButton.textContent = `${i}`;
            gridButton.setAttribute('id', `${[i]}`)
            }
    }
}

// logic for add operators to calculator
function makeOperatorGrid () {
    for (let i = 0; i < 4; i++) {
        const operatorButton = document.createElement('button');
        operatorsDiv.appendChild(operatorButton);
        operatorButton.classList.add('operatorButton');
        operatorButton.setAttribute('id', `${operators[i]}`)
        operatorButton.textContent = `${operators[i]}`
    }
}

// logic to add click event listeners to calculator >> research how to add event listeners in a loop
function clickToDisplay () {
    for (let i = -2; i <= 9; i++) {
        const numbers = document.querySelector(`.button${i}`);
        numbers.addEventListener('click', () => {
            temp = i
            displayDiv.textContent = temp
        })
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