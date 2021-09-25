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
const form = document.querySelector(".newForm")

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
  item.scrollIntoView({ block: 'center' })

  // 5. input을 초기화 한다.
  input.value = "";
  input.focus();
}
let id = 0;
console.log(id)
function createitem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  // 변경된 코드
  itemRow.setAttribute('data-id', id)
  itemRow.innerHTML = `
      <div class="item">
        <span class="item_name">${text}</span>
        <button class="item_delete">
          <i class="fas fa-trash-alt" data-id="${id}"></i>
      </button>
      </div> 
      <div class="item_divider"></div>`;
  id++;
  return itemRow;

  // 기존 코드
  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');

  // const name = document.createElement('span');
  // name.setAttribute('class', "item_name");
  // name.innerText = text;

  // const deletebtn = document.createElement('button');
  // deletebtn.setAttribute('class', 'item_delete');
  // deletebtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // deletebtn.addEventListener('click', () => {
  //   items.removeChild(itemrow)
  // })

  // const itemDivider = document.createElement("div");
  // itemDivider.setAttribute('class', 'item_divider');

  // item.appendChild(name);
  // item.appendChild(deletebtn);

  // itemrow.appendChild(item);
  // itemrow.appendChild(itemDivider);
  // return itemRow;
}






form.addEventListener('submit', (event) => {
  event.preventDefault();
  onadd();
})





// submit으로 변경
// addbtn.addEventListener('click', () => {
//   onadd();
// })

// // keypress 이벤트는 더이상 사용하지 않는다. 수정 필요
// // input.addEventListener('keypress', (event) => {
// input.addEventListener('keydown', (event) => {
//   // consol.log('key');
//   if (event.isComposing) {
//     return;
//   }
//   if (event.key == 'Enter') {
//     onadd();
//   }
// })

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if (id) {
    console.log(id)
    const toBeDeleted = document.querySelector(`.item_row[data-id='${id}']`)
    toBeDeleted.remove();
  }
})