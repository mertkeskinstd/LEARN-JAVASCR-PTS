const form=document.getElementById("film-form");
const titleelement=document.querySelector("#title");
const directorelement=document.querySelector("#director");
const urlelement=document.querySelector("#url");
const secondcardbody=document.querySelectorAll(".card-body")[1];
const clearfilm=document.getElementById("clear-films");



//ui objesi başlatma...


//tüm eventleri yukleme
eventListeners();


function eventListeners() {
    form.addEventListener("submit",addfilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getfilmfromstrage();
        UI.loasallfilms(films);
    });
    secondcardbody.addEventListener("click",deletefilm);
    clearfilm.addEventListener("click",clearallfilms)
}

function addfilm(e) {
    const title=titleelement.value;
    const director=directorelement.value;
    const url=urlelement.value;


    if(title===""|| director==="" || url===""){
        //hata
        UI.displaymessages("Tüm alanları doldurun...","danger")
    }
    else{

        //yeni film
        const newfilm=new Film(title,director,url);
        UI.addfilmtoui(newfilm); //ui film add
        Storage.addfilmtostorage(newfilm);
        UI.displaymessages("Film başarıtla eklendi","success")
    }



    UI.clearinp(titleelement,directorelement,urlelement);
    e.preventDefault();
}


function deletefilm(e) {

    if(e.target.id==="delete-film"){
        UI.deletefilmfromui(e.target);
        Storage.deletefilmfromstorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displaymessages("Silme işlemi başarılı","success")
    }
    
}


function clearallfilms() {

    if(confirm("Eminmisiniz?")){
        UI.clearallfilmsfromui();
        Storage.clearallfilmsfromstorage();
        
    }  
}