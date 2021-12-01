//solução 1
function palindromo(string) {
  if (!string) return 'Não é uma string'
  return string.split('').reverse().join('') === string
}
console.log(palindromo('ovo'))

//solução 2
function palindromo2(string) {
  if (!string) return 'Não é uma string'
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}
console.log(palindromo2('ovo'))
