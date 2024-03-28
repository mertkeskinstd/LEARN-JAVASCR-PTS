//event bubbling


// document.querySelector(".container").addEventListener("click",function run() {
//     console.log("div cont");
    
// })

// document.querySelector(".card.row").addEventListener("click",function run() {
//     console.log("cardror");
    
// })

// document.querySelectorAll(".card-body")[1].addEventListener("click",function run() {
//     console.log("div cont");
    
// })

//event capp

const cardbody=document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);


function run(e) {
    if (e.target.className==="fa fa-remove"){
        console.log("silme işlemi");
    }
    if(e.target.id==="filter"){
        console.log("filtreleme işlemi");
    }
    
    if(e.target.id==="clear-todos"){
        console.log("tüm tasklar sil");
    }
}


