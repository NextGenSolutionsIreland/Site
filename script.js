
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Pagination Variables
const galleryItems = document.querySelectorAll(".gallery-item");
let currentPage = 1;
const itemsPerPage = 10;

function showPage(page) {
    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    galleryItems.forEach((item, index) => {
        item.style.display = (index >= start && index < end) ? "block" : "none";
    });
}

showPage(1);

let currentImageIndex;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    lightbox.style.display = "flex";
    lightboxImg.src = galleryItems[index].querySelector("img").src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showPrev() {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentImageIndex);
}

function showNext() {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    openLightbox(currentImageIndex);
}

galleryItems.forEach((item, index) => {
    item.querySelector("img").addEventListener("click", () => openLightbox(index));
});

document.querySelector(".close").addEventListener("click", closeLightbox);
