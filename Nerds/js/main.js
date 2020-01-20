let mailUsButton = document.querySelector(".contact-modal-button");
let mailUsPopUp = document.querySelector(".modal");
let closeModalButton = document.querySelector(".button-close-modal");

function sliderControlActive() {
  let sliderControl = document.querySelectorAll(".slider-button");
  let sliderContent = document.querySelectorAll(".slider-item");
  let controlName;
  sliderControl.forEach(item => {
    item.addEventListener("click", selectSliderControl);
  });
  function selectSliderControl() {
    sliderControl.forEach(item => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    controlName = this.getAttribute("data-control-name");
    selectControlName(controlName);
  }
  function selectControlName() {
    sliderContent.forEach(item => {
      item.classList.contains(controlName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
}

sliderControlActive();

mailUsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mailUsPopUp.classList.add("modal-show");
});

closeModalButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mailUsPopUp.classList.remove("modal-show");
});
