const lamp = document.querySelector('#lamp');
const toggleButton = document.querySelector('#toggle-button');
const restoreLampButton = document.querySelector('#restore-button');

let isBrokenLamp = false;
const localhost = 'http://127.0.0.1:5500';
const onButtonSrc = `${localhost}/lamp/images/on-button.jpg`;
const offLampSrc = `${localhost}/lamp/images/off-lamp.jpg`;

restoreLampButton.classList.add('d-none');

function turnOn() {
    if (isBrokenLamp) {
        alert('A lãmpada está quebrada, faça a troca para poder ascendê-la');
        return;
    }

    restoreLampButton.classList.add('d-none');
    toggleButton.src = 'images/on-button.jpg';
    lamp.src = 'images/on-lamp.jpg';
    document.body.style.background = '#fff';
}

function turnOff() {
    toggleButton.src = 'images/off-button.jpg';
    lamp.src = 'images/off-lamp.png';
    document.body.style.background = '#000';
}

function toggleButtonSrcImg() {
    if (toggleButton.src === onButtonSrc) {
        turnOff();
        return;
    }

    turnOn();
}

lamp.addEventListener(('dblclick'), () => {
    isBrokenLamp = true;
    lamp.src = 'images/broken-lamp.png';
    toggleButton.src = 'images/off-button.jpg';
    document.body.style.background = '#000';
    restoreLampButton.classList.remove('d-none');
});

restoreLampButton.addEventListener(('click'), () => {
    lamp.src = 'images/off-lamp.png';
    restoreLampButton.classList.add('d-none');
    isBrokenLamp = false;
});
