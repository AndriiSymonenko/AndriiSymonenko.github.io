window.addEventListener('DOMContentLoaded', function () {
    //Tabs
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideContentTab(one) {
        for (let i = one; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideContentTab(1);

    function showContentTab(two) {
        if (tabContent[two].classList.contains('hide')) {
            tabContent[two].classList.remove('hide');
            tabContent[two].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideContentTab(0);
                    showContentTab(i);
                    break;
                }
            }
        }

    });

    //Timer


    let deadLine = new Date().setHours(new Date().getHours() + 12); // deadLine Your Date + 12 hours


    function getTimeRemaining(endtime) {
        let timeChange = endtime - Date.parse(new Date()),
            seconds = Math.floor((timeChange / 1000) % 60), //residue second
            minutes = Math.floor((timeChange / 1000 / 60) % 60),
            hours = Math.floor((timeChange / (1000 * 60 * 60)));

        return {
            'total': timeChange,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTimer(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(upDateTimer, 1000);


        function upDateTimer() {
            let time = getTimeRemaining(endtime);
            hours.textContent = (time.hours < 10) ? '0' + time.hours : time.hours;
            minutes.textContent = (time.minutes < 10) ? '0' + time.minutes : time.minutes;
            seconds.textContent = (time.seconds < 10) ? '0' + time.seconds : time.seconds;

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setTimer('timer', deadLine);


    //modal window

    let moreButton = document.querySelector('.more'),
        overlayWindow = document.querySelector('.overlay'),
        closeButton = document.querySelector('.popup-close');

    moreButton.addEventListener('click', function () {
        overlayWindow.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //stop scrol
    });

    closeButton.addEventListener('click', function () {
        overlayWindow.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Form
    let message = {
        loading: 'Загрузка...',
        succcess: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Произошла ошибка'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let objTemp = {};
        formData.forEach(function(value, key) {
            objTemp[key] = value;
        });

        let json = JSON.stringify(objTemp);

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.succcess;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        }); 

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });



});