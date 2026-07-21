const stars =
document.getElementById("stars");

const nebula =
document.getElementById("nebula");

const particles =
document.getElementById("particles");


export function createStars(){

    const count = 180;


    for(let i = 0; i < count; i++){

        const star =
        document.createElement("span");


        star.className = "star";


        star.style.left =
        Math.random() * 100 + "%";


        star.style.top =
        Math.random() * 100 + "%";


        star.style.animationDelay =
        Math.random() * 5 + "s";


        star.style.opacity =
        Math.random();


        stars.appendChild(star);

    }

}



export function createParticles(){

    const count = 60;


    for(let i = 0; i < count; i++){

        const particle =
        document.createElement("span");


        particle.className =
        "particle";


        particle.style.left =
        Math.random() * 100 + "%";


        particle.style.top =
        Math.random() * 100 + "%";


        particle.style.animationDelay =
        Math.random() * 8 + "s";


        particles.appendChild(particle);

    }

}



export function activatePortal(){

    nebula.classList.add(
        "active"
    );


    particles.classList.add(
        "active"
    );

}



export function mouseGalaxy(){

    document.addEventListener(
        "mousemove",
        (event)=>{


            const x =
            (event.clientX /
            window.innerWidth - 0.5)
            * 20;


            const y =
            (event.clientY /
            window.innerHeight - 0.5)
            * 20;


            stars.style.transform =
            `translate(${x}px, ${y}px)`;


            nebula.style.transform =
            `translate(${x/2}px, ${y/2}px)`;

        }
    );

}