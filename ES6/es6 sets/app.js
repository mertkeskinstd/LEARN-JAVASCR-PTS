//ES6 SETS

const myset=new Set();


myset.add(100);
myset.add(100);

myset.add("mustafa");
myset.add(true);




const myset2=new Set([100,3.14,true,"MUSTFA"]);

// console.log(myset);
// console.log(myset2);


// //size
// console.log(myset.size);

// //delete metodu

// myset.delete("mustafa");
// console.log(myset);

// //has metodu

// console.log(myset.has("mustafa"));


myset2.forEach(function(value){
    console.log(value);
})

//for of

for (let value of myset2){console.log(value);}



const arr=Array.from(myset2);

console.log(arr);


