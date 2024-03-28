
//element seçme

const form= document.querySelector("#todo-form");
const todoinput=document.querySelector("#todo");
const todolist=document.querySelector(".list-group");
const firstcardbody=document.querySelectorAll(".card-body")[0];
const secondcardbody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearbuton=document.querySelector("#clear-todos");




eventlistener();


function eventlistener() {
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadalltodosui);
    secondcardbody.addEventListener("click",deletetodo);
    filter.addEventListener("keyup",filterTodos);
    clearbuton.addEventListener("click",clearaltodos);


}


function clearaltodos(e) {
    if (confirm("Tümünü silmek istediğinizden eminmiiniz")){
        // todolist.innerHTML="";//yavas bir 
        while(todolist.firstElementChild !=null){
            todolist.removeChild(todolist.firstElementChild)
        }
        localStorage.removeItem("todos");
        

    }
    
}



function filterTodos(e){
    const filtervalue=e.target.value.toLowerCase();
    const listitem=document.querySelectorAll(".list-group-item");

    listitem.forEach(function(item){
        const text=item.textContent.toLowerCase();
        if(text.indexOf(filtervalue)===-1){
            item.setAttribute("style","display:none !important");
        }
        else{
            item.setAttribute("style","display:block");
        }
    })
    
}



function deletetodo(e) {
    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deletetodofromstorge(e.target.parentElement.parentElement.textContent);
        showalert("success","Todo başarıyla silindi.");
    }
    
}


function deletetodofromstorge(deletetodo) {
    let todos=gettodosfromstorage();
    todos.forEach(function (todo,index) {
        if(todo===deletetodo){
            todos.splice(index,1);
        }
        
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}






function loadalltodosui() {
    let todos=gettodosfromstorage();
    todos.forEach(function (todo) {
        addTodoUI(todo);
        
    })
}




function addTodo(e) {

    const newtodo=todoinput.value.trim();
    if(newtodo===""){
        showalert("danger","Lütfen bir todo giriniz.")
    }
    else{
        addTodoUI(newtodo);
        addtodostorge(newtodo);
        showalert("success","Todo başarıyla eklendi.")
    }

    
    e.preventDefault();
}




function gettodosfromstorage() {
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

    
}



function addtodostorge(newtodo) {
    let todos=gettodosfromstorage()
    todos.push(newtodo);
    localStorage.setItem("todos",JSON.stringify(todos));
    
}



function showalert(type,message) {
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;

    firstcardbody.appendChild(alert);
    setTimeout(function (){
        alert.remove();
        
    },1500);
    
    
}



function addTodoUI(newtodo) {
    //list item olusturma
    const listitem=document.createElement("li");

    //link olusturma
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>"

    listitem.className="list-group-item d-flex justify-content-between";

    //textnode ekeleme
    listitem.appendChild(document.createTextNode(newtodo));
    listitem.appendChild(link);
    
    //todoliste list item ekleme
    todolist.appendChild(listitem);
    todoinput.value="";
}