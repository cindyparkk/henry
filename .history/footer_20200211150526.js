var rev = false;

function reveal(){
    if (rev === false) {
        document.querySelector("#footer").style.top = "90";
        rev = true;
    } else {
        document.querySelector("#footer").style.top = "80";
        rev = false;
    }
}