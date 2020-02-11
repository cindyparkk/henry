var colour = 0;

function cchange(){
    if(colour === 0) {

    document.querySelector("#pink").style.zIndex = "1";
    document.querySelector("#purple").style.zIndex = "1";
    document.querySelector("#blue").style.zIndex = "0";
    document.querySelector("#pink").style.top = "30%";
    document.querySelector("#pink").style.colour = "rgb(111, 120, 255)";
    document.querySelector("#purple").style.top = "40%";
    document.querySelector("#purple").style.colour = "pink";
    document.querySelector("#blue").style.top = "20%";
    document.querySelector("#blue").style.colour = "rgb(148, 255, 218)";
    colour = 1;
} else if(colour === 1) {
    document.querySelector("#pink").style.zIndex = "0";
    document.querySelector("#purple").style.zIndex = "1";
    document.querySelector("#blue").style.zIndex = "1";
    document.querySelector("#pink").style.top = "40%";
    document.querySelector("#pink").style.colour = "rgb(148, 255, 218";
    document.querySelector("#purple").style.top = "20%";
    document.querySelector("#purple").style.colour = "rgb(111, 120, 255)";
    document.querySelector("#blue").style.top = "30%";
    document.querySelector("#blue").style.colour = "pink";
    colour = 2;
}else if(colour === 2) {
    document.querySelector("#pink").style.top = "20%";
    document.querySelector("#pink").style.colour = "pink";
    document.querySelector("#purple").style.top = "30%";
    document.querySelector("#purple").style.colour = "rgb(148, 255, 218";
    document.querySelector("#blue").style.top = "40%";
    document.querySelector("#blue").style.colour = "rgb(111, 120, 255)";
    colour = 0;
}
}

// function changecolour() {
//     document.querySelector("#pink")
// }