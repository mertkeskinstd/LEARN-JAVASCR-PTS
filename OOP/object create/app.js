// const obj={
//     test1:()=>{console.log("test1");},
//     test2:()=>{console.log("test2");}
// }

// //console.log(obj);


// const emp= Object.create(obj);
// emp.name="mustafa";
// emp.age=23;
// console.log(emp);


function Person() {


    
}

Person.prototype.test1=function() {
    console.log("test1");
    
}

Person.prototype.test2=function() {
    console.log("test2");
    
}

function Employe(name,age) {
    this.name=name;
    this.age=age;
    
}
Employe.prototype=Object.create(Person.prototype)
Employe.prototype.deneme=function(){
    console.log("deneme");
}
const emp=new Employe("mustafa",23);

console.log(emp);

