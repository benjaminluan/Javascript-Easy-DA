const inputHTML = document.querySelector("input");
const listHTML = document.querySelector(".list");
let inputValue = "";
let toDoList = [];
let counter = 0;

const monitorInput = (event) => {
  inputValue = event.target.value;
};

const add = () => {
  toDoList.push({
    id: counter++,
    task: inputValue,
  });
  console.log(toDoList);
  renderList();
};

const remove = (id) => {
  toDoList = toDoList.filter((list) => list.id !== id);
  renderList();
  console.log(toDoList);
};

const renderList = () => {
  listHTML.innerHTML = toDoList
    .map(
      (list) =>
        `<li>
    ${list.task} 
    <button class="todo__delete" onclick = 'remove(${list.id})'>x</button>
    </li>`
    )
    .join("");
};
