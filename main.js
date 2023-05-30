
const form = document.forms.entrada;
form.addEventListener('submit', send);

let state = 0;

function send(event) {
    event.preventDefault();
    console.log('Formulário enviado!');
    state++;
    update();
}

function update() {
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${state}</li>`;
}