/* Importar clases, librerias y dependencias*/
const express = require('express')
const {Router} = require('express')
const router = Router()
const products = require('./products')
const productsHBS = require('./routesHBS')


/* Punto de acceso a las rutas */
// router.use('/productos',products)
router.use('/productos',productsHBS)


/* Exportar ruta general */
module.exports = router