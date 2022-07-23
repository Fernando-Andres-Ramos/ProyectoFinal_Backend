/* Importar clases, librerias y dependencias*/
const {Router} = require('express')
const Contenedor = require('../clases')
const productsEJS = Router()

/* Inicialización de variables */
let productsFile = './productos.txt'
const database = new Contenedor(productsFile)

/* Rutas */
productsEJS.route("/")
  .get((req,res)=>{
    database.getAll()
    .then(data=>res.status(200).render('layouts/index',{productos:data}))
    .catch(err=>res.send(console.log(`Ha ocurrido un error:${err}`)))
  })
  .post((req,res)=>{
    const {title,price,thumbnail} = req.body
    const product = {title,price,thumbnail}
    database.save(product)
    .then(data=>{
      data
      ?res.status(201).redirect("http://localhost:8080/api")
      :res.status(500).json({Error: `Error al cargar el producto`})
    })
    .catch(err=>res.send(console.log(`Ha ocurrido un error:${err}`)))
  })

module.exports = productsEJS