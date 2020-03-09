let sliderControl = document.querySelectorAll(".slider-control");
let sliderContent = document.querySelectorAll(".slide-item");

sliderControl[1].addEventListener('click', function () {
    sliderControl[0].classList.remove('active-control');
    sliderContent[0].classList.remove('is-active');
    sliderControl[1].classList.add('active-control');
    sliderContent[1].classList.add('is-active');
});