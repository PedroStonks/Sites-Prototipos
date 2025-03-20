function calcular() {
    let preco = parseFloat(document.getElementById("valor-combustivel").value);
    let litros = parseFloat(document.getElementById("litros").value);

    if (isNaN(preco) || isNaN(litros) || preco <= 0 || litros <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos!";
        return;
    }

    let total = preco * litros;
    document.getElementById("resultado").innerHTML = `Total a pagar: R$ ${total.toFixed(2)}`;
}