function Storage() {
    
}



Storage.prototype.addfilmtostorage=function (newfilm) {
    let films=this.getfilmfromstrage();

    films.push(newfilm);
    localStorage.setItem("films",JSON.stringify(films));
}


Storage.prototype.getfilmfromstrage=function(){
    let films;

    if(localStorage.getItem("films")===null){
        films=[];
    }
    else{
        films=JSON.parse(localStorage.getItem("films"));
    }

    return films;
}


Storage.prototype.deletefilmfromstorage=function (filmtitle) {
    let films=this.getfilmfromstrage();
    films.forEach(function(film,index) {
        if(film.title===filmtitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
    
}


Storage.prototype.clearallfilmsfromstorage=function () {
    localStorage.removeItem("films")
    
}