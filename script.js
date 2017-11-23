const panels = document.querySelectorAll(".panel");
const linkPortfolio = document.querySelector('#linkPortfolio');
const linkContact = document.querySelector('#linkContact');
const menuIcon=document.querySelector('#menu');
function clickPanel() {

    if (document.querySelectorAll('.open').length != 0 && !this.classList.contains('open')) {
        closePanel(document.querySelector('.open'));
        openPanel(this);

    } else if (!this.classList.value.includes('open')) {
        openPanel(this);
    } else {
        closePanel(this);
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
    }, 1000);
}

linkPortfolio.addEventListener('click', function () {
    openPanel(document.querySelector('.projects'))
});
linkContact.addEventListener('click', function () {
    openPanel(document.querySelector('.contact'))
});
function showMenu(){
    document.querySelector('.items').classList.toggle('showMenu');
}

menuIcon.addEventListener('click', showMenu);
panels.forEach(panel => panel.addEventListener('click', clickPanel));
