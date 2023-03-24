// make number grid
const numbersDiv = document.querySelector('.numbers');
makeGrid();

const operators = ['/', '*', '-', '+'];

const extras = ['.', 'Enter']


// add operators to calculator
const operatorsDiv = document.querySelector('.operators');
makeOperatorGrid();

// select display and container to allow numbers to appear
const displayDiv = document.querySelector('.display');
const holder = document.querySelector('.holding');
const container = document.querySelector('.container');
let hold


container.addEventListener("click", (e) => {
    //I don't love the display holding the previous operator because it looks a little weird, but the calculator works!
    if((holder.textContent === hold) && (e.target.id == "*" || e.target.id == "+" || e.target.id == "-" || e.target.id == "/")) {
        newHoldNumber = solve(x, ope)
        ope = e.target.id
        hold = newHoldNumber + " " + ope 
        holder.textContent = hold
        displayDiv.textContent = ""
        x = newHoldNumber
    }
    else if(e.target.id == "*" || e.target.id == "+" || e.target.id == "-" || e.target.id == "/") {
        x = displayDiv.textContent;
        ope = e.target.id
        hold = x + " " + ope
        holder.textContent = hold
        displayDiv.textContent = ""
    }
    else if (e.target.id == "Enter") {
        x = holder.textContent.slice(0, -2)
        console.log(x)
        ope = holder.textContent
        ope = ope[ope.length-1]
        console.log(ope)
        displayDiv.textContent = (solve(x, ope))
        holder.textContent = ""
    } else if (e.target.id == "Del") {
        x = displayDiv.textContent.slice(0, -1)
        displayDiv.textContent = x
    }

    //function to display the numbers
    displayNumber(e);
});


function solve(a, op) {
    b = Number(displayDiv.textContent)
    a = Number(a)
    if (a == NaN || b == NaN) {
        return "Error"
    } else {
    return operate(op, a, b)
    }
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
            holder.textContent = ""
        }
        else if (e.target.id == "Enter") {
            
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
                gridButton.textContent = "."
                gridButton.setAttribute('id', ".")
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
        x = sum(a, b);
        if (!Number.isInteger(x)) {
            x = roundToFour(x)
            return x;
        } else {
        return x;
        }
    } else if(op === '-') {
        x = subtract(a, b);
        if (!Number.isInteger(x)) {
            x = roundToFour(x)
            return x;
        } else {
        return x;
        }
    } else if(op === '*') {
        x = multiply(a, b);
        if (!Number.isInteger(x)) {
            x = roundToFour(x)
            return x;
        } else {
        return x;
        }
    } else if(op === '/') {
        x = divide(a, b);
        if (!Number.isInteger(x)) {
            x = roundToFour(x)
            return x;
        } else {
        return x;
        }
    }
}

function roundToFour(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}