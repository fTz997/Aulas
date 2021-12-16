const lista = [
  {
    nome: 'sabão em pó',
    preco: 30
  },
  {
    nome: 'toalha',
    preco: 12
  },
  {
    nome: 'cereal',
    preco: 18
  }
]
const saldo = 100

function saldoResto(saldo, lista) {
  return lista.reduce((prev, current) => prev - current.preco, saldo)
}
console.log(saldoResto(saldo, lista))
// 40
