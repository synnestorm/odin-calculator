// calculator display
const calcDisplay = document.querySelector(".calc-display");
let display = document.createElement("p");
display.className = "display";
display.textContent = "";
calcDisplay.appendChild(display);

// variables
let firstNumber = 0;
let secondNumber = 0;
let total = 0;
let operator = "";
let calcDone = false;

// number buttons
const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach((button) => {
  button.addEventListener("click", function () {
    if (calcDone) {
      display.textContent = "";
      calcDone = false;
    }
    if (display.textContent.length < 10) {
      display.textContent += button.textContent;
    }
  });
});

// operator buttons
const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
  button.addEventListener("click", function () {
    if (calcDone) {
      firstNumber = total;
      operator = button.textContent;
      display.textContent = "";
      calcDone = false;
      return;
    }
    if (operator === "") {
      firstNumber = Number(display.textContent);
      display.textContent = "";
      operator = button.textContent;
    } else {
      secondNumber = Number(display.textContent);
      operate(operator, firstNumber, secondNumber);
      display.textContent = "";
      operator = button.textContent;
      firstNumber = total;
    }
  });
});

// equal button
const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", function () {
  if (calcDone) {
    return;
  }
  secondNumber = Number(display.textContent);
  operate(operator, firstNumber, secondNumber);
  calcDone = true;
});

// clear buttons
const clearBtn = document.querySelectorAll(".clear");
clearBtn.forEach((button) => {
  button.addEventListener("click", function () {
    display.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    total = 0;
    operator = "";
    calcDone = false;
  });
});

// arithmetic functions
function add(firstNumber, secondNumber) {
  total = firstNumber + secondNumber;
  if (total.toString().length > 10) {
    display.textContent = "overflow";
    return;
  }
  display.textContent = total;
}

function subtract(firstNumber, secondNumber) {
  total = firstNumber - secondNumber;
  if (total.toString().length > 10) {
    display.textContent = "overflow";
    return;
  }
  display.textContent = total;
}

function multiply(firstNumber, secondNumber) {
  total = firstNumber * secondNumber;
  if (total.toString().length > 10) {
    display.textContent = "overflow";
    return;
  }
  display.textContent = total;
}

function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    display.textContent = "nice try";
    return;
  }
  total = Math.round((firstNumber / secondNumber) * 1000000) / 1000000;
  if (total.toString().length > 10) {
    display.textContent = "overflow";
    return;
  }
  display.textContent = total;
}

// operator function will go here

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    add(firstNumber, secondNumber);
  } else if (operator === "-") {
    subtract(firstNumber, secondNumber);
  } else if (operator === "×") {
    multiply(firstNumber, secondNumber);
  } else if (operator === "÷") {
    divide(firstNumber, secondNumber);
  } else {
    display.textContent = "error";
  }
}
