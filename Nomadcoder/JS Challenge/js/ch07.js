
// 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
// 범위에는 음수가 포함될 수 없습니다.
// 실시간으로 범위 값을 업데이트해야 합니다.
// 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
// 유저에게 게임의 승패를 알려야 합니다.
const selectNumber = document.querySelector("#RndNum");
const InputNumber = document.querySelector("#InputNum");
const inputForm = document.querySelector(".input")

const select = document.querySelector("#select")
const summary = document.querySelector("#summary")
const result = document.querySelector("#result")

inputForm.addEventListener('submit', (event) => {

  event.preventDefault();
  const selectNumberVal = parseInt(document.querySelector("#RndNum").value);
  const InputNumberVal = parseInt(document.querySelector("#InputNum").value);
  const RndNumber = Math.ceil(Math.random() * selectNumberVal);

  checknum(selectNumberVal, InputNumberVal)

  summary.innerText = `You chose: ${InputNumberVal}, the Machine chose: ${RndNumber}`

  if (selectNumberVal > 0) {
    select.classList.remove('selected')
  }

  if (InputNumberVal === RndNumber) {
    result.innerText = "YOU WON!"
  } else {
    result.innerText = "YOU LOST!"
  }
})

function checknum(selectNumberVal, InputNumberVal) {
  if (selectNumberVal <= 0) {
    alert("양수를 입력하세요")
    select.classList.add('selected');
    document.querySelector("#RndNum").value = "";
    selectNumber.focus();

  } else if (InputNumberVal <= 0) {
    alert("양수를 입력하세요")
    InputNumberVal = "";
    document.querySelector("#InputNum").value = "";
    InputNumberVal.focus();
    select.classList.add('selected');
  }
}

