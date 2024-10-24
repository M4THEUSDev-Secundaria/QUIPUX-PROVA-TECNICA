
const lista = document.querySelector("[data-lista]");

function constroiCard(imagem, nome, valor, id) {
    const card = document.createElement("div");
    card.className = "card"; // Define a classe de card principal
    card.setAttribute("data-id", id);
    card.innerHTML = `
        <img src="${imagem}" class="card-img-top" alt="${nome}">
        <div class="card-body">
            <p>${nome}</p>
            <p class="card-text">${valor}</p>
        </div>`;
    return card;
}

async function listaCard() {
    try {
        const conexao = await fetch("http://localhost:3000/cards");
        const conexaoConvertida = await conexao.json();

        // Para cada item na lista de cards, constroi um card e adiciona ao DOM
        conexaoConvertida.forEach(card => {
            const novoCard = constroiCard(card.imagen, card.titulo, card.descripcion, card.id);
            lista.appendChild(novoCard); // Adiciona o card à lista
        });
    } catch (erro) {
        console.error("Erro ao buscar os cards:", erro);
    }
}

// Chama a função para renderizar os cards
listaCard();

export const ConectaApi = {
    listaCard
};


