

function mar(name="bilgi yok",age="bilgi yok"){
    console.log(`isim: ${name} yas: ${age}`);
}

mar();


//function expresion

const merhaba = function(name){
    console.log("merhaba"+name);
}

merhaba("murat");

//immediently  invoked function(IIFE)

(function(name){
    console.log("meraba"+name);
})("murat");