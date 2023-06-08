let redEle = document.querySelector("#stopLight");
let yellowEle = document.querySelector("#readyLight");
let greenEle = document.querySelector("#goLight");

let btnEle = document
  .querySelector("#stopButton")
  .addEventListener("click", function () {
    redEle.style.backgroundColor = "#cf1124";
    yellowEle.style.backgroundColor = "#4b5069";
    greenEle.style.backgroundColor = "#4b5069";
  });

let goEle = document.querySelector("#goButton");
goEle.addEventListener("click", function () {
  greenEle.style.backgroundColor = "#199473";
  yellowEle.style.backgroundColor = "#4b5069";
  redEle.style.backgroundColor = "#4b5069";
});

let readyEle = document.querySelector("#readyButton");
readyEle.addEventListener("click", function () {
  yellowEle.style.backgroundColor = "#f7c943";
  redEle.style.backgroundColor = "#4b5069";
  greenEle.style.backgroundColor = "#4b5069";
});
