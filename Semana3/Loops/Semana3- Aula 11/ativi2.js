const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = [i]
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}

console.log(novaLista)