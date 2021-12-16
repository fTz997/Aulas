// Resolução sem this
const array = [1, 2, 3, 4, 5]
console.log(
  'o array inicial é' + array + '\n\n' + 'se multiplicarmos por 2 teremos'
)
console.log(array.map(item => item * 2))

// Resolução com this
const maca = {
  value: 1
}
const banana = {
  value: 3
}
function mapComThis(array, thisArg) {
  return array.map(function (item) {
    return item * this.value
  }, thisArg)
}

const nums = [1, 2]

console.log('this -> maçã', mapComThis(nums, maca))
console.log('this -> banana', mapComThis(nums, banana))
