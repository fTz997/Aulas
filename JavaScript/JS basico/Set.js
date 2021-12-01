/*
Set possuem valores unicos, que nao se repetem nunca
Em vez da prop length, consulta-se o numero de registros pela propriedade size
Não possui os metodos map, filter, reduce etc. porque sao metodos de um array 

*/

const mySet = new Set()

mySet.add(1)
mySet.add(5)

mySet.has(1)
//true

mySet.has(3)
//false

mySet.delete(5)

mySet.has(5)
//false porque foi deletado
