//local storge


// localStorage.setItem("hareket","squat");

// localStorage.setItem("hareket1","50");


//get item


// const value=localStorage.getItem("hareket")
// console.log(value);
// console.log(typeof value);


//clear loacal storge
//localStorage.clear();

// if (localStorage.getItem("hareket")===null){
//     console.log("sorguladigini veri bulunmakmaktadir");

// }
// else{
//     console.log("veri var");
// }

//local storge - array yazma

// const todos=["Todo 1","Todo 2","Todo 3"];


//localStorage.setItem("todos",JSON.stringify(todos));

// const value=JSON.parse(localStorage.getItem("todos"));
// console.log(value);
//localStorage.setItem("todos",todos);

//console.log(typeof localStorage.getItem("todos"));


const form=document.getElementById("todo-form");

const inp=document.getElementById("todo");

form.addEventListener("submit",addtodo);

function addtodo(e) {
    const value=inp.value;

    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];

    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos))
    
    e.preventDefault();
}

