document.addEventListener("DOMContentLoaded", () => {
    const lista = {
        Frutas: [],
        Laticínios: [],
        Congelados: [],
        Doces: [],
        Outros: []
    };

    const botaoAdicionar = document.getElementById("adicionar");
    const botaoFinalizar = document.getElementById("finalizar");
    const formulario = document.getElementById("formulario");
    const inputItem = document.getElementById("item");
    const selectCategoria = document.getElementById("categoria");
    const botaoSalvar = document.getElementById("salvar");
    const divLista = document.getElementById("lista");

    botaoAdicionar.addEventListener("click", () => {
        formulario.style.display = "block";
        botaoFinalizar.style.display = "none";
    });

    botaoSalvar.addEventListener("click", () => {
        const item = inputItem.value.trim();
        const categoria = selectCategoria.value;

        if (item === "" || categoria === "") {
            alert("Preencha todos os campos!");
            return;
        }

        lista[categoria].push(item);
        inputItem.value = "";
        selectCategoria.value = "";

        botaoFinalizar.style.display = "block";
        formulario.style.display = "none";
    });

    botaoFinalizar.addEventListener("click", () => {
        divLista.innerHTML = "<h2>Lista de Compras:</h2>";

        for (let categoria in lista) {
            if (lista[categoria].length > 0) {
                divLista.innerHTML += `<p><strong>${categoria}:</strong> ${lista[categoria].join(", ")}</p>`;
            }
        }

        botaoAdicionar.style.display = "none";
        botaoFinalizar.style.display = "none";
    });
});