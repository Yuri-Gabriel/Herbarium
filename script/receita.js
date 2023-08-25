const receitas = {
    "Arroz": {
        "Ingredientes": [
            "Arroz"
        ],
        "Modo de preparo": [
            "Faça arroz"
        ]
    },
    "Hamburguer": {
        "Ingredientes": [
            "Pao"
        ],
        "Modo de preparo": [
            "Frite a carne"
        ]
    },
    "Moqueca": {
        "Ingredientes": [
            "Banana"
        ],
        "Modo de preparo": [
            "Cozinhe a banana"
        ]
    }
}

const receitaEscolhida = localStorage.getItem("receita");
if (receitaEscolhida == null || !receitaEscolhida) {
    window.location = "../index.html";
}

var Comida;
switch (receitaEscolhida) {
    case "arroz":
        Comida = receitas.Arroz;
        break;
    case "hamburguer":
        Comida = receitas.Hamburguer;
        break;
    case "moqueca":
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