export function revealNumber(number){

    const element =
    document.getElementById("timeNumber");


    element.innerHTML = number;


    element.classList.add(
        "active"
    );

}