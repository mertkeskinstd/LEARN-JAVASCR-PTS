

class UI{



    static addfilmtoui (newfilm) {
        /*
        <!-- <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> -->
    <!-- <tr>
    */
    const filmlist=document.getElementById("films");
    // console.log(filmlist);
    filmlist.innerHTML+=`
        <tr>
            <td><img src="${newfilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newfilm.title}</td>
            <td>${newfilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
    `
    }
    
    
    static clearinp(el1,el2,el3) {
        el1.value="";
        el2.value="";
        el3.value="";
        
    }
    
    static displaymessages (messages,types) {
        const cardbody=document.querySelector(".card-body");
    
        //alert divi
        const div=document.createElement("div");
        div.className=`alert alert-${types}`;
        div.textContent=messages;
    
    
        cardbody.appendChild(div);
        setTimeout(function(){
            div.remove();
        },1500);
    }
    
    
    static loasallfilms (films) {
        const filmlist=document.getElementById("films");
    
        films.forEach(function(film) {
            filmlist.innerHTML+=`
            <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> `
            
        });
        
    }
    
    static deletefilmfromui (element){
        
        element.parentElement.parentElement.remove();
    
    }
    
    static clearallfilmsfromui(){
        const filmlist=document.getElementById("films");
        //filmlist.innerHTML=""; yavas calısan bir yontem
        while(filmlist.firstElementChild !=null){
            filmlist.firstElementChild.remove();
        }
    }
}

