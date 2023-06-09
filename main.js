import {add, getItems, removeItems} from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', send);
form.remover.addEventListener('click', remover);

update();

function send(event) {
    event.preventDefault();
    console.log('Formulário enviado!');
    const n = form.valor.value;
    add(n);
    form.valor.value = "";  //limpa depois q pressiona o button
    form.valor.focus();
    update();
}

function remover() {
    console.log('Remove ao clicar!');
    removeItems();
    update();
}

function update() {
    const ol = document.querySelector('ol');
    ol.innerHTML = "";  //limpa vetor antes de atualizar senao repete os anteriores
    const items = getItems();
    for (let i = 0; i < items.length; i++) {
        const li = document.createElement('li');
        li.textContent = items[i];
        ol.appendChild(li);
    }
}