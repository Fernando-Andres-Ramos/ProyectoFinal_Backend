/* Importar clases, librerias y dependencias*/
const express = require('express')
const Contenedor = require('./clases')


/* Inicializar el servidor con express*/
const app = express()
const PORT = 8080

const server = app.listen(PORT,()=>{
  console.log(`Servidor HTTP escuchando el puerto: ${server.address().port}`)
})

server.on("error",error=>console.log(`El servidor ha sufrido un problema: ${error}`))


/* Inicializado de objeto para manipular bases de datos */
let productsFile = './productos.txt'
const database = new Contenedor(productsFile)


/* RUTAS */
app.get('/productos',(req,res)=>{
  database.getAll()
  .then(data=>res.send(data))
})

app.get('/productoRandom',(req,res)=>{
  database.getAll()
  .then(data=>{
    let i = Math.floor(Math.random()*data.length)
    res.send(data[i])
  })
})







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

/* database.getAll()
.then(data=>console.log(data)) */

/* database.deleteById(9) */

/* database.deleteAll() */
