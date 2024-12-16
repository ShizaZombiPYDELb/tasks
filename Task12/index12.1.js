const button1 = document.getElementById("adress");
const button2 = document.getElementById("way");
let adres = "";

button1.addEventListener("click", function(event){
    let url = prompt("Put adress");
    if (url !== "" && url !== null){
        if (!url.startsWith("http://") && !url.startsWith("https://")){
            adres = "https://" + url;
        } else {
            adres = url;
        }
    } else {
        alert("de adres?");
    }
});

button2.addEventListener("click", function(event){
    if (adres){
        window.location.href = adres;
    } else {
        alert("ne pabotaet");
    }
});