/* Importar clases, librerias y dependencias*/
const express = require('express')
const router = require('./routes')
const handlebars = require('express-handlebars')

/* Inicializar el servidor con express*/
const app = express()
const PORT = 8080
const server = app.listen(PORT,()=>{
  console.log(`Servidor HTTP escuchando el puerto: ${server.address().port}`)
})
server.on("error",error=>console.log(`El servidor ha sufrido un problema: ${error}`))


/* Setear el motor de plantillas*/
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
  })
)

app.set("view engine", "hbs"); // registra el motor de plantillas
app.set("views", "./views/partials"); // especifica el directorio de vistas


/* Middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api',express.static('public'))


/* Acceso a las rutas */
app.use('/api',router)






