//call apply bind

const obj={
    num1:10,
    num2:20,
};

const obj1={
    num1:30,
    num2:40,
};


function addnumber(num3,num4) {
    console.log(this.num1 + this.num2 + num3 +num4);
}

// addnumber.call(obj,100,200);;
// addnumber.call(obj1,100,200);

// addnumber.apply(obj,[100,200]);
// addnumber.apply(obj1,[100,200]);

//bind

function getnumbertotal(num3,num4) {
    return this.num1 + this.num2 +num3+num4;    
}

const copyfunc1=getnumbertotal.bind(obj);
const copyfunc2=getnumbertotal.bind(obj1);


console.log(copyfunc1(100,200));
console.log(copyfunc2(100,200));