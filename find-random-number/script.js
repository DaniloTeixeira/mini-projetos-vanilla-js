const input = document.getElementById('input');
const tryButton = document.getElementById('tryButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const correctNumber = document.getElementById('correctNumber');
const hideDiv = document.getElementById('hideDiv');
const resultMessage = document.getElementById('resultMessage');

correctNumber.classList.add('d-none');

function getRandomNumber() {
    return Math.round(Math.random() * (10 - 0) + 0);
}

let randomNumber = getRandomNumber();

tryButton.addEventListener(('click'), () => {
    resultMessage.style.color = 'red';


    if (!input.value) {
        alert('Digite um número de 0 a 10 para continuar');
        return;
    }

    if (input.value > randomNumber) {
        resultMessage.innerText = 'Chutou alto demais.';
        getRandomNumber();
        return;
    }

    if (input.value < randomNumber) {
        resultMessage.innerText = 'Chutou baixo demais.';
        getRandomNumber();
        return;
    }
    correctNumber.innerHTML = randomNumber;
    correctNumber.classList.remove('d-none');
    hideDiv.classList.add('d-none');
    resultMessage.innerHTML = 'Parabéns, você acertou!!';
    resultMessage.style.color = 'green';
    tryButton.classList.add('disabled');
    getRandomNumber();
});

yesButton.addEventListener(('click'), () => {
    input.value = '';
    tryButton.classList.remove('disabled');
    resultMessage.innerText = '';
    randomNumber =
        getRandomNumber();
});

noButton.addEventListener(('click'), () => {
    if (!input.value) {
        return;
    }
    window.location.href = 'https://i0.wp.com/judao.com.br/wp-content/uploads/2020/08/GAMEOVER.jpg?fit=852%2C480&ssl=1';

});

