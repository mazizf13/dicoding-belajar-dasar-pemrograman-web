// function for caraousel
let currentSlide = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

document.querySelector('.dropbtn').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

// function for dropdown
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        Array.from(dropdowns).forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});
