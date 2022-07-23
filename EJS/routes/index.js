/* Importar clases, librerias y dependencias*/
const {Router} = require('express')
const router = Router()
const productsEJS = require('./routesEJS')


/* Punto de acceso a las rutas */
router.use('/productos',productsEJS)


/* Exportar ruta general */
module.exports = router