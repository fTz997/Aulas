const myMap = new Map()

myMap.set('apple', 'fruit')
//Map(1) {"apple" => "fruit"}

myMap.get('apple')
//"fruit"

myMap.delete('apple')
//true

myMap.get('apple')
//undefined

/*
maps podem ter chaves de qualquer tipo
maps possuem a propriedade length
maps sao mais faceis de iterar 
é usado quando o valor das chaves é desconhecido
os valores sao do mesmo tipo
*/
