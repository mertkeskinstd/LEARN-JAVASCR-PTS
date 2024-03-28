
let value;

const programmer={
    name:"mustafa murat coskun",
    age:25,
    email:"mst@gaişşç.com",
    langs:["python","jva","c++"],
    adress:{
        city:"ankara",
        street:"sincan"

    },
    work:function(){
        console.log("programcı calısıyor");
    }
};
value=programmer;

value=programmer.email;
value=programmer["email"];


value=programmer.adress.city;

programmer.work();


const programers=[
    {name:"mustii",age:27},

    {name:"oguz",age:25},
];
value=programers[0].name;
console.log(value);