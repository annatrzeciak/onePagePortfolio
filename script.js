const panels = document.querySelectorAll(".panel");
const linkPortfolio = document.querySelector('#linkPortfolio');
const linkContact = document.querySelector('#linkContact');
const menuIcon = document.querySelector('#menu');
const preloader = document.querySelector('.preloader');
const infoChildrens = document.querySelectorAll('.info>*');

window.addEventListener('load', function () {
    setTimeout(function () {
        preloader.classList.add('preloader-hiding');
        setTimeout(function () {
            preloader.classList.add('preloader-hidden');
            preloader.classList.remove('preloader-hiding');
            loadMainPanel();

        }, 500)
    }, 500);
})

function clickPanel(panel) {

    if (document.querySelectorAll('.open').length != 0 && !panel.classList.contains('open')) {
        closePanel(document.querySelector('.open'));
        openPanel(panel);

    } else if (!panel.classList.value.includes('open')) {
        openPanel(panel);
    } else {
        closePanel(panel);
    }
}

function openPanel(panel) {

    panel.classList.toggle("open");

    setTimeout(function () {
        panel.querySelector("h2").classList.toggle("horizontal")
    }, 400);

    setTimeout(function () {
        panel.querySelector(".info").classList.toggle("showInfo");
    }, 700);
}

function closePanel(panel) {
    panel.querySelector(".info").classList.toggle("showInfo");
    setTimeout(function () {
        panel.querySelector("h2").classList.toggle("horizontal")
    }, 200);


    setTimeout(panel.classList.toggle("open"), 700);
}

function loadMainPanel() {
    setTimeout(function () {
        openPanel(document.querySelector('#main'))
    }, 500);
}

linkPortfolio.addEventListener('click', function () {
    clickPanel(document.querySelector('#projects'))
});
linkContact.addEventListener('click', function () {
    clickPanel(document.querySelector('#contact'))
});

function showMenu() {
    document.querySelector('.items').classList.toggle('showMenu');

}


menuIcon.addEventListener('click', showMenu);

$('.panel').click(function (e) {
      if (e.target == this) {
        clickPanel(e.target);
    } else if (e.target.localName == 'h2') {
        clickPanel(e.target.parentElement);
    }
})
