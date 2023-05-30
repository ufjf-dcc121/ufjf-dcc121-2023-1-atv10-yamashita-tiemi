import { state } from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', send);

update();

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