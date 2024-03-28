// const object=new Object();

// object.name="mustafa";

// console.log(object);



function Employe(name,age) {

    this.name=name;
    this.age=age;
    this.showinfo=()=>console.log("bilgiler gosteriliyor...");
    this.toString=()=>console.log("bu bir employe objesi");
}


const emp1=new Employe("mustafa",25);
console.log(emp1);

console.log(emp1.toString());
