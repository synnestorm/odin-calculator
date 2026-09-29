const calcDisplay = document.querySelector(".calc-display");
let display = document.createElement("p");
display.className = "display";
display.textContent = "";
calcDisplay.appendChild(display);

// const displayValue = Number(display.textContent);
let currentNumber = 0;
let total = 0;
let operator = "";

// number buttons
const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach((button) => {
  button.addEventListener("click", function () {
    display.textContent += button.textContent;
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

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", function () {
  if (operator === "+") {
    total = currentNumber + Number(display.textContent);
    console.log(total);
  } else if (operator === "-") {
    total = currentNumber - Number(display.textContent);
  }
});

// clear button
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function () {
  display.textContent = "";
});

// functions for the operators in order: add, subtract, multiply, divide

// im also thinking that, when the button is clicked it should store a value in a variable
// const value = Number() from the numberBtns???

function add() {
  const total = displayValue + numberValue;
  display.textContent = total;
}

function subtract() {
  // something like oneValue - anotherValue = total
}

function multiply() {
  // something like oneValue * anotherValue = total
}

function divide() {
  // something like oneValue / anotherValue = total
}
