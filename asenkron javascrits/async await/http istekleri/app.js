class Request{


    async get(url){
        const response= await  fetch(url);
        const data=await response.json();

        return data;

    }

    async post(url,data){
        const response= await fetch(url,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        });
        const resdata=await response.json();

        return resdata;
    }


    async put(url,data){
        const response= await fetch(url,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        });
        const resdata=await response.json();
        return resdata;
    }
    

    async delete(url){
        const response=await fetch(url,{
            method:'DELETE',
        });
        // const data=await response.json();

        return "veri silme islemi basarili!!!!";

    }
}



const request=new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(respose=>console.log(respose))

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
// .then(respose=>console.log(respose))
// .catch(err=>console.log(err))


// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 1, title: "mertttt" })
// .then(respose=>console.log(respose))
// .catch(err=>console.log(err))


request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(respose=>console.log(respose))
.catch(err=>console.log(err))