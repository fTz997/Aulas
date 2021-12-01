/*var jogador1 = 0;
var jogador2 =0;
var placar;

// if ternário  = [condição] ? [instrução1 = if] : [instrução2 = else];
jogador1 != -1 && jogador2 != -1 ? console.log("jogadores válidos") : console.log("jogadores inválidos");
//usando if 
if (jogador1 > 0 && jogador2 == 0){
    console.log("jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
}
//usando else if
else if (jogador2 > 0 && jogador1 == 0){
    console.log("jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
}
//usando else
else{
    console.log("ninguém marcou ponto")
}

switch(placar){
    case placar = jogador1>jogador2:
        console.log("O jogador 1 venceu");
        break;
    case placar = jogador2>jogador1:
        console.log("O jogador 2 venceu");
        break;
    default:
        console.log("O jogo ficou empatado");
}*/

let array = ['1', '2', '3', '4', '5']
let obj = { prop1: 'valor1', prop2: 'valor2', prop3: 'valor3' }

// for executa uma instrução ate que ela seja falsa
/*
for (let indice=0; indice<array.length;indice++){
    console.log(indice)
}*/

//for in executa a partir de uma propriedade
//ex com arraay
/*for (let i in array){
    console.log(i)
}
//ex com objeto
for (i in obj){
    console.log(i)
}
*/
// for of executa a partir de um valor
//ex com array
/*for (i of array){
    console.log(i)
}
//ex com array ---- o objeto quebra
for (i of obj.prop1){
    console.log(i)

}*/

//while executa enquanto a cond. é verdadeira
var a = 0
/*while (a<10){
    a++;
    console.log(a)
}*/
do {
  a++
  console.log(a)
} while (a < 10)
