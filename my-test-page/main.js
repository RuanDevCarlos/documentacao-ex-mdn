// Seleciona a primeira imagem encontrada no documento
const myImage = document.querySelector("img")

// Define uma função de clique para a imagem
myImage.onclick = () => {
    // Obtém o valor atual do atributo 'src' da imagem
    const mySrc = myImage.getAttribute("src")

    // Verifica se a imagem atual é a primeira versão do logo
    if (mySrc === "imagens/fire-fox.png") {
        // Se for, muda para a segunda versão
        myImage.setAttribute("src", "imagens/fire-fox2.png")
    } else {
        // Se não for, volta para a primeira versão
        myImage.setAttribute("src", "imagens/fire-fox.png")
    }
}

// Seleciona o primeiro botão e o primeiro cabeçalho h1 do documento
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

// Função para definir o nome do usuário
function setUserName() {
    // Exibe um prompt para o usuário digitar seu nome
    const myName = prompt("Por favor digite o seu nome.");

    // Verifica se o usuário não digitou nada ou cancelou
    if (!myName) {
        // Se não digitou, chama a função novamente  
        setUserName();
    } else {
        // Se digitou, armazena o nome no localStorage
        localStorage.setItem("name", myName);

        // Atualiza o texto do cabeçalho com o nome do usuário
        myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
}

// Verifica se não há um nome armazenado no localStorage
if (!localStorage.getItem('name')) {
    // Se não houver, chama a função para definir o nome
    setUserName()
} else {
    // Se houver, obtém o nome armazenado
    const storedName = localStorage.getItem('name')
    // Atualiza o texto do cabeçalho com o nome armazenado
    myHeading.textContent = `Mozilla é legal, ${storedName}`
}

// Define uma função de clique para o botão
myButton.onclick = () => {
    // Quando clicado, chama a função para definir novo nome
    setUserName();
}