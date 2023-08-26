const receitas = {
    "Arroz": {
        "Ingredientes": [
            "Arroz",
            "Peito de frango",
            "Óleo de gergelim",
            "Cebola - 1 inteira",
            "Curry",
            "Alçafrão",
            "Leite de coco"
        ],
        "Modo de preparo": [
            "Cozinhe o arroz e deixe em um recipiente separado;",
            "Aqueça uma frigideira e adicione o óleo de gergelin, e a cebola cortada, deixe dourar e adicione o frango cortado em cubinhos;",
            "Adicione o curry, alçafrão e uma pitada de sal a gosto;",
            "Atenção: neste momento não podemos deixar o frango soltar a sua 'água', adicione mais curry e alçafrão se for nescessário;",
            "Mexa o frango por entre 5 e 10 minutos e adicione o leite de coco para realçar o sabor e mexa mais;",
            "Pronto, agora é só adicionar o arroz já cozido, misturar bem e se servir."
        ]
    },
    "Hamburguer": {
        "Ingredientes": [
            "Pao com gergelim",
            "Tomate",
            "Batata - 2",
            "Cenoura - 2",
            "Beterraba - 2",
            "Alface",
            "Fumaça liquida",
            "Um pote de goiabada",
            "Vinagre",
            "Farinha de trigo",
            "Ovos"
        ],
        "Modo de preparo": [
            "Começaremos fazendo a carne do hamburguer, então para começar, faremos a farinha panco, pegue um pão, rale e guarde em um recipiente;",
            "Agora, corte a batata e a cenoura em cubinhos e coloque para cozinhar;",
            "Para o ketchup, em uma panela com um pouquinho de agua (menos de um dedo), adicione a goiabada mexa e quando estiver quase toda derretida, adivione um pouquinho que vinagre e mexa até a goiabada virar um liquido grosso;",
            "Pegue a batata e a cenoura já cozida e amasse-as e na panela com a agua do cozimento, adicione roleas da beterraba e deixe por um tempinho, em seguida ammasse-as também junto com a batata e a cenoura e depois adicione um pouco da fumaça liquida;",
            "Em uma bandeja/travessa, pegue a batata, a cenoura e a beterraba amassada e faça rodelas, no formato de carne de hamburguer e coloque no congelador para firmar, deixar duro",
            "Empanaremos a carne agora, pegue-a do congelador e passe na farinha de trigo, no ovo e na farinha panco e depois é só fritar;",
            "Quando a carne estiver frita, monte o hamburguer como desejar, adicionando o ketchup de goiabada, a carne, o tomate e o alface e sirva-se a vontade."
        ]
    },
    "Moqueca": {
        "Ingredientes": [
            "Banana da terra",
            "Arroz",
            "Tomate - 1",
            "Cebola  - 1",
            "Azeite de dendê",
            "Alho",
            "Limão",
            "Leite de coco",
            "Curry",
            "Alçafrão",
            "Castanha (Opcional)",
            "Coentro",
            "Farinha"
        ],
        "Modo de preparo": [
            "Cozinhe um pouco de arroz",
            "Aqueça um frigideira e coloque o azeide de dendê, adicione o tomate, a cebola e p alho cortados e em seguida, coloque a banana cortada também e adicione água;",
            "Adicine meio limao, sal, o leite de coco, o curry e o alçafrão",
            "Caso opte, adicione as castanhas;",
            "Corte e adicione o coentro na moqueca e espere a banana cozinhar;",
            "Quando a banana estiver cozida, pronto, a sua moqueca está pronta;",
            "Para a farofa, em uma panela adicione um pouco de azeite de dendê, farinha e mexa;",
            "Agora é só montar o seu prato e se servir a vontade."
        ]
    }
}

const receitaEscolhida = localStorage.getItem("receita");
if (receitaEscolhida == null || !receitaEscolhida) {
    window.location = "./index.html";
}

const title = document.querySelector("header div h2");
title.innerHTML = receitaEscolhida;

var Comida;
switch (receitaEscolhida) {
    case "Arroz Tailandês":
        Comida = receitas.Arroz;
        break;
    case "Hamburguer":
        Comida = receitas.Hamburguer;
        break;
    case "Moqueca de banana":
        Comida = receitas.Moqueca;
        break;
}

const listaIngredientes = document.querySelector("section#ingredientes ul");

Comida.Ingredientes.map((e) => {
    const ingredienteElement = document.createElement("li");
    const ingredienteText = document.createTextNode(e);
    ingredienteElement.appendChild(ingredienteText);
    listaIngredientes.appendChild(ingredienteElement);
});

const listaModo = document.querySelector("section#ModoDePreparo ul");

Comida["Modo de preparo"].map((e) => {
    const modoElement = document.createElement("li");
    const modoText = document.createTextNode(e);
    modoElement.appendChild(modoText);
    listaModo.appendChild(modoElement);
});

const backPageBtn = document.querySelector("header button");
backPageBtn.addEventListener("click", () => {
    window.location = "../index.html"
});