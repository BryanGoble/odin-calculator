// Functions for Operators
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

// Variables
let oper;
let num1;
let num2;
let numScreen;

// Functions of the Calculator
function operate(oper, num1, num2) {
    switch (oper) {
        case '+':
            addition(num1, num2);
            break;
        case '-':
            subtraction(num1, num2);
            break;
        case `*`:
            multiplication(num1, num2);
            break;
        case '/':
            division(num1, num2);
            break;
        default:
            alert("Please input a valid operator!");
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#mainScreen');

// Add numbers to the screen
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operArr = ['/', '*', '-', '+'];
buttons.forEach((btn) => {

    btn.addEventListener('click', () => {
        //const text = btn.innerText;
        const newText = btn.getAttribute('value');
        for (const value in numArr) {
            if (newText == value) {
                display.append(newText);
                break;
            }
        };
        for (const index in operArr) {
            if (newText == operArr[index]) {
                console.log("This is an operator");
            }
        };
    });
});