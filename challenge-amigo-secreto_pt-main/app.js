let amigos = []; // Array (lista) que guarda os nomes dos amigos

// Função para adicionar amigo
function adicionarAmigo() {
    let inputAmigos = document.querySelector('#amigo'); // pega o input pelo id específico
    let nome = inputAmigos.value.trim(); // remove espaços extras
    console.log(nome);

    if (nome === '') {
        alert('POR FAVOR, DIGITE UM NOME'); // validação
        return;
    }else{

    amigos.push(nome); // adiciona o nome ao array
    inputAmigos.value = ''; // limpa o campo
    mostrarAmigos(); // atualiza a lista exibida
}
}

// Função para exibir os amigos cadastrados
function mostrarAmigos() {
    let listaHTML = document.getElementById('listaAmigos'); // pega o <ul> da lista de amigos
    listaHTML.innerHTML = ''; // limpa a lista antes de adicionar os nomes

    amigos.forEach((amigo) => { // percorre cada amigo do array
        let item = document.createElement('li'); // cria um <li>
        item.textContent = amigo; // coloca o nome dentro do <li>
        listaHTML.appendChild(item); // adiciona o <li> na lista HTML
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('POR FAVOR, ADICIONE AMIGOS PARA SORTEAR');
        return;
    }else{

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // número aleatório
    console.log(indiceAleatorio);
    let amigoSorteado = amigos[indiceAleatorio]; // seleciona o amigo
    console.log(amigoSorteado);
    // Mostra o resultado na UL com id="resultado"
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = ''; // limpa antes de mostrar
    let item = document.createElement('li');
    item.textContent = `Parabéns! A pessoa selecionada foi: ${amigoSorteado}`;
    resultadoHTML.appendChild(item);
    }
}