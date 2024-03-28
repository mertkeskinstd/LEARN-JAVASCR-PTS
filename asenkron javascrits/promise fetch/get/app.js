

class Request {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    post(url, data) {
        return new Promise((resolve, reject) => {


            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    put(url, data) {
        return new Promise((resolve, reject) => {



            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }

    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'DELETE',
                
            })
            .then(response=>resolve("veri işlemi basarili!!"))
            .catch(err=>reject("silme işlemi başarisiz!!!"));
        })
    }

}



const request = new Request();

// let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data=>{
//     albums=data;
//     console.log(albums);
// })
// .catch(err=>console.log(err));


// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
// .then(newalbm=>console.log(newalbm))
// .catch(err=>console.log(err))

// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 1, title: "mert" })
// .then(albm=>console.log(albm))
// .catch(err=>console.log(err))



request.delete("https://jsonplaceholder.typicode.com/albums/1 ")
.then(alm=>console.log(alm))
.catch(err=>console.log(err))