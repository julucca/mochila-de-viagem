const form = document.querySelector('[data-form]');
const lista = document.querySelector('[data-list]'); // busca no HTML lista

form.addEventListener('submit', (evento) => {
    evento.preventDefault() // previne evento padrão

                    // nome                                 // quantidade
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})


// Cria nova li na ul de itens no HTML
function criaElemento(nome, quantidade) {
    
    // Estrutura HTML: <li class="item"><strong>3</strong>Casaco</li>
    const novoItem = document.createElement('li'); // cria nova li
    novoItem.classList.add('item'); // add classe

    const numeroItem = document.createElement('strong'); // cria tag strong
    numeroItem.innerHTML = quantidade // tag strong recebe a quantidade

    novoItem.appendChild(numeroItem) // li recebe a quantidade com tag strong.
    novoItem.innerHTML += nome // finalizamos a estrutura do li com strong e nome

    lista.appendChild(novoItem); // atribui novo item a lista
}