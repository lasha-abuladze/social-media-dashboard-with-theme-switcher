
`use strict`;



const body = document.querySelector(`body`);
const header = document.querySelector(`header`);
const text = document.querySelectorAll(`.white-color`);
const circle = document.querySelector(`.circle`);
const switchMode = document.querySelector(`.switch-div`);
const overviewContainer = document.querySelectorAll(`.general-overview--div`);

const numbers = document.querySelectorAll(`.number`);
const follSubSpan = document.querySelectorAll(`.foll-sub--numb`);
const arrowIcons = document.querySelectorAll(`.arrow-icon`);




numbers.forEach((el, i) => {
    if(Number(el.textContent) > 0) {
        follSubSpan[i].style.color = `#1EB589`
        arrowIcons[i].src = `./images/icon-up.svg`

    } else {
        numbers[i].textContent = `${Math.abs(parseInt(numbers[i].textContent))}`
        follSubSpan[i].style.color = `red`
        arrowIcons[i].src = `./images/icon-down.svg`
    }
})



switchMode.addEventListener(`click`, () => {
    body.classList.toggle(`body--dark-mode`);
    header.classList.toggle(`header--dark-mode`);
    circle.classList.toggle(`circle-dark-mode`);
    switchMode.classList.toggle(`switch-div--dark`);
    
    text.forEach(el => el.classList.toggle(`text--white`));
    overviewContainer.forEach(el => el.classList.toggle(`general-overview--div--dark`))
})
