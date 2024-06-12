let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slider img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); 
}


function prevSlide() {
    slideIndex--;
    showSlides();
}


function nextSlide() {
    slideIndex++;
    showSlides();
}


window.onload = function() {
    showSlides();
};
