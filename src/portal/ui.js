export function setMessage(text){

    const message =
    document.getElementById("message");

    message.innerHTML = text;

}


export function showButton(){

    const button =
    document.getElementById("portalButton");

    button.style.display="inline-block";

}


export function hideButton(){

    const button =
    document.getElementById("portalButton");

    button.style.display="none";

}