
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked!")
  title.style.color = "blue"
}

console.dir(title)
function handleMouseEnter() {
  title.innerText = "Mouse is here!"
}

function handMouseLeave() {
  title.innerText = "Mouse is gone!!"
}
title.onclick = handleTitleClick;
// title.addEventListener("click", handleTitleClick);
title.onmouseenter = handleMouseEnter;
// title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handMouseLeave)
// removeEventLisner를 이용할수 있다. 이게 더 좋을것이다

function resizeWindow() {
  document.body.style.backgroundColor = "tomato"
}

function handcleWindowCopy() {
  alert("copier!!")
}

function handleWindowOffline() {
  alert("SOS! no wifi")
}

function handleWindowOnline() {
  alert("GOOOOOD!")
}
window.addEventListener('resize', resizeWindow)

window.addEventListener('copy', handcleWindowCopy)

window.addEventListener("offline", handleWindowOffline)

window.addEventListener("online", handleWindowOnline)