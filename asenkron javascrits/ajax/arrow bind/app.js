const person={
    age:25,

    // tellage:function(){

    //     //this-person
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)

    ///this-window
    tellage:()=>{
        console.log(this);
        console.log(this.age);
    }

}



person.tellage();