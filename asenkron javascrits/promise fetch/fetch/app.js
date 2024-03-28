function gettext() {
    fetch("example.txt")
    .then(response=>
        { 
        console.log(response)
        return response.text();
        })
    .then(response2=>console.log(response2))
    .catch(err=>console.log(err));
}


function getjson() {
    fetch("exam.json")
    .then(response=>response.json())
    .then(response1=>console.log(response1))
    .catch(err=>console.log(err));
    
}

getjson();
