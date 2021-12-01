//ECMAScript
/* um erro é composto por:
-mensagem 
-nome 
-linha
-call stack 

//DOMException -> sao erros relacionados ao codigo sendo executado na página web
sao referentes a estrutura

// Tratando erros 
if (!string) throw "string invalida";
nesse caso o throw retornará a mensagem como um erro 

//TRY ... CATCH
permite manipular o erro de uma forma mais personalizada/organizada, porque faz os tratamentos para erros em diferentes blocos

//FINALLY
Complementa o try...catch, é executado após a verificação da condição independente de exixtir um erro ou não

*/

// Código usando estas propriedades
function verificaPalindromo(string) {
  // arrumar // if ( tryCatchEx != string){console.log('É necessario ser uma string')}
  if (!string) throw 'String invalida'

  return string === string.split('').reverse().join('')
}

function tryCatchEx(string) {
  try {
    return verificaPalindromo(string)
  } catch (e) {
    throw e
  } finally {
    console.log('A string enviada foi: ' + string)
  }
}

tryCatchEx('teste')

//Object error -> tratando erros
new Error(message, fileName, lineNumber) //os parametros sao opcionais
const meuErro = new Error('Mensagem Inválida')
meuErro.name = 'Mensagem Inválida'
throw meuErro
