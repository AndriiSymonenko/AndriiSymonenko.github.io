let mailUsButton = document.querySelector('.contact-modal-button');
let mailUsPopUp = document.querySelector('.modal');
let closeModalButton = document.querySelector('.button-close-modal')



mailUsButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    mailUsPopUp.classList.add("modal-show");
});


closeModalButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailUsPopUp.classList.remove("modal-show");
});