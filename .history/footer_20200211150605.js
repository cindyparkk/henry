var rev = false;

function reveal(){
    if (rev === false) {
        document.querySelector("#footer").style.top = "90vh";
        rev = true;
    } else {
        document.querySelector("#footer").style.top = "80vh";
        rev = false;
    }
}