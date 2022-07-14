/* Importar clases, librerias y dependencias*/
const express = require('express')
const {Router} = require('express')
const Contenedor = require('../clases')
const products = Router()

/* Inicialización de variables */
let productsFile = './productos.txt'
const database = new Contenedor(productsFile)


/* CUSTOM MIDDLEWARES*/
/* Handle Error */
function errorRequestById(req,res,next){
  database.getById(parseInt(req.params.id))
  .then(data=>{
    if(data){
      req.errorRequestData = data
      next()
    }
    else
      res.status(500).send({Error:`Hubo un error al procesar la solicitud`})
  })
}

/* Handle empty request */
function noContentById(req,res,next){
  let {errorRequestData} = req
  if (req.errorRequestData.length>0){
    req.existentData = errorRequestData
    next()
  }
  else
    res.status(404).send({Error:`Producto no encontrado`})
}


/* RUTAS */
products.route("/productos")
  .get((req,res)=>{
    database.getAll()
    .then(data=>res.status(200).send(data))
  })
  .post((req,res)=>{
    const {title,price,thumbnail} = req.body
    const product = {title,price,thumbnail}
    database.save(product)
    .then(data=>{
      data
      ?res.send({...product,id:data})
      :res.status(500).send({Error: `Error al cargar el producto`})
    })
  })


products.route("/productos/:id")
  .get(errorRequestById,noContentById,(req,res)=>{
    let {existentData} = req
    res.status(200).send(existentData)
  })
  .put(errorRequestById,noContentById,(req,res)=>{
    let {existentData} = req
    let {title,price,thumbnail} = req.body
    const updateProduct = {
      title : title||existentData[0].title,
      price : price||existentData[0].price,
      thumbnail : thumbnail||existentData[0].thumbnail,
      id: existentData[0].id
    }
    database.updateProduct(updateProduct)
    .then(res.status(202).send({
      Messege:`Producto actualizado`,
      Product: updateProduct
    }))
  })
  .delete(errorRequestById,noContentById,(req,res)=>{
    let {existentData} = req
    database.deleteById(existentData[0].id)
    .then(res.status(202).send({Messege:`Producto eliminado`}))
  })


/* TEST DE LOS METODOS DE LA CLASE */

/* const productoNuevo = {
  title:"LUDO",
  price:800,
  thumbnail:"https://img.freepik.com/psd-gratis/maqueta-tablero-ludo_1332-10389.jpg?w=2000"
}
database.save(productoNuevo)
.then(data=>console.log(data)) */

module.exports = products