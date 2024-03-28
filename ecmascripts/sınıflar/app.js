
// function Employe(name,age,salary) {

//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// Employe.prototype.showinfo=function () {
//     console.log("isim:" + this.name + "yas:" + this.age + "salary:" + this.salary);;
// }


// const emp=new Employe("mustafa",25,4000);


// console.log(emp);


class Employe{


    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    showinfo(){
        console.log("isim:" + this.name + "yas:" + this.age + "salary:" + this.salary);;
    }
}

const emp=new Employe("mustafa",25,4000);
console.log(emp);