'use strict'
const clock = document.querySelector("h2#clock")
clock.innerText = "clock"

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getHours()}:${date.getSeconds()}`;
  // console.log("hello")
}
getClock()
setInterval(getClock, 1000)

// setTimeout(sayHello, 4000)