const calcDisplay = document.querySelector(".calc-display");
let displaySum = document.createElement("p");
displaySum.className = "display-sum";
displaySum.textContent = "";
calcDisplay.appendChild(displaySum);

// number buttons
const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach((button) => {
  button.addEventListener("click", function () {
    displaySum.textContent += button.textContent;
  });
});

// operator buttons
const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
  button.addEventListener("click", function () {
    displaySum.textContent += button.textContent;
  });
});

// clear button
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", function () {
  displaySum.textContent = "";
});
