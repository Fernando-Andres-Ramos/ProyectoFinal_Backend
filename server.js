const Contenedor = require('./clases')

let productsFile = './productos.txt'

const database = new Contenedor(productsFile)


/* TEST DE LOS METODOS DE LA CLASE */


/* const productoNuevo = {
  title:"LUDO",
  price:800,
  thumbnail:"https://img.freepik.com/psd-gratis/maqueta-tablero-ludo_1332-10389.jpg?w=2000"
}
database.save(productoNuevo)
.then(data=>console.log(data)) */


/* database.getById(5)
.then(data=>console.log(data)) */


database.getAll()
.then(data=>console.log(data))


/* database.deleteById(9) */


/* database.deleteAll() */
