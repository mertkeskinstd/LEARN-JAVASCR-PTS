//eleemnti id ye gore secme


let element;

element=document.getElementById("todo-form");

element=document.getElementById("tasks-title")


//elementi classa gore secme

element=document.getElementsByClassName("list-group-item");

element=document.getElementsByClassName("list-group-item")[0];

//element tage gore secme

element=document.getElementsByTagName("div");

//query selector - css selector-tek bir element donuyor

element=document.querySelector("#todo-form");
element=document.querySelector("#tasks-list")

element=document.querySelector(".list-group-item");
element=document.querySelector("li");
element=document.querySelector("div");


//queryselectorall tüm hepsini alır

element=document.querySelectorAll("li")

element.forEach(function(el){
    console.log(el);
});








console.log(element);
