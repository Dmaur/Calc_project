let equation = [];
let display = document.getElementById("display");
let equals = document.getElementById("equals");

// capture the number input
let num = document.querySelectorAll(".numbers");
// num.forEach((number) => {
//   number.addEventListener(onmouseover, function () {});
// }); // this does not work yet.
num.forEach((number) => {
  number.addEventListener("click", function () {
    display.innerHTML += number.innerHTML;
  });
});

//clear the display screen.
let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  display.innerHTML = "";
  equation = [];
  console.log(equation);
});

// capture numerator button input
let numerators = document.querySelectorAll(".numerators");
numerators.forEach((numerator) => {
  numerator.addEventListener("click", function () {
    display.innerHTML += numerator.innerHTML;
  });
});

// capture delete button input
let Del = document.getElementById("Del");
Del.addEventListener("click", function () {
  display.innerHTML = Del.innerHTML;
});

// handle equals and equation execution
equals.addEventListener("click", function () {
  equation.push(display.innerHTML)
  console.log(equation);
  let equate = equation.join("");
  console.log(equate);
  let answer = eval(equate);
  display.innerHTML= answer

  
});
// function add(a, b) {
//   a + b;
// }
// function subtract(a, b) {
//   a - b;
// }
// function divide(a, b) {
//   a / b;
// }
// function multiply(a, b) {
//   a * b;
// }
