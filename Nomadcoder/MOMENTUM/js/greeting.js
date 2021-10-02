
// const loginBtn = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting")
const HIDDEN = "hidden"
const USERNAME_KEY = "userName"

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
  const usernameThatTheUserWrote = loginInput.value;
  // if (usernameThatTheUserWrote === '') {
  //   alert("Please wrtite your name")
  // } else if (usernameThatTheUserWrote.length > 15) {
  //   alert("your name is too long")
  // }
  console.log(event)
  // css를 이용해 숨기고 싶을떄 
  loginForm.classList.add(HIDDEN)
  // greeting.innerText = `Hello, ${userName} keep going!`;
  // greeting.classList.remove(HIDDEN)
  paintGreeting(usernameThatTheUserWrote);
  // User이름 기억하기 - local Storage
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
}
// 브라우저는 submit을 하면 새로고침을 하라고 프로그램 되어있다.

// 중복되는 코드는 함수로 만들자
function paintGreeting(savedUsername) {
  greeting.classList.remove(HIDDEN)
  greeting.innerText = `Hello, ${savedUsername} keep going!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  // show thr form
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  // show greeting
  // greeting.classList.remove(HIDDEN)
  // greeting.innerText = `Hello, ${savedUsername} keep going!`;
  paintGreeting(savedUsername);
}

// greeting.addEventListener('click',logouthandler)