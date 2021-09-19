
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // if (title.style.color == "blue") {
  //   title.style.color = "tomato";
  // } else {
  //   title.style.color = "blue"
  // }

  // const currentColor = title.style.color;
  // let Newcolor;
  // if (currentColor == "blue") {
  //   Newcolor = "tomato";
  // } else {
  //   Newcolor = "blue"
  // }
  // title.style.color = Newcolor;

  // css의 active 클래스로 변경하여 컬러 변경
  // 하지만 다른 클래스를 사용하게되면 문제가 생긴다. 
  // 클래스 이름을 변경하지 말자.

  const clickedclass = "active";
  // 방법 1 : 클래스의 이름을 찾아서 바꾸고 CSS에서 정리
  // if (title.className === clickedclass) {
  //   title.className = ""
  // } else {
  //   title.className = clickedclass
  // }

  // 방법 2 : 만약 클래스중 active라는 애가 있으면 추가/제거
  // if (title.classList.contains(clickedclass)) {
  //   // 그걸 삭제해줘
  //   title.classList.remove(clickedclass);
  // } else {
  //   title.classList.add(clickedclass)
  // }

  // 방법 3: clicked toggle 이용.cssd에 .clicked를 추가하였다.
  title.classList.toggle("clicked")


  // console.log(title.className)
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

