var menu_state = false;

function menuToggle(){
    if (menu_state === false){
        document.querySelector("#menu").style.left = "0px";
        menu_state = true;
    } else {
        document.querySelector("#menu").style.left = "-180px";
        menu_state = false;
    }
}