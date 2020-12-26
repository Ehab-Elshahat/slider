let slides = document.querySelectorAll(".slide");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let currentNumerSlide = document.getElementById("current-number");
let countSlider = document.getElementById("count-slides");
let autoInput = document.getElementById("auto");
let auto = false;
let timer;
timer = 5000;
let slideinterval;

// Add Function To Next Btn
nextBtn.addEventListener("click", () => {
    next();
    if (auto) {
        clearInterval(slideinterval);
        slideinterval = setInterval(next, timer)
    }
})

// Add Function To Prev Btn
prevBtn.addEventListener("click", () => {
    prev();
    if (auto) {
        clearInterval(slideinterval);
        slideinterval = setInterval(next, timer)
    }
})

// Function Next
function next() {
    let currentSlide = document.querySelector(".current");
    currentSlide.classList.remove("current");
    if (currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.classList.add("current")
    } else {
        //Add Current To Start Slide
        slides[0].classList.add("current");
    }
    setTimeout(() => currentSlide.classList.remove('current'));
    numberSlider();
}

// Function Prev
function prev() {
    let currentSlide = document.querySelector(".current");
    currentSlide.classList.remove("current");
    if (currentSlide.previousElementSibling) {
        currentSlide.previousElementSibling.classList.add("current")
    } else {
        //Add Current To last Slide
        slides[slides.length - 1].classList.add("current");
    }
    setTimeout(() => currentSlide.classList.remove('current'));
    numberSlider();
}

if (auto) {
    slideinterval = setInterval(next, timer)
}

// Get Number Of Slide
function numberSlider() {
    let currentElement = document.querySelector(".current");
    let sliderContainer = currentElement.parentNode;
    let indexCurrent = Array.prototype.indexOf.call(sliderContainer.children, currentElement);
    currentNumerSlide.innerHTML = indexCurrent + 1;
    countSlider.innerHTML = slides.length;

}
numberSlider();