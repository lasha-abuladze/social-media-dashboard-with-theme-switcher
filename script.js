
`use strict`;



const body = document.querySelector(`body`);
const header = document.querySelector(`header`);
const text = document.querySelectorAll(`.white-color`);
const circle = document.querySelector(`.circle`);

const switchMode = document.querySelector(`.switch-div`);



switchMode.addEventListener(`click`, () => {
    body.classList.toggle(`body--dark-mode`);
    header.classList.toggle(`header--dark-mode`);
    circle.classList.toggle(`circle-dark-mode`);
    switchMode.classList.toggle(`switch-div--dark`);
    
    text.forEach(el => el.classList.toggle(`text--white`));
})
