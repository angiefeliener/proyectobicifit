//navegador encabezado
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Mostrar la diapositiva actual
function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

// Mover a la siguiente o anterior diapositiva
function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    showSlide(currentSlide);
}

// Cambiar diapositiva automáticamente cada 5 segundos
function autoSlide() {
    setInterval(() => {
        moveSlide(1);
    }, 5000);
}

// Inicialización del carrusel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    autoSlide();
});