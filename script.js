// Functions for Operators
function addition(num1, num2) {
    let answer = Number(num1) + Number(num2);
    updateDisplay(answer);
}

function subtraction(num1, num2) {
    let answer = Number(num1) - Number(num2);
    updateDisplay(answer);
}

function multiplication(num1, num2) {
    let answer =  Number(num1) * Number(num2);
    updateDisplay(answer);
}

function division(num1, num2) {
    let answer = Number(num1) / Number(num2);
    updateDisplay(answer);
}

// Update display and variables after solve
function updateDisplay(answer) {
    display.textContent = answer;
    reset = true;
    num1 = answer;
    num2 = null;
    point = false;
}

// Variables
let oper;
let num1;
let num2;
let equals;
let numScreen;
let reset;
let point;

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

function disableOper() {
    buttons.forEach((btn) => {

        const btnValue = btn.getAttribute('value');
        for (const value in operArr) {
            if (btnValue == operArr[value]) {
                btn.setAttribute('disabled', '');
            }
        }
    })
};

function enableOper() {
    buttons.forEach((btn) => {

        const btnValue = btn.getAttribute('value');
        for (const value in operArr) {
            if (btnValue == operArr[value]) {
                btn.removeAttribute('disabled');
            }
        }
    })
};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('#mainScreen');
const miniDisplay = document.querySelector('#holdScreen');

// Add numbers to the screen
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operArr = ['/', '*', '-', '+'];
buttons.forEach((btn) => {

    const btnValue = btn.getAttribute('value');
    btn.addEventListener('click', () => {

        for (const value in numArr) {
            if (btnValue == value) {
                switch (true) {
                    case (num1 !== null):
                        enableOper();
                    case (num1 == null):
                        switch (reset) {
                            case (true):
                                display.textContent = 0;
                                reset = false;
                            default:
                                if (display.textContent == '0') {
                                    display.textContent = btnValue;
                                    break;
                                } else {
                                    display.append(btnValue);
                                    break;
                                };
                        };
                }
            }
        };
        for (const value in operArr) {
            if (btnValue == operArr[value]) {
                if (oper == null) {
                    num1 = display.textContent;
                    oper = btnValue;
                    miniDisplay.textContent = display.textContent + " " + oper;
                    display.textContent = 0;
                    disableOper();
                } else {
                    num2 = display.textContent;
                    miniDisplay.textContent = miniDisplay.textContent + " " + display.textContent + " " + oper;
                    operate(oper, num1, num2);
                    oper = btnValue;
                    disableOper();
                }
            }
        };
        if (btnValue == '=') {
            if (oper == null) {
                alert ('Please choose a valid operator!');
            } else if (display.textContent == 0) {
                alert("\nTo Infinity and Beyond!\n\nNice try, Space Pirate. You know we can't divide by 0!");
            } else {
                num2 = display.textContent;
                miniDisplay.textContent = miniDisplay.textContent + " " + display.textContent;
                display.textContent = 0;
                operate(oper, num1, num2);
                oper = null;
            }
        } else if (btnValue == '<-') {
            if (display.textContent == 0) {
                return;
            } else {
                display.textContent = display.textContent.replace(display.textContent.charAt(display.textContent.length - 1), "");
                if (display.textContent == 0) {
                    display.textContent = 0;
                } else {
                    return;
                };
            };
        } else if (btnValue == 'C') {
            num1 = null;
            num2 = null;
            oper = null;
            reset = false;
            point = false;
            enableOper();
            miniDisplay.textContent = "";
            display.textContent = 0;
        } else if (btnValue == '.') {
            switch (reset) {
                case (true):
                    display.textContent = 0;
                    reset = false;
                default:
                    switch (point) {
                        case (true):
                            break;
                        default:
                            if (display.textContent == '0') {
                                display.textContent = 0 + btnValue;
                                break;
                            } else {
                                display.append(btnValue);
                                break;
                            };
                    }
            };
            point = true;
        }
        // Use to cleanup code later
        // if (btnValue in numArr) {
        //     if (display.textContent == 0) {
        //         display.textContent = btnValue;
        //     } else {
        //         display.append(btnValue);
        //     }
        // } else if (btnValue == '=') {
        //     operate(oper, num1, num2);
        // } else {
        //     console.log('What da hail')
        // };
    });
});