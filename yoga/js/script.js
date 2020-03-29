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


    let deadLine = '2020-03-30';

    function getTimeRemaining(endtime) {
        let timeChange = Date.parse(endtime) - Date.parse(new Date()),
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

});