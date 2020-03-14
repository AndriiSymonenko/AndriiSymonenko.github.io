let quantityAlcohol = document.querySelector('.quantity-alcohol');
let percentAlcohol = document.querySelector('.percent-alcohol');
let checkButton = document.querySelector('.check-button');
let checkResult = document.querySelector('.check-result');
let resultTextAlcohol = document.querySelector('.result-alcohol');
let resultTextVodka = document.querySelector('.result-vodka');

checkButton.onclick = function () {
    let resultCleanAlcohol = (percentAlcohol.value / 100) * (quantityAlcohol.value * 1000);
    let resultVodka = resultCleanAlcohol * 100 / 40;


    checkResult.classList.remove('hidden');
    checkButton.classList.add('hidden');

    resultTextVodka.innerHTML = 'Водки: ' + resultVodka.toFixed(1) + ' ' + 'мл';
    resultTextAlcohol.innerHTML = 'Спирта: ' + resultCleanAlcohol.toFixed(1) + ' ' + 'мл';
}