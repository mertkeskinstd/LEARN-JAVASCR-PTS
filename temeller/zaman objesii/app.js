let value;

const now=new Date()///şuanki zaman alınır
const date1=new Date("7-06-2000 02:59:00");
const date2=new Date("July 6 2000" );
const date3=new Date("7/06/2000");

value=date1;
value=date1.getMonth();
date1.setMonth(8);
date1.setDate(15);
value=date1;

console.log(value);