//while donguleri

// let i=0;

// while (i<10){
//     console.log(i);
//     i+=1;

// }

//break ve contiunu


// let i=0;

// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }

//     i++;
// }


// let i=0;


// while(i<10){
//     if (i==3||i==5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++
// }


//do while döngüsü


// let i=0;

// do{
//     console.log(i);
//     i++;
// }while(i<10);

// const langs=["python","javascripts","java"];

// let index=0;

// while(index<langs.length){
//     console.log(langs[index]);
//     index++;
// }



// for(let index=0; index<langs.length;index++){
//     console.log(index);
// }

// langs.forEach(function(lang,index){ 
//     console.log(lang,index);

// })

// const users=[
//     {name:"mustafa",age:25},
//     {name:"zeynep",age:30},
//     {name:"ali",age:85},
// ];

// const names =users.map(function(user){
//     return user.name
// });
// const age =users.map(function(user){
//     return user.age
// });

// console.log(names);
// console.log(age);


const user={
    name:"mustafa",
}

for (let key in user){
    console.log(key,user[key]);
}