const filterinp=document.getElementById("filter");
const todoform=document.getElementById("todo-form");

todoform.addEventListener("submit",submitform);
function submitform(e){
    console.log("submit eventi");




    e.preventDefault();
}


// filterinp.onfocus=function () {
//     console.log("naber");
    
// }

// filterinp.addEventListener("focus",function (e) {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);

//     //console.log("naber");
    
// })


