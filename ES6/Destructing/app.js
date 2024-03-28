//destructing



// let number1,number2;


// arr=[100,200,300,400];


// // number1=arr[0];
// // number2=arr[2];


// [number1,number2]=arr;




// console.log(number1,number2);


// const numbers={
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50,
// };

// const {a,c,e}=numbers;

// console.log(a,c,e);




//func destructing


// const getlangs=()=>["python","java","c++"];


// const [lan1,lan2,lan3]=getlangs();

// console.log(lan1,lan2,lan3);

const person={
    name:"merrt",
    year:2000,
    salary:4000,
    showinfo:()=>console.log("bilgiler gösteriliyor....")
}

const {name:isim,year:yil,salary:maas,showinfo:bilgilerigost}=person;


console.log(isim,yil,maas);

bilgilerigost();