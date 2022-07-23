/* Importar clases, librerias y dependencias*/
const express = require('express')
const router = require('./routes')

/* Inicializar el servidor con express*/
const app = express()
const PORT = 8080
const server = app.listen(PORT,()=>{
  console.log(`Servidor HTTP escuchando el puerto: ${server.address().port}`)
})
server.on("error",error=>console.log(`El servidor ha sufrido un problema: ${error}`))

app.set('view engine', 'ejs') // registra el motor de plantillas

/* Middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api',express.static('public'))


/* Acceso a las rutas */
app.use('/api',router)






