/* var nome = "Victor Feitoza";
var age = 20;
var frase = "Japão é o melhor time do mundo";
//alert(name + " tem " + age + " anos")
console.log(nome);
console.log(frase.replace("Japão", "Brasil")); */

//var lista = ["maça","pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" "));

//var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", //cor:"roxa"}]
//console.log(frutas.nome);
//alert(frutas[1].cor);

/*var idade = prompt("Qual sua idade?")
if (idade>=18){
    alert("Maior de idade")
}
else{
    alert("Menor de idade")
}*/

/*var count = 5;
while(count<5){
    console.log(count);
    count++;
}*/

/*var count;
for(count =1; count <= 5; count++){
    console.log(count)
}*/

/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getMinutes());*/

//function soma(n1,n2){
//    return n1 + n2;
//}
//alert(soma(5,10));

//var validar = 0;
//function validaIdade(idade){
//if(idade>=18){
//    validar=true
//}
//else{
//    validar=false
//}
//return validar;
//}
//var idade = prompt("Qual sua idade");
//validaIdade(idade);
//console.log(validar)//

function clicou() {
  document.getElementById('agradecimento').innerHTML = 'Obrigado por clicar'
  //alert("Obrigado por clicar")
}

function redirecionar() {
  //window.open("https://www.youtube.com"); //abre outra aba
  window.location.href = 'https://www.youtube.com' //redireciona na mesma aba
}

function trocar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar"; // pega o elemento pelo id
  //alert("trocar texto")
  elemento.innerHTML = 'Obrigado por passar o mouse'
}
function voltar(elemento) {
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; // pega o elemento pelo id
  elemento.innerHTML = 'Passe o mouse aqui'
}
function load() {
  alert('Página carregada')
}
function funcaoChange(elemento) {
  console.log(elemento.value)
}
