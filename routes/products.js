/* Importar clases, librerias y dependencias*/
const express = require('express')
const {Router} = require('express')
const Contenedor = require('../clases')
const products = Router()

/* Inicialización de variables */
let productsFile = './productos.txt'
const database = new Contenedor(productsFile)

/* RUTAS */
products.get('/productos',(req,res)=>{
  database.getAll()
  .then(data=>res.send(data))
})

products.get('/productoRandom',(req,res)=>{
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


module.exports = products