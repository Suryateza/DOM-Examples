let btnElOne = document.querySelector("#button1");
let btnElTwo = document.querySelector("#button2");
let btnElThree = document.querySelector("#button3");
let btnElFour = document.querySelector("#button4");
let textEl = document.querySelector("#change");
let bodyEl = document.querySelector("body");

btnElOne.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "#e0e0e0";
  textEl.textContent = "#e0e0e0";
});

btnElTwo.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "#6fcf97";
  textEl.textContent = "#6fcf97";
});

btnElThree.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "#56ccf2";
  textEl.textContent = "#56ccf2";
});

btnElFour.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "#bb6bd9";
  textEl.textContent = "#bb6bd9";
});
