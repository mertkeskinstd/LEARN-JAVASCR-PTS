///session storge key value


const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");


const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const delkey=document.querySelector("#deletekey");


add.addEventListener("click",addItem);
del.addEventListener("click",deeIteItem);
clear.addEventListener("click",clearItems);

function addItem(e) {
    sessionStorage.setItem(addkey.value,addvalue.value);
}
function deeIteItem(e) {
    sessionStorage.removeItem(delkey.value);
}
function clearItems(e) {
    sessionStorage.clear();
}
