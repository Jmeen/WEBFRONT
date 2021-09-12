'use strict'
/**
 * 왜? 이 코드를 작성하는지 주석을 남겨라.
 */
// 사용자가 인풋에서 택스트를 입력
// + 버튼 클릭 또는 엔터키 입력시 아이템 등록
// 등록된 아이템 리스트에 등록
// delete버튼 클릭하면 리스트에서 삭제

const items = document.querySelector(".items");
const input = document.querySelector(".footerinput");
const addbtn = document.querySelector(".footer_button")

// add버튼을 눌렀을때 이벤트 처리 : on이라는것을 붙이는게 통념
function onadd() {
  // 1. 사용자가 입력한 텍스트 받아온다.
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  console.log(text);

  // 2. 새로운 아이템을 만듬( 텍스트 + 삭제 버튼)
  const item = createitem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);

  // 4. 추가된 부분으로 자동 스크롤링
  item.scrollIntoView({block:'center'})

  // 5. input을 초기화 한다.
  input.value = "";
  input.focus();
}

function createitem(text) {
  const itemrow = document.createElement('li');
  itemrow.setAttribute('class', 'item_row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', "item_name");
  name.innerText = text;

  const deletebtn = document.createElement('button');
  deletebtn.setAttribute('class', 'item_delete');
  deletebtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deletebtn.addEventListener('click', () => {
    items.removeChild(itemrow)
  })

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute('class', 'item_divider');

  item.appendChild(name);
  item.appendChild(deletebtn);

  itemrow.appendChild(item);
  itemrow.appendChild(itemDivider);
  return itemrow;
}

addbtn.addEventListener('click', () => {
  onadd();
})

input.addEventListener('keypress', (event) => {
  // consol.log('key');
  if (event.key == 'Enter') {
    onadd();
  }
})