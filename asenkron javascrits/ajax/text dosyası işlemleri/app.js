//http status 
// 200=success
//403=forbidden
//


document.getElementById("btn").addEventListener("click",function(){

    const xhr=new XMLHttpRequest();
    

    // xhr.onprogress=function(){
    //     console.log("proccess işleniyor...",this.readyState);;
    // }
    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
            document.getElementById("ajax").textContent=this.responseText;
        }
    }


    // xhr.onreadystatechange=function(){
    //     // console.log(this.readyState);
    //     if(this.status==200 && this.readyState==4){
    //         //response ready
    //         console.log(this.responseText);
    //     }
    // }
    xhr.open("GET","example.txt",true);

    xhr.send();
});