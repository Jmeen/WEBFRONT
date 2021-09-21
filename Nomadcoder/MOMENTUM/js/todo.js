'user strict'
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos"

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const buttn = document.createElement("button");
  span.innerText = newTodo.text;
  buttn.innerText = "delete"
  buttn.addEventListener('click', deleteTodo)
  li.appendChild(span);
  li.appendChild(buttn);
  console.log(li)
  toDoList.appendChild(li)
}

//  todo 를 저장
function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


function deleteTodo(event) {
  console.log("lalalal")
  //클릭한 엘레먼트 부모 찾기
  console.log(event.target.parentElement)
  const li = event.target.parentElement;
  // 삭제하기
  li.remove();

}


function handletoDoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value)
  const newTodo = toDoInput.value;
  const newTodoObject = {
    text: newTodo,
    id: Date.now()
  }
  toDoInput.value = ""
  toDos.push(newTodoObject)
  paintToDo(newTodoObject);
  saveTodo();
}

toDoForm.addEventListener('submit', handletoDoSubmit)

// function sayHello(item) {
//   console.log("this is turn of " + item)
// }

const savedtoDos = localStorage.getItem(TODOS_KEY);
console.log(savedtoDos)
if (savedtoDos !== null) {
  const parsedTodos = JSON.parse(savedtoDos)
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo)
}
