// variables

// functions for each operator: + - * / (multiply, subtract, divide and add)

// function for operator
const calcDisplay = document.querySelector(".calc-display");
let displaySum = document.createElement("p");
displaySum.className = "display-sum";
displaySum.textContent = 0;
calcDisplay.appendChild(displaySum);
