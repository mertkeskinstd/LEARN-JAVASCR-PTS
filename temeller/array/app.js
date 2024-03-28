let value;

const number=[43,56,96,85,87];

//const number2=new Array(52,63,52,41,);;

const langs=["python","java","c++"];
const a=["merhaba",22,null,undefined,3.14]


value=number.length;

number[2]=5000;
value=number;

//indexof
value=number.indexOf(5000);

//arrayin sonuna deger ekleme

number.push(6000);

value=number;
number.unshift(778484848);
value=number;


//sondan deger atma

number.pop();
value=number;
number.shift();
value=number;
//belli bir kısmını at
number.splice(0,3);
value=number;



number.reverse()
value=number;

value.sort();


value=number.sort(function(x,y){
    return x-y;

});
value=number.sort(function(x,y){
    return y-x;

});
console.log(value);