"use strict";
const field = document.querySelector(".game__field");
const fieldrect = field.getBoundingClientRect();
const CARROT_SIZE = 80;
function init() {
  console.log(fieldrect);
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
}

init();

const palyBtn = document.querySelector(".game__button");

palyBtn.addEventListener("click", () => {
  alert("ahah");
});

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
