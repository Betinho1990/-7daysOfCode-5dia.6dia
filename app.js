document.getElementById("adicionar").addEventListener("click", function() {
    document.getElementById("formulario").style.display = "block";
});

document.getElementById("salvar").addEventListener("click", function() {
    let item = document.getElementById("item").value.trim();
    let categoria = document.getElementById("categoria").value;
    let lista = document.getElementById("listaCompras");

    if (item !== "") {
        let novoItem = document.createElement("li");
        novoItem.textContent = `${categoria}: ${item}`;
        novoItem.setAttribute("data-item", item.toLowerCase()); // Para facilitar a remoção
        lista.appendChild(novoItem);

        document.getElementById("item").value = "";
        document.getElementById("formulario").style.display = "none";
        document.getElementById("remover").style.display = "block";
        document.getElementById("finalizar").style.display = "block";
    }
});

document.getElementById("remover").addEventListener("click", function() {
    let itemParaRemover = prompt("Digite o nome exato do item a ser removido:").toLowerCase();
    let lista = document.getElementById("listaCompras");
    let itens = lista.getElementsByTagName("li");
    let encontrado = false;

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].getAttribute("data-item") === itemParaRemover) {
            lista.removeChild(itens[i]);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        alert("Item não encontrado!");
    }

    if (lista.children.length === 0) {
        document.getElementById("remover").style.display = "none";
        document.getElementById("finalizar").style.display = "none";
    }
});

document.getElementById("finalizar").addEventListener("click", function() {
    let lista = document.getElementById("listaCompras");
    let itens = lista.getElementsByTagName("li");

    if (itens.length === 0) {
        alert("A lista está vazia! Adicione itens antes de finalizar.");
        return;
    }

    let categorias = {
        "Frutas": [],
        "Laticínios": [],
        "Congelados": [],
        "Doces": [],
        "Outros": []
    };

    for (let item of itens) {
        let [categoria, nome] = item.textContent.split(": ");
        categorias[categoria].push(nome);
    }

    let resultado = "<h2>Lista Finalizada</h2>";
    for (let categoria in categorias) {
        if (categorias[categoria].length > 0) {
            resultado += `<p><strong>${categoria}:</strong> ${categorias[categoria].join(", ")}</p>`;
        }
    }

    document.getElementById("listaComprasFinal").innerHTML = resultado;
    document.getElementById("listaComprasFinal").style.display = "block";
    document.getElementById("listaCompras").style.display = "none";
    document.getElementById("reiniciar").style.display = "block";
    document.getElementById("adicionar").style.display = "none";
    document.getElementById("remover").style.display = "none";
    document.getElementById("finalizar").style.display = "none";
});

document.getElementById("reiniciar").addEventListener("click", function() {
    document.getElementById("listaCompras").innerHTML = "";
    document.getElementById("listaComprasFinal").innerHTML = "";
    document.getElementById("listaComprasFinal").style.display = "none";
    document.getElementById("listaCompras").style.display = "block";
    document.getElementById("reiniciar").style.display = "none";
    document.getElementById("adicionar").style.display = "block";
});