/* Importar clases, librerias y dependencias*/
const {Router} = require('express')
const router = Router()
const productsHBS = require('./routesHBS')


/* Punto de acceso a las rutas */
router.use('/productos',productsHBS)


/* Exportar ruta general */
module.exports = router