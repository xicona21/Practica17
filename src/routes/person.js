// Importamos el módulo de Express
const express = require('express');
// Creamos un objeto router usando el método Router de Express
let router = express.Router();

// Definimos una ruta para manejar una solicitud GET a '/student'
router.get('/student', (req, res) => {
    let t = req.params.id; // Obtenemos el parámetro 'id' de la solicitud
    res.render('student'); // Renderizamos la vista 'student'
});

// Definimos una ruta para manejar una solicitud POST a '/addStudent'
router.post('/addStudent', (req, res) => {
    // Renderizamos la vista 'displayStudent' y pasamos algunos datos en el objeto 'req.body'
    res.render('displayStudent', {
        nombre: req.body.nombre, 
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre,
    });
});

// Definimos una ruta para manejar una solicitud POST a '/personJson' que espera recibir datos en formato JSON
router.post('/personJson', express.json({ type: '*/*' }), (req, res) => {
    // Imprimimos los datos recibidos en la consola
    console.log(`nombre: ${req.body.nombre}
    apellido: ${req.body.apellido}`);
});

// Definimos una ruta para manejar una solicitud GET a '/testJson'
router.get('/testJson', (req, res) => {
    // Renderizamos la vista 'testJson'
    res.render('testJson');
});

// Exportamos el objeto router para que pueda ser utilizado en nuestra aplicación principal
module.exports = router;