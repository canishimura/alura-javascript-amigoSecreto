let sorteados = [];

function adicionar () {
    let nome = document.getElementById('nome-amigo');
    if (nome.value == '') {
        alert('Informe o nome!');
        return;
    }

    if (sorteados.includes(nome.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    sorteados.push(nome.value);

    if (lista.textContent == '') {
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
        nome.value = '';
}



function sortear () {
    if (sorteados.length < 4) {
        alert("Adicione pelo menos 4 pessoas");
        return;
    }

    embaralha(sorteados);
    let sorteio = document.getElementById('lista-sorteio')
    for (let i = 0; i < sorteados.length - 1; i++) {
        if ( i == sorteados.length) {
            sorteio.innerHTML = sorteio.innerHTML + sorteados [i] + ' --> ' + sorteados[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + sorteados [i] + ' --> ' + sorteados[i+1] + '<br>';
        }
    }


}



function reiniciar () {
    sorteados = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}   