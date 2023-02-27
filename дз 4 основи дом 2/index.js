'use strict'

const background = document.querySelector('body');
const button = document.querySelector('.main-btn')
const lastClick = document.querySelector('.last-click')
const state = localStorage.getItem('state');

if (state === 'off') {
    const backgroundColor = background.style.backgroundColor;
    const light = 'rgb(243, 235, 224)';
    const dark = 'rgb(19, 20, 34)';

    background.style.backgroundColor = dark;
    button.style.backgroundColor = light;
    button.style.color = dark;
    lastClick.style.color = light;

    button.innerText = 'Turn On';
    lastClick.textContent = (`Last turn Off: ${localStorage.getItem('Last turn Off')}`)
} if (state === 'on') {
    const backgroundColor = background.style.backgroundColor;
    const light = 'rgb(243, 235, 224)';
    const dark = 'rgb(19, 20, 34)';

    background.style.backgroundColor = light;
    button.style.backgroundColor = dark;
    button.style.color = light;
    lastClick.style.color = dark;

    button.innerText = 'Turn Off';
    lastClick.textContent = (`Last turn On: ${localStorage.getItem('Last turn On')}`)
} else {

}

button.addEventListener('click', () => {
    const backgroundColor = background.style.backgroundColor;
    const light = 'rgb(243, 235, 224)';
    const dark = 'rgb(19, 20, 34)';

    if (backgroundColor === dark) {
        turnOn()
    } else {
        turnOff()
    }

});

function turnOff(event) {
    const backgroundColor = background.style.backgroundColor; //запис в змінні
    const light = 'rgb(243, 235, 224)';
    const dark = 'rgb(19, 20, 34)';

    background.style.backgroundColor = dark; //зміна кольору
    button.style.backgroundColor = light;
    button.style.color = dark;
    lastClick.style.color = light;

    button.innerText = 'Turn On'; //зміна тексту

    let turnOffTime = new Date().toLocaleString();
    localStorage.setItem('Last turn Off', turnOffTime)
    lastClick.textContent = (`Last turn Off: ${localStorage.getItem('Last turn Off')}`)

    localStorage.setItem('state', 'off')

}

function turnOn(event) {
    const backgroundColor = background.style.backgroundColor;
    const light = 'rgb(243, 235, 224)';
    const dark = 'rgb(19, 20, 34)';

    background.style.backgroundColor = light;
    button.style.backgroundColor = dark;
    button.style.color = light;
    lastClick.style.color = dark;

    button.innerText = 'Turn Off';

    let turnOnTime = new Date().toLocaleString();
    localStorage.setItem('Last turn On', turnOnTime)
    lastClick.textContent = (`Last turn On: ${localStorage.getItem('Last turn On')}`)

    localStorage.setItem('state', 'on');
}



