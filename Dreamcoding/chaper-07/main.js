"use strict";
const field = document.querySelector(".game__field");
const fieldrect = field.getBoundingClientRect();
const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener("click", () => {
  console.log("game start!");
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  started = !started;
});

function startGame() {
  initGame();
  showStopButton();
  showTimerAndScore();
}
function stopGame() {}

function initGame() {
  field.innerHTML = "";
  gameScore.innerHTML = CARROT_COUNT;
  addItem("carrot", CARROT_COUNT, "img/carrot.png");
  addItem("bug", BUG_COUNT, "img/bug.png");
}

function showStopButton() {
  const icon = gameBtn.querySelector(".fa-play");
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function addItem(className, count, imgpath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldrect.width - CARROT_SIZE;
  const y2 = fieldrect.height - CARROT_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgpath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
