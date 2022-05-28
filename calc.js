let equation = [];
let display = document.getElementById("display");
let equals = document.getElementById("equals");
let Del = document.getElementById("Del");
let num = document.querySelectorAll(".numbers");

 num.forEach((number) => {
    number.addEventListener(onmouseover, function () {
      number.style.backgroundColor = "red"
    });
    // this does not work yet.
})

//get the number input displayed.
num.forEach((number) => {
  number.addEventListener("click", function () {
    if (display.innerHTML.length >= 12) {
      alert(
        "ayo, this is simple calculator. It has it's limits. 12 char is enough"
      );
    } else {
      display.innerHTML += number.innerHTML;
    }
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

// deletes the last char entered
Del.addEventListener("click", function () {
  const popper = display.innerHTML.split("");
  popper.pop();
  display.innerHTML = popper.join("");
});

// handle equals and equation execution
equals.addEventListener("click", function () {
  equation.push(display.innerHTML);
  console.log(equation);
  let equate = equation.join("");
  console.log(equate);
  let answer = eval(equate);
  display.innerHTML = answer;
});
