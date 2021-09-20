'use strict'
const clock = document.querySelector("h2#clock")
clock.innerText = "clock"

// string의 길이 맞추기 padStart 사용
console.log("1".padStart(2, "0"))

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // console.log("hello")
}

getClock()
setInterval(getClock, 1000)

// setTimeout(sayHello, 4000)
