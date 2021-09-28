window.addEventListener("resize", () => {
  const windowx = window.innerWidth;
  if (windowx < 675) {
    document.body.style.backgroundColor = "blue";
  } else if (windowx >= 675 && windowx < 1024) {
    document.body.style.backgroundColor = "violet";
  } else if (windowx >= 1024) {
    document.body.style.backgroundColor = "yellow";
  }
});

const h2 = document.createElement("h1");
h2.innerText = "Hello";
h2.style.color = "White";
document.body.prepend(h2);
