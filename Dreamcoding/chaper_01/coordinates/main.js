'use strict'

const tag = document.querySelector(".tag");
const lineH = document.querySelector(".horizontal");
const linev = document.querySelector(".vertical");
const target = document.querySelector(".target");

window.addEventListener('mousemove', (event) => {
  logkey(event);
});

function logkey(event) {
  const x = event.clientX;
  const y = event.clientY;

  tag.innerHTML = `${x}px , ${y}px`
  tag.style.left = x + 'px';
  tag.style.top = y + 'px';
  lineH.style.top = y + 'px';
  linev.style.left = x + 'px';
  target.style.left = x + 'px';
  target.style.top = y + 'px';
}

