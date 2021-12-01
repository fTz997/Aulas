function comparingNumbers(num1, num2) {
  const primeiraFrase = criaPrimeiraFrase(num1, num2)
  const segundaFrase = criaSegundaFrase(num1, num2)
  return '${primeiraFrase} ${segundaFrase}'
}

function criaPrimeiraFrase() {
  let saoIguais = ''
  if (num1 !== num2) {
    saoIguais = 'Não'
  }
  return 'Os numeros ${num1} e ${num2} ${saoIguais} são iguais'
}

function criaSegundaFrase() {
  const soma = num1 + num2
  let result10 = 'menor'
  let result20 = 'menor'
  const compara10 = soma > 10
  const compara20 = soma > 20
  if (compara10) {
    result10 = 'maior'
  }
  if (compara20) {
    result20 = 'maior'
  }
  return 'Sua soma é igual a ${soma}, que é ${result10} que 10 e ${result20} que 20'
}
console.log(comparingNumbers(1, 2))
