/* Importar clases, librerias y dependencias*/
const {Router} = require('express')
const router = Router()
const productsPUG = require('./routesPUG')


/* Punto de acceso a las rutas */
router.use('/productos',productsPUG)


/* Exportar ruta general */
module.exports = router