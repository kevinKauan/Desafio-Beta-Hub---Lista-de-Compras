<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loja Virtual</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="botaoAlternarCarrinho" onclick="alternarCarrinho()">Alternar Carrinho</button>

    <aside id="carrinho">
        <h2>Carrinho de Compras</h2>
        <ul id="itensCarrinho">
        </ul>
    </aside>

    <div class="principal">
        <header>
            <h1>Loja Virtual</h1>
        </header>

        <div class="container">
            <h2>Produtos</h2>
            <div class="produto">
                <span>Produto 1</span>
                <button onclick="adicionarAoCarrinho('Produto 1')">Adicionar ao Carrinho</button>
            </div>
            <div class="produto">
                <span>Produto 2</span>
                <button onclick="adicionarAoCarrinho('Produto 2')">Adicionar ao Carrinho</button>
            </div>
            <div class="produto">
                <span>Produto 3</span>
                <button onclick="adicionarAoCarrinho('Produto 3')">Adicionar ao Carrinho</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
