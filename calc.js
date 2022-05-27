// capture the number input
let num = document.querySelectorAll(".numbers");
// num.forEach((number) => {
//   number.addEventListener(onmouseover, function () {});
// }); // this does not work yet.
num.forEach((number) => {
  number.addEventListener("click", function () {
    document.getElementById("display").innerHTML =
      "you pressed number " + number.innerHTML;
  });
});

//clear the display screen.
let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  document.getElementById("display").innerHTML = "";
});

// capture numerator button input
let numerators = document.querySelectorAll(".numerators");
numerators.forEach((numerator) => {
  numerator.addEventListener("click", function () {
    document.getElementById("display").innerHTML = numerator.innerHTML;
  });
});

// capture delete button input
let Del = document.getElementById("Del");
Del.addEventListener("click", function () {
  document.getElementById("display").innerHTML = Del.innerHTML;
});
