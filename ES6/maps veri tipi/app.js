// //maplerr



// let map1=new Map();

// console.log(typeof map1);



// const key1="mustafa";
// const key2={a:1,b:2};
// const key3=()=>2;


// //set
// map1.set(key1,"string deger");
// map1.set(key2,"object literal degeri");
// map1.set(key3,"function degeri")


// //get

// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// console.log(map1);

// //map boyutu

// console.log(map1.size);
const city=new Map();

city.set("ankara",5);
city.set("istanbul",15);
city.set("izmir",4);


//for each

// city.forEach(function(value,key) {
//     console.log(key,value);
    
// })


// for (let [key,value] of city){
//     console.log(key,value);

// }

// for (let key of city.keys()){
//     console.log(key);
// }


// for (let value of city.values()){
//     console.log(value);
// }


// const arr=[["key1","value1"],["key2","value2"]];


// const lastmap=new Map(arr);

// console.log(lastmap);

//mapleden array olusturma

const arr=Array.from(city);

console.log(arr);















