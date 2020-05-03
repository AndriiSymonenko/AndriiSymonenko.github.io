let priceList = document.querySelector('.main-price__list'),
    priceButton = document.querySelectorAll('.main-price__button'),
    priceText = document.querySelectorAll('.main-price__price');


    priceList.addEventListener('mouseover', function(event) {
        for (let i = 0; i < priceText.length; i++) {
            if (event.target.classList.contains('main-price__button') && event.target == priceButton[i]) {
                priceText[i].style.color = "#112d4e";
            } 
        }
    });

    priceList.addEventListener('mouseout', function(event) {
        for (let i = 0; i < priceText.length; i++) {
            if (event.target.classList.contains('main-price__button') && event.target == priceButton[i]) {
                priceText[i].style.color = "#3f72af";
            } 
        }
    });