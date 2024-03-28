// async function test(data){
//     // return data;
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("bu bir degerdir");

//         },5000);
//     });
//     let response=await promise;
    

//     return response;
// }


// test("maraba").then(response=>console.log(response))



// async function tesd(data){

//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof data==="string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("lutfen bir string deger girinizç....."))
//             }
//         },5000);
//     });
//     const response= promise;
//     return response;


// }


// tesd(84784)
// .then(response=>console.log(response))
// .catch(err=>console.log(err));

async function currency(url){
    const response =await fetch(url);
    const data=await response.json();

    return data;


}

currency("https://jsonplaceholder.typicode.com/albums")
.then(response=>console.log(response));
