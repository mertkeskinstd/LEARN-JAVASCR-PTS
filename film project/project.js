const form=document.getElementById("film-form");
const titleelement=document.querySelector("#title");
const directorelement=document.querySelector("#director");
const urlelement=document.querySelector("#url");
const secondcardbody=document.querySelectorAll(".card-body")[1];
const clearfilm=document.getElementById("clear-films");



//ui objesi başlatma...

const ui=new UI();
//storage objesi üret...

const storage=new Storage();

//tüm eventleri yukleme
eventListeners();


function eventListeners() {
    form.addEventListener("submit",addfilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getfilmfromstrage();
        ui.loasallfilms(films);
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
        ui.displaymessages("Tüm alanları doldurun...","danger")
    }
    else{

        //yeni film
        const newfilm=new Film(title,director,url);
        ui.addfilmtoui(newfilm); //ui film add
        storage.addfilmtostorage(newfilm);
        ui.displaymessages("Film başarıtla eklendi","success")
    }



    ui.clearinp(titleelement,directorelement,urlelement);
    e.preventDefault();
}


function deletefilm(e) {

    if(e.target.id==="delete-film"){
        ui.deletefilmfromui(e.target);
        storage.deletefilmfromstorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displaymessages("Silme işlemi başarılı","success")
    }
    
}


function clearallfilms() {

    if(confirm("Eminmisiniz?")){
        ui.clearallfilmsfromui();
        storage.clearallfilmsfromstorage();
        
    }  
}