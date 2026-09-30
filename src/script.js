const calcDisplay = document.querySelector(".calc-display");
let display = document.createElement("p");
display.className = "display";
display.textContent = "";
calcDisplay.appendChild(display);

// const displayValue = Number(display.textContent);
let currentNumber = 0;
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
    currentNumber = Number(display.textContent);
    display.textContent = "";
    operator = button.textContent;
  });
});

// equal button
const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", function () {
  if (operator === "+") {
    add();
  } else if (operator === "-") {
    subtract();
  } else if (operator === "×") {
    multiply();
  } else if (operator === "÷") {
    divide();
  } else {
    display.textContent = "error";
  }
  calcDone = true;
});

// clear buttons
const clearBtn = document.querySelectorAll(".clear");
clearBtn.forEach((button) => {
  button.addEventListener("click", function () {
    display.textContent = "";
    currentNumber = 0;
    total = 0;
    operator = "";
    calcDone = false;
  });
});

// functions
function add() {
  total = currentNumber + Number(display.textContent);
  if (total.toString().length > 10) {
    display.textContent = "overflow";
    return;
  }
  display.textContent = total;
}

function subtract() {
  total = currentNumber - Number(display.textContent);
  if (total.toString().length > 10) {
    display.textContent = "overflow";
    return;
  }
  display.textContent = total;
}

function multiply() {
  total = currentNumber * Number(display.textContent);
  if (total.toString().length > 10) {
    display.textContent = "overflow";
    return;
  }
  display.textContent = total;
}

function divide() {
  const secondNumber = Number(display.textContent);
  if (secondNumber === 0) {
    display.textContent = "error: no";
    return;
  }
  total = Math.round((currentNumber / secondNumber) * 1000000) / 1000000;
  if (total.toString().length > 10) {
    display.textContent = "overflow";
    return;
  }
  display.textContent = total;
}
