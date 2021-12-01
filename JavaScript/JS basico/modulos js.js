// o que são? arquivos JS que tem a capacidade de importar e exportar informações de outros arquivos do mesmo tipo

/*
Algumas vantagens sao 
-organização do codigo
-compartilhamento de variaveis em escopos diferentes
-explicita as dependencias dos arquivos
*/

//exportando -- Named exports
export function mostraIdade(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.idade}'
}
export function mostraCidade(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.cidade}'
}
export function mostraHobby(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.hobby}'
}

// ou desta forma
function mostraIdade(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.idade}'
}
function mostraCidade(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.cidade}'
}
function mostraHobby(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.hobby}'
}
export { mostraIdade, mostraHobby, mostraCidade }

//default exports
// so pode haver um por arquivo
// será o retorno padrao do arquivo
function mostraIdade(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.idade}'
}
function mostraCidade(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.cidade}'
}
function mostraHobby(pessoa) {
  return ' A idade de ${pessoa.nome} é ${pessoa.hobby}'
}
export { mostraIdade, mostraHobby }
export default mostraCidade

//IMPORTANDO
import { funcao, variavel, classe } from './arquivo.js'
//ou
import valorDefault from './arquivo.js'
//importar mudando o nome do arquivo
import { arquivo as novoArquivo } from './arquivo.js'
novoArquivo.metodo()
//importando tudo de um arquivo
import * as INFOS from './arquivoc.js'
INFOS.metodoA()
console.log(INFOS.variavel)

// Vinculadno ao HTML
;<script type="module" src="./main.js"></script>

//curiosidades
/*
  Modulos sempre estao em "srict mode"
  Podem ser utilizadas extensões .js e .mjs
  Para testes locais é necessário um servidor
  Ao importar, sempre lembre da extensão, e utilizar ./ como ponto de partida
*/
