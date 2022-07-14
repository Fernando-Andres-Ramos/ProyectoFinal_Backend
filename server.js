/* Importar clases, librerias y dependencias*/
const express = require('express')
const products = require('./routes/products')


/* Inicializar el servidor con express*/
const app = express()
const PORT = 8080
const server = app.listen(PORT,()=>{
  console.log(`Servidor HTTP escuchando el puerto: ${server.address().port}`)
})
server.on("error",error=>console.log(`El servidor ha sufrido un problema: ${error}`))


/* Middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


/* Acceso a las rutas */
app.use('/api',products)













