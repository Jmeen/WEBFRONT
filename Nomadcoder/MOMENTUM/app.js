
// const loginBtn = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a")

function handleLinkClick(event) {
  // 링크라든지, 추가적인 작업을 위해 기본 기능을 막아야 할 경우가 있다.
  // 이럴떄  preventDefault를 사용한다.
  event.preventDefault();
  console.log(event)
  alert("clicked!")
}
link.addEventListener("click", handleLinkClick)

function onLoginSubmit(event) {
  const userName = loginInput.value;
  // 브라우저의 리프래쉬를 막는다.
  event.preventDefault();
  // if (userName === '') {
  //   alert("Please wrtite your name")
  // } else if (userName.length > 15) {
  //   alert("your name is too long")
  // }
  console.log(event)


}
// 브라우저는 submit을 하면 새로고침을 하라고 프로그램 되어있다.
loginForm.addEventListener('submit', onLoginSubmit)