const portalGlow =
document.getElementById("portalGlow");


const content =
document.getElementById("content");



export function awakenPortal(){

    portalGlow.classList.add(
        "awake"
    );


    content.classList.add(
        "visible"
    );

}



export function pulsePortal(){

    portalGlow.classList.add(
        "pulse"
    );


    setTimeout(()=>{

        portalGlow.classList.remove(
            "pulse"
        );

    },2000);

}



export function revealElement(element){

    if(!element) return;


    element.classList.add(
        "reveal"
    );

}
