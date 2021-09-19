
// const loginBtn = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting")
const HIDDEN = "hidden"
function handleLinkClick(event) {
  // 링크라든지, 추가적인 작업을 위해 기본 기능을 막아야 할 경우가 있다.
  // 이럴떄  preventDefault를 사용한다.
  event.preventDefault();
  console.log(event)
  alert("clicked!")
}
// link.addEventListener("click", handleLinkClick)

function onLoginSubmit(event) {
  // 브라우저의 리프래쉬를 막는다.
  event.preventDefault();
  const userName = loginInput.value;
  // if (userName === '') {
  //   alert("Please wrtite your name")
  // } else if (userName.length > 15) {
  //   alert("your name is too long")
  // }
  console.log(event)
  // css를 이용해 숨기고 싶을떄 
  loginForm.classList.add(HIDDEN)
  greeting.innerText = `Hello, ${userName} keep going!`;
  greeting.classList.remove(HIDDEN)


}
// 브라우저는 submit을 하면 새로고침을 하라고 프로그램 되어있다.
loginForm.addEventListener('submit', onLoginSubmit)


