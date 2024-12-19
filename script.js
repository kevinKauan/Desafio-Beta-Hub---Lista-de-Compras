function adicionarAoCarrinho(nomeProduto) {
    const itensCarrinho = document.getElementById('itensCarrinho');

    const li = document.createElement('li');
    li.textContent = nomeProduto;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function () {
        itensCarrinho.removeChild(li);
    };

    li.appendChild(botaoRemover);
    itensCarrinho.appendChild(li);
}

function alternarCarrinho() {
    const carrinho = document.getElementById('carrinho');
    carrinho.classList.toggle('visivel');
}
