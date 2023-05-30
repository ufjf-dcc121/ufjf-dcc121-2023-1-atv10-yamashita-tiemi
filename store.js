
const store = {state: []};

export function add(valor) {
    if (valor != "") {
        store.state.push(valor);
    }
}

export function getItems() {
    return [...store.state];
}

export function removeItems() {
    store.state.pop();
}