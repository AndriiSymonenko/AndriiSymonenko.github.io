window.addEventListener("DOMContentLoaded", function () {
  //Tabs
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideContentTab(one) {
    for (let i = one; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideContentTab(1);

  function showContentTab(two) {
    if (tabContent[two].classList.contains("hide")) {
      tabContent[two].classList.remove("hide");
      tabContent[two].classList.add("show");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
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
      hours = Math.floor(timeChange / (1000 * 60 * 60));

    return {
      total: timeChange,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setTimer(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(upDateTimer, 1000);

    function upDateTimer() {
      let time = getTimeRemaining(endtime);
      hours.textContent = time.hours < 10 ? "0" + time.hours : time.hours;
      minutes.textContent =
        time.minutes < 10 ? "0" + time.minutes : time.minutes;
      seconds.textContent =
        time.seconds < 10 ? "0" + time.seconds : time.seconds;

      if (time.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setTimer("timer", deadLine);

  //modal window

  let moreButton = document.querySelector(".more"),
    overlayWindow = document.querySelector(".overlay"),
    closeButton = document.querySelector(".popup-close");

  moreButton.addEventListener("click", function () {
    overlayWindow.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden"; //stop scrol
  });

  closeButton.addEventListener("click", function () {
    overlayWindow.style.display = "none";
    this.classList.remove("more-splash");
    document.body.style.overflow = "";
  });

  //Form

  let message = {
    loading: "Загрузка...",
    succcess: "Спасибо! Скоро мы с Вами свяжемся!",
    failure: "Произошла ошибка",
  };

  let form = document.querySelector(".main-form"),
    input = form.getElementsByTagName("input"),
    statusMessage = document.createElement("div"); // для ошибок

  statusMessage.classList.add("status"); // класс в CSS

  // обработчик события на форму
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // отмена перезагрузки страницы
    form.appendChild(statusMessage); // бавление div для ошибок

    let request = new XMLHttpRequest(); //1. создание конструктора объекта
    request.open("POST", "server.php"); //2. открытие объекта, настройка запроса
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8"); // какие контент будет содержать данные

    let formData = new FormData(form); //всё то что ввёл пользователь

    let objTemp = {};
    formData.forEach(function (value, key) {
      objTemp[key] = value; // заполнение данными из FormData
    });

    let json = JSON.stringify(objTemp);

    request.send(json); //send to server

    //наблюдать за состоянием запроса
    request.addEventListener("readystatechange", function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.succcess;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    // clean input
    for (let i = 0; i < input.length; i++) {
      input[i].value = "";
    }
  });

  //Slider

  let slideIndex = 1,
    slideItem = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

  showSlide(slideIndex);

  function showSlide(n) {
    if (n > slideItem.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slideItem.length;
    }

    slideItem.forEach((item) => (item.style.display = "none"));

    dots.forEach((item) => item.classList.remove("dot-active"));

    slideItem[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }

  function plusSlideindex(n) {
    showSlide((slideIndex += n));
  }

  function currentSlide(n) {
    showSlide((slideIndex = n));
  }

  prev.addEventListener("click", function () {
    plusSlideindex(-1);
  });

  next.addEventListener("click", function () {
    plusSlideindex(1);
  });

  dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains("dot") &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });

  //Calc

  let persons = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"),
    personSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.textContent = 0;

  persons.addEventListener("input", function () {
    personSum = +this.value;
    total = (daysSum + personSum) * 4000;

    if (
      restDays.value == "" ||
      (persons.value == "" && restDays.value == "0") ||
      persons.value == "0"
    ) {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });

  restDays.addEventListener("input", function () {
    daysSum = +this.value;
    total = (daysSum + personSum) * 4000;

    if (
      restDays.value == "" ||
      (persons.value == "" && restDays.value == "0") ||
      persons.value == "0"
    ) {
      totalValue.textContent = 0;
    } else {
      totalValue.textContent = total;
    }
  });

  place.addEventListener("change", function () {
    if (restDays.value == "" || persons.value == "") {
      totalValue.textContent = 0;
    } else {
      let a = total;
      totalValue.textContent = a * this.options[this.selectedIndex].value;
    }
  });
});
