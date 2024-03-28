document.getElementById("change").addEventListener("click",change);




function change() {

    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://api.ziraatbank.com.tr");
    xhr.onload=function(){
        if(this.status){
            const response=JSON.parse(this.responseText);

            // console.log(this.responseText);
            console.log(response);
        }
    }


    xhr.send();
    
}