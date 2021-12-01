//Map
function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'Admin')
usuarios.set('Stephany', 'User')
usuarios.set('Victor', 'User')
usuarios.set('Feitoza', 'Admin')

console.log(getAdmins(usuarios))
