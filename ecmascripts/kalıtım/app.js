

class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    showinfo(){
        console.log("isim: " + this.name + "yas:" + this.age);
    }
}


class Employe extends Person{
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);
        this.salary=salary;
    }
    showinfo(){
        console.log("isim: " + this.name + "yas:" + this.age  + "salary: " + this.salary);

    }
    toString(){
        console.log("employe");
    }
    raisesalary(amount){
        this.salary +=amount;
    }
}

const emp=new Employe("mustafa",25,4000);

emp.raisesalary(500);
// console.log(emp);
emp.showinfo();
emp.toString()



4
