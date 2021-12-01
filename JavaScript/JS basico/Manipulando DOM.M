// o que é D.O.M? Document Object Model 

// o DOM HMTL é um padrao de como acessar e modificar os elementos HTML de uma pagina

// o que é B.O.M? Browser Object Model consiste em -- document, history, location, screen, navigator

// DOM vs BOM
// DOM está dentro do bom "filho"

// estrutura HTML: tag (ex.<body>), id (ex. id="exemplo"), classe(ex. class="outraClasse")

// metodos
document.getElementById('exemplo');
//<h1 id="exemplo>Exemplo</h1>
document.getElementByTagName('li');
/*
[
    <li>exemplo 1</li>
    <li>exemplo 2</li>
    <li>exemplo 3</li>
]
*/
document.getElementByClassName('textos')
/*
[
  <section class="textos">
    <h2>Sobre mim</h2>
    <p>Um texto</>
  </section>

  <section class="textos">
    <h2>Projetos</h2>
    <ul>
      <li>exemplo 1</li>
      <li>exemplo 2</li>
      <li>exemplo 3</li>
    </ul>
  </section>
]
*/

document.querySelectorAll(".primeira-classe .segunda-classe");
/*[
  <div>
    <ul>
      <li>exemplo 1</li>
      <li>exemplo 2</li>
      <li>exemplo 3</li>
    </ul>
  </div>
]*/
document.querySelectorAll('li .opcao');
/*
  <li>exemplo 1</li>
  <li>exemplo 3</li>
  <li>exemplo 2</li>
*/

//outros elementos 

document.createElement(elemento)  | cria um novo elemento HTML
document.removeChild(element)     | remove um elemento
document.appendChild(element)     | adiciona um elemento 
document.replacChild(element)     | substitui um elemento


// trabalhando com estilos

const meuElemento = document.getElementById("meu-elemento")

meuElemento.classList.add("novo-estilo");
//adiciona novo estilo onde tiver o id meu-estilo

meuElemento.classList.remove("classe");
//remove a classe "classe"

meuElemento.classList.toggle("dark-mode");
//toggle é como um interruptor, o que tiver on ele desligará e vice versa

//para inserir um estio diretamente
document.getElementByTagName('p').style.color = "blue";

// tipos e acionando eventos
//tipos de eventos: mouseover, mouseout, click, dbclick | quando inserido diretamente no HTML adicionar ON no inicio do evento
//acionando eventos
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", outraFuncao);


