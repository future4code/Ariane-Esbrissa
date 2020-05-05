const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = [i]
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}

console.log(novaLista)

// A-.push adiciona valores a um array. O metodo .push depende da propriedade length para determinar onde começar a inserir os valores
//B- valor [10,15,25,30]
//C- valor [3,3,3,3] e [4,4,4,4];

