import store from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', send);

update();

function send(event) {
    event.preventDefault();
    console.log('Formulário enviado!');
    const n = form.valor.value;
    store.state.push(n);
    form.valor.value = "";
    form.valor.focus();
    update();
}

function update() {
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    for (let i = 0; i < store.state.length; i++) {
        const li = document.createElement('li');
        li.textContent = store.state[i];
        ol.appendChild(li);
    }
}