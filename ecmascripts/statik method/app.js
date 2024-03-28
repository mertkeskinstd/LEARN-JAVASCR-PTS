

class Math{


    pow(x){
        console.log(x*x);
    }

    static cube(x){
        console.log(x*x*x);
    }

}

const m=new Math();
Math.cube(3);

m.pow(2);

console.log(m);