
const form = document.forms.entrada;
form.addEventListener('submit', send);

function send(event) {
    event.preventDefault();
    console.log('Formulário enviado!');
}