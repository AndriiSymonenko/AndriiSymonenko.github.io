window.addEventListener('DOMContentLoaded', function () {
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

});