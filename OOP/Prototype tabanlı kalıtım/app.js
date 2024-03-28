//inheritence


function Person(name,age) {

    this.name=name;
    this.age=age;
    
}

Person.prototype.showinfo=function(){
    console.log("isim:" + this.name + "yaş:" + this.age);
}



function Employe(name,age,salary) {
    
    // this.name=name;
    // this.age=age;
    
    Person.call(this,name,age);
    this.salary=salary;
    
}

Employe.prototype=Object.create(Person.prototype);
Employe.prototype.toString=function () {
    console.log("burası");
    
}
Employe.prototype.showinfo=function () {
    console.log("isim:" + this.name + "yaş:" + this.age + "masa:" + this.salary);
    
}

const emp=new Employe("mustafa",25,4000);

//console.log(emp);

emp.showinfo();
// console.log(emp.toString());