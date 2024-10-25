    const serverless = require("serverless-http") 
    
    const express = require('express');
    const cors = require("cors");
    const app = express();
    //const port = 3000;
    
    app.use(express.json());
    app.use(cors());

    app.get('/api', (req, res) => {
        res.send('¡Hola, mundo!');
    });

    app.post('/api', (req, res) => {
        const { name } = req.body;

        res.json('Hello there ${name}!');
    });

    app.get('/users', (req, res) => {
        const list = [
            {id: 1, name: "Juan Perez"},
            {id: 2, name: "Jose Perez"},
        ];

        res.json(list);

    })

    module.exports.handler = serverless(app);


    
    /*app.get('/api/mensaje', (req, res) => {
        res.json({ mensaje: 'Este es un mensaje JSON' });
    });
    
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });*/