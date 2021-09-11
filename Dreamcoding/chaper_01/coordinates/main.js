'use strict'

const tag = document.querySelector(".tag");
const lineH = document.querySelector(".horizontal");
const linev = document.querySelector(".vertical");
const target = document.querySelector(".target");

//target이 완전히 로드가 되면, 실행해라
addEventListener('load', () => {
  window.addEventListener('mousemove', (event) => {
    logkey(event);
  });

  function logkey(event) {
    const x = event.clientX;
    const y = event.clientY;
    const targetRect = target.getBoundingClientRect();
    const targetHarfWidth = targetRect.width / 2;
    const targetHarfHeight = targetRect.height / 2;

    tag.innerHTML = `${x}px , ${y}px`

    linev.style.transform = `translateX(${x}px)`;
    lineH.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHarfWidth}px , ${y - targetHarfHeight}px)`;
    tag.style.transform = `translate(${x + 20}px , ${y + 20}px)`;

  }
})
