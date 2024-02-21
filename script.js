function writeFunction(){
    let ulDom = document.querySelector(".list");
    let liDom = document.createElement('li');
    
    
    if(document.querySelector(".messageText").value !=""){
        liDom.innerHTML = document.querySelector(".messageText").value;
        ulDom.append(liDom);
        document.querySelector(".messageText").value = "";
    }else{
        alert("hata")
    }   
}