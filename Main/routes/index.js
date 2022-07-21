/* Importar clases, librerias y dependencias*/
const express = require('express')
const {Router} = require('express')
const router = Router()
const products = require('./products')


/* Punto de acceso a las rutas */
router.use('/productos',products)


/* Exportar ruta general */
module.exports = router