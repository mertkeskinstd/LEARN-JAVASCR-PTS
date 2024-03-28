//console.log(this);

// const emp1={
//     name:"mustafa",
//     age:23,
//     showinfo:function() {
//         console.log("bilgiler gosteriliyot...");
//     }
// };

// const emp2={
//     name:"mert",
//     age:23,
// }

// emp1.salary=4000;
// emp1.showinfo();


// console.log(emp1);




function Employe(name,age,salary) {//yapıcı fonk-construction

    this.name=name;
    this.age=age;
    this.salary=salary;

    this.showinfo=function () {
        console.log(this.name,this.age,this.salary);
        
    }
}

const emp1=new Employe("ahmet",23,33333);
const emp2= new Employe("mustafa",25,8000);


emp1.showinfo();


