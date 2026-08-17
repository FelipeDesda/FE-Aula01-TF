
const names = [
    "Ana Martins",
    "Carlos Souza",
    "Fernanda Lima",
    "João Oliveira",
    "Mariana Costa",
    "Pedro Almeida",
    "Camila Rocha",
    "Lucas Fernandes",
    "Beatriz Gomes"
];


// Obter os elementos 
const sectionListElement = document.getElementById("list-container");
const inputListAddElement = document.getElementById("list-add");
const buttonListAddElement = document.getElementsByClassName("btn")[0];

console.log(sectionListElement, inputListAddElement, buttonListAddElement)


// Criar um ELEMENTO ul - elemento que engloba uma lista 
const ulElement = document.createElement("ul");
// Adicionar uma classe - JEITO NÃO RECOMENDADO
ulElement.setAttribute("class", "list-names");
// AQUI O ELEMENTO JÁ EXISTE, JÁ ESTÁ REFERENCIADO EM UMA CONSTANTE.
// PORÉM NÃO FOI INSERIDO NA ÁVORE DOM


//iNSERIR ENO NÓ DO CONTAINER PRINCIPAL DA ÁRVORE DOM
sectionListElement.append(ulElement);

function createDeleteButton() {
    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.innerHTML = "<strong>Excluir</strong>";

    buttonDeleteElement.addEventListener("click", (event) => {
        const currentTargetElement = event.currentTarget;
        const liParentElement = currentTargetElement.parentElement;

        if (liParentElement) {
            liParentElement.remove();
        }
    });

    return buttonDeleteElement;
}

function addListItem(value) {
    const trimmedValue = value.trim();

    if (trimmedValue === "") {
        return;
    }

    const liElement = document.createElement("li");
    const buttonDeleteElement = createDeleteButton();

    liElement.append(trimmedValue, " ", buttonDeleteElement);
    ulElement.append(liElement);
}

names.forEach((name) => {
    addListItem(name);
});

buttonListAddElement.addEventListener("click", (event) => {
    event.preventDefault();

    const inputValue = inputListAddElement.value.trim();

    if (inputValue === "") {
        return;
    }

    addListItem(inputValue);
    inputListAddElement.value = "";
});


