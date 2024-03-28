


// function getdata(data) {

//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             if (typeof data ==="string") {
//                 //olumlu
//                 resolve(data);
//             }
//             else{
//                 //olumsuz
//                 reject(new Error("lutfen string deger giriniz.."))
//             }
//         }, 5000);
//     })
// }

// // console.log(getdata("merhaba"));


// getdata(25)
// .then(response=>console.log("Gelen Deger: "+response))
// .catch(err=>console.error(err));


function addtwo(number) {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if (typeof number==="number") {
                resolve(number+2);
            }
            else{
                reject(new Error("lutfen bir sayi giriniz"));
            }
        },3000);
    })
    
}

addtwo("maraba").then(response=>{
    console.log(response);
    return response +2;
}).then(function(response2){
    console.log(response2);
}).catch(err=>{
    console.log(err);
})

//yalnızca 1 tane catch ama 1 den fazla then kullanılabilir....