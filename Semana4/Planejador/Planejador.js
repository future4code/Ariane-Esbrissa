const meuInput = document.getElementById("meu-input")

const minhaLista = document.getElementByTagName("ul")[0]

console.log(meuInput)
console.log(minhaLista)

function adicionaItem() {
    let Item = meuInput.Value

    minhaLista.innerHTML += '<li>${item}</li>'

    meuInput.value = ""

}














