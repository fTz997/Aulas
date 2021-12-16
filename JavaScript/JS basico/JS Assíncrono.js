//JS assincrono

// precisa de 2 palavras chave async e await

// Promisses
/**
Inicialmente seu valor é desconhecido. Pode ser resolvida ou rejeitada

Uma promisse pode ter 3 estados 
1- Pendente 

2- Fulfilled = completada

3- Rejeitada

*/
// Estrutura de promisse
const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve('Resolvida')
  }, 2000)
})

await myPromise
  .then(result => result + 'passando pelo then')
  .then(result => result + 'e agora acabou!')
  .catch(err => console.log(err.message))

//retornará o valor após 2 segundos

// Estrutura de um codigo assincrono => é necessario usar as palavras async para especificar que é uma função assincrona, e o awnait para nao executar outra coisa enquanto está na função assincrona
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida')
    }, 3000)
  })
  const resolved = await myPromise
    .then(result => +'passando pelo then')
    .then(result => +'e agora acabou!')
    .catch(err => console.log(err.mesage))
  return resolved
}

//tambem é possivel usar o try... catch
async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida')
    }, 3000)
  })
  let result
  try {
    result = await myPromise
      .then(result => +'passando pelo then')
      .then(result => +'e agora acabou!')
  } catch (err) {
    result = err.mesage
  }
  return result
}

//Usando uma API
//exemplo de codigo usando uma API e a condição try...catch

const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.getElementById('change-cat')

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL)
    const json = await data.json
    return json.webpurl
  } catch (e) {
    console.log(e.message)
  }
}
const loadImg = async () => {
  const catImg = document.getElementById('cat')
  catImg.src = await getCats()
}

catBtn.addEventListener('click', loadImg)
loadImg()

//usando a mesma api porem sem usar try catch

const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.getElementById('change-cat')

const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e))
  return data.webpurl
}

const loadImg = async () => {
  const catImg = document.getElementById('cat')
  catImg.src = await getCats()
}

catBtn.addEventListener('click', loadImg)

loadImg()
