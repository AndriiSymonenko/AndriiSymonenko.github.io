let link = document.querySelector(".login-link");
let popupWindow = document.querySelector(".modal-login");
let closeButton = document.querySelector(".modal-close")

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWindow.classList.add("modal-show");
});


closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWindow.classList.remove("modal-show");
});
