// Importamos el módulo 'express'
let express = require('express');

// Creamos una instancia de la aplicación Express
let app = express();

// Importamos el módulo definido en './routes/person'
let personsRoute = require('./routes/person');

// Establecemos el motor de vistas de la aplicación como 'ejs'
app.set('view engine', 'ejs');

// Usamos la ruta definida en personsRoute para manejar todas las solicitudes a la raíz del sitio
app.use(personsRoute);

// Establecemos una ruta estática para todos los archivos en el directorio './public' que comiencen con '/assets'
app.use('/assets', express.static(__dirname + '/public'));

// Establecemos el puerto en el que se ejecutará el servidor
let PORT = process.env.PORT || 3000;

// Iniciamos el servidor y lo configuramos para que escuche solicitudes en el puerto especificado
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});