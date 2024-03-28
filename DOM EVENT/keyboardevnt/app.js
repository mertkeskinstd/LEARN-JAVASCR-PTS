const header=document.querySelector(".card-header");
const todoinp=document.querySelector("#todo");



todoinp.addEventListener("keyup",changetext);


function changetext(e) {

    header.textContent=e.target.value;
    //console.log(e.key);
    if(header.textContent === ""){
        header.textContent= "Todo eEkleyin"
    }
    
}

//key press

// document.addEventListener("keypress",run);

// function run(e) {
//     //console.log(e.which);
//     console.log("naber");
//     console.log(e.key);

// }


//key down
// document.addEventListener("keydown",run);


// function run(e) {
//     console.log(e.key);

// }


//keyup

// document.addEventListener("keyup", run);


// function run(e) {
//     console.log(e.key);

// }