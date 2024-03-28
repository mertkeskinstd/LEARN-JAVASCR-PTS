function Employe(name,age) {
    this.name=name;
    this.age=age;
    //this.showinfo=()=>console.log("isim: "+ this.name + " Yaş: " + this.age );

    
}
Employe.prototype.showinfo=function(){ 
    console.log("isim: "+ this.name + " Yaş: " + this.age )
};



const emp1=new Employe("mustafa",26);
const emp2=new Employe("mert",22);

emp2.showinfo();
console.log(emp1);
console.log(emp2);

