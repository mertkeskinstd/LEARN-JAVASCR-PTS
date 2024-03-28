



// const langs=["python","java","c+++"];


// langs.forEach(function(lang){
//     console.log(lang);
// });



// document.getElementById("btn").addEventListener("click",function () {
//     console.log("tikla");
// });


// function procces1(callback) {
//     setTimeout(function(){
//         console.log("proses1");
//         callback();
//     },3000);
// }



// function procces2() {
//     setTimeout(function () {
//         console.log("proses2");
//     },2000);
// }


// procces1(procces2);



const langs=["python","java","c++"];

function addlang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("eklendi");
        callback();
    },2000);
}

function getalllangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);

        });
    },1000);
}

addlang("javascript",getalllangs);
