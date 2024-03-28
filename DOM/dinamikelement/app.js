//yeni element olusturma




const newlink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];

newlink.id="clear-todos";
newlink.className="btn btn-danger";
newlink.href="https://www.google.com.tr";
newlink.target="_blank"

newlink.appendChild(document.createTextNode("farklisayfagit"));
cardbody.appendChild(newlink)

console.log(newlink);
