const element = document.querySelector("#clear-todos");


//eleent ozellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.href);
//console.log(element.style);


//style deistir


// element.className = "btn btn-success"

// element.style.color="#000";
// element.style.marginleft="60px";
// element.href="https://www.google.com.tr/?hl=tr";
// element.target="_blank";

// element.textContent="silin";
// element.innerHTML="<span style='color:blue';>Silin</span>"


// const elemets=document.querySelectorAll(".list-group-item");

// elemets.forEach(function(el){
//     el.style.color="red";
//     el.style.background="#eee"
// })

let element2=document.querySelector("li:last-child");

element2=document.querySelector("li:nth-child(2)");
element2=document.querySelector("li:nth-child(3)");

element2=document.querySelectorAll("li:nth-child(odd)")
element2=document.querySelectorAll("li:nth-child(even)")

element2.forEach(function(el){
    el.style.background="#ccc";
    el.style.color="red"
})

console.log(element2);

