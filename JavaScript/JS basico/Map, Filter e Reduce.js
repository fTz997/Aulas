// A função Map retorna um novo array converte os items selecionados criando um novo array, este método é executado em ordem, partindo do indice 1 (0)

// Sintaxe
Array.map(callback, thisArg) // o callback é uma função // O thisArg é opcional que equivale ao valor de this dentro do callback

funcCallback(item, index, array) //Não é necessário passar os 3

// Map vc forEach
// usando Map
const array = [1, 2, 3, 4, 5]
array.map(item => item * 2) //retornará [2,4,6,8,10]

// Usando o forEach

const array = [1, 2, 3, 4, 5]
array.forEach(i => i * 2) //retornará undefined

// O Filter retornará um novo array retornando apenas o que passou pelo filtro

// Sintaxe
array.filter(callback, thisArg) // o callback é uma função a ser executada em cada elemento // O thisArg é opcional que equivale ao valor de this dentro do callback

//ex
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi']
frutas.filter(fruta => fruta.includes('maçã'))

//retornará ['maçã fuji', 'maçã verde'];

// O Reduce é capaz de, após a execução de uma função em todos elementos de uma função, retornar um valor unico
// Sintaxe
array.reduce(callbackFunc, initialValue) //callbackFunc é a função a ser executada a partir do acumulador // initialValue é o valor sobre o qual o retorno final irá atuar

//ex
const callbackFunc = function (accumulator, currentValue, index, array) {
  //accumulator acumula todas as chamadas da callbackFunc //currentValue é o elemento que está senco acessado pela função
  //alguma coisa
}
array.reduce(callbackFunc, initialValue)
