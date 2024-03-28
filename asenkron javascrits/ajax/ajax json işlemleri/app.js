document.getElementById("ajax").addEventListener("click", getallemployes);




function getallemployes() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employe.json", true);

    xhr.onload = function () {

        let list = document.getElementById("employees");
        if (this.status == 200) {
            const employees = JSON.parse(this.responseText);


            employees.forEach(function (employe) {
                list.innerHTML += `  
                <tr>
                        <td>${employe.name}</td>
                        <td>${employe.age}</td>
                        <td>${employe.department}</td>
                        <td>${employe.salary}</td>
                        
                </tr>
                
                `;
            });


        }
    }

    xhr.send();

}