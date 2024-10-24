async function listaCard() {
    
        const conexao = await fetch("http://localhost:3000/cards");
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
       
    }

listaCard();


export const ConectaApi = {
    listaCard
}