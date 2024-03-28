let value;

const firstname="lous";

const lastname="amstong";

const langs="java,python,c++";

value=firstname+"  "+lastname;

value=firstname.length;

value=firstname.concat(" ",lastname," ","caz");


value=firstname.toUpperCase();

value=firstname[1];


//index of;


value=firstname.indexOf("l");
value=firstname.indexOf("o");

//charat

value=firstname.charAt(2);


//split


value=langs.split(",");

//replace
value=langs.replace("python","css");

//includes

value=langs.includes("java");

console.log(value);