let value;


const todolist=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row")
value=todolist;
value=todo;
value=cardrow;


//child notes-text dahil alıyor

value=todolist.childNodes;

//childeren element
value=todolist.children;
value=todolist.children[todolist.children.length-1];
value=todolist.children[2].textContent="degis"

value=cardrow.children[2].children[1].textContent="degist";


value=todolist;
value=todolist.firstElementChild;
value=todolist.lastElementChild;
value=todolist.childElementCount;


value=cardrow.parentElement;

//element kardeşleri bulma

value=todo.previousElementSibling;
value=todo.nextElementSibling;



console.log(value);