const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0; //numero de imagen que va  en el fondo

rightBtn.addEventListener("click", () => {
    activeSlide++;

    // el if permite que cuando llege a la ultima imagen vuelva a iniciar
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
});

leftBtn.addEventListener("click", () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
});

setBgToBody(); //primer imagen que se va a visualizar

function setBgToBody() {
    //  al body le doy un stilo de fondo luego paso como array activeSlide y a ese le doy el argumento style.backgroundimage
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));
    //slides.forEach((slide) => console.log(slide));
    // recorro el array slides , luego a slide le remuevo la clase active

    slides[activeSlide].classList.add("active"); // luego le añado la clase activa al elemento del array que no la tenga.
    /*  activeSlide es el valor de cada imagen */
}
