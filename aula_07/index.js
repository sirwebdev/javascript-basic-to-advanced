// A DOM é representada por uma constante GLOBAL chamada document

// Selecionando elementos do DOM pelo ID
const titulo = document.getElementById("titulo");
const btnDestacar = document.getElementById("btnDestaque");
const btnAdicionar = document.getElementById("btnAdicionar");

// Função para alternar a classe 'destaque' do título
function alternarDestacarTitulo() {
    // .classList.toggle - Adiciona ou remove a classe com o mesmo nome
    titulo.classList.toggle('destaque');
}

// Eventos

// onClick - São eventos HTML que escutam o clique do mouse.
btnDestacar.onclick = alternarDestacarTitulo;

// Função para adicionar um novo item à lista
function adicionarProximoItem() {
    // Obtém todos os elementos com a classe "item"
    const todosOsItems = document.getElementsByClassName("item");
    const quantidadeItem = todosOsItems.length;

    // Cria um novo elemento <p>
    const novoItem = document.createElement('p');
    // Define o texto do novo item
    novoItem.textContent = `Item ${quantidadeItem + 1}`;
    // Adiciona a classe "item" ao novo elemento
    novoItem.classList.add('item');

    // Adiciona o novo item ao final do corpo do documento
    document.body.appendChild(novoItem); 
}

// Atribui a função adicionarProximoItem ao evento de clique do botão btnAdicionar
btnAdicionar.onclick = adicionarProximoItem;
