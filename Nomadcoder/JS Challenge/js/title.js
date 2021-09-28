/ <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("h2");

//✅ The text of the title should change when the mouse is on top of it.
title.addEventListener("mouseenter", () => superEventHandler.handleMouseOver());

// ✅ The text of the title should change when the mouse is leaves it.
title.addEventListener("mouseleave", () =>
  superEventHandler.handleMouseLeave()
);

// ✅ When the window is resized the title should change.
window.addEventListener("resize", () => superEventHandler.handleResize());

// ✅ On right click the title should also change.
document.addEventListener("contextmenu", () =>
  superEventHandler.handleRclick()
);
// ✅ The colors of the title should come from a color from the colors array.
// ✅ DO NOT CHANGE .css, or .html files.
// ✅ ALL function handlers should be INSIDE of "superEventHandler"

const superEventHandler = {
  handleMouseOver: function () {
    title.innerText = "The Mouse is here!";
    title.style.color = "#1abc9c";
  },
  handleMouseLeave: function () {
    title.innerText = "The Mouse is gone!";
    title.style.color = "#3498db";
  },
  handleResize: function () {
    title.innerText = "You just resized!";
    title.style.color = "#9b59b6";
  },
  handleRclick: function () {
    title.innerText = "That was right button";
    title.style.color = "#e74c3c";
  }
};
