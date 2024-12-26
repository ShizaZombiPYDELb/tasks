const arrowLeft = document.querySelector(".slider-arrow-left");
const arrowRight = document.querySelector(".slider-arrow-right");
const slides = document.querySelectorAll(".slider-img");
const bottom = document.querySelector(".bottom");

let slideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPaginationCircle() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
}

function addActiveClass() {
    paginationCircles[slideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[slideIndex].classList.remove("active");
}

function showSlide() {
    slides[slideIndex].classList.add("block");
}

function hideSlide() {
    slides[slideIndex].classList.remove("block");
}

function disableArrows() {
    if (slideIndex === 0) {
        arrowLeft.classList.add("arrow-none");
    } else {
        arrowLeft.classList.remove("arrow-none");
    }
    if (slideIndex === slides.length - 1) {
        arrowRight.classList.add("arrow-none");
    } else {
        arrowRight.classList.remove("arrow-none");
    }
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        hideSlide();
        removeActiveClass();
        slideIndex++;
        showSlide();
        addActiveClass();
        disableArrows();
    }
}

function prevSlide() {
    if (slideIndex > 0) {
        hideSlide();
        removeActiveClass();
        slideIndex--;
        showSlide();
        addActiveClass();
        disableArrows();
    }
}

arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", prevSlide);

document.addEventListener("DOMContentLoaded", () => {
    addPaginationCircle();
    showSlide();
    disableArrows();
});
