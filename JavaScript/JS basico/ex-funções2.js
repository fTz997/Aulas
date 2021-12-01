function calculaIdade(anos) {
  return 'Daqui a ${anos} anos ${this.nome} terá ${this.idade + anos} de idade'
}
const pessoa1 = {
  nome: 'Maria',
  idade: 30
}
const pessoa2 = {
  nome: 'Murphy',
  idade: 22
}

console.log(calculaIdade.call(pessoa1, 20))
