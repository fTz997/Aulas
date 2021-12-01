function validaArray(array, num) {
  try {
    if (!array && !num) throw new ReferenceError('ENVIE OS PARÂMETROS')
    if (typeof array !== 'object')
      throw new TypeError('O array precisa ser do tipo objeto')
    if (typeof num !== 'number')
      throw new TypeError('O num precisa ser um numero ')
    if (array.length !== num) throw new RangeError('Tamanho inválido!')
    return array
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro é um Reference Error!!')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este é um Type Error!!')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Este é um Range Error!!')
      console.log(e.message)
    } else {
      console.log('Erro inesperado' + e)
    }
  }
}

console.log(validaArray())
