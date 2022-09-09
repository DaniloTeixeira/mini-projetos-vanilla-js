
const span = document.querySelector('span');
const li = document.querySelector('li');
const input = document.querySelector('#input');

let data = [];

function getItems() {
    if (!localStorage.list) {
        return alert('Nenhum valor encontrado no localStorage');
    }

    span.innerHTML = '';

    data = JSON.parse(localStorage.getItem('list'));

    for (item of data) {
        span.innerHTML += `<div class="item">${item}</div>`;
    }
}

function addItem() {
    if (!input.value) {
        return alert('Insira um valor');
    }

    if (localStorage.list) {
        data = JSON.parse(localStorage.getItem('list'));
    }

    data.push(input.value);
    localStorage.list = JSON.stringify(data);
    input.value = '';
    // getItems();
}

function clearStorage() {
    if (!localStorage.list) {
        return alert('Nenhum valor a ser apagado do localStorage');
    }

    localStorage.removeItem('list');
    location.reload();
}