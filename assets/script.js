const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et événements</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlideIndex = 0;

function showSlide(index) {
    const banner = document.getElementById('banner');
    const img = banner.querySelector('.banner-img');
    const tagLine = banner.querySelector('p');

    img.src = `./assets/images/slideshow/${slides[index].image}`;
    tagLine.innerHTML = slides[index].tagLine;

    // Supprimer le point précédemment sélectionné
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    // Définir le point actuel comme sélectionné
    dots[index].classList.add('dot_selected');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

// Ajouter des écouteurs d'événements de clic aux flèches
const arrowLeft = document.createElement('div');
arrowLeft.classList.add('arrow', 'arrow_left');
arrowLeft.innerHTML = '<img src="./assets/images/arrow_left.png" alt="Flèche gauche">';
arrowLeft.addEventListener('click', prevSlide);
banner.appendChild(arrowLeft);

const arrowRight = document.createElement('div');
arrowRight.classList.add('arrow', 'arrow_right');
arrowRight.innerHTML = '<img src="./assets/images/arrow_right.png" alt="Flèche droite">';
arrowRight.addEventListener('click', nextSlide);
banner.appendChild(arrowRight);

// Créer des points
const dotsContainer = document.querySelector('.dots');
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
});

// Afficher la diapositive initiale
showSlide(currentSlideIndex);
