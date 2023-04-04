const express = require('express');
const app = express();
const morgan = require('morgan');

const connection = require('./database/DB_connect.js');

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.get('/api/v1/products', (req, res) => {
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some_url',
    };
    res.send(product);
});

app.post('/api/v1/products', (req, res) => {
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some_url',
    };
    res.send(product);
});

// Utils
const config = require('./config.js');

// Connect to db
connection();

// Spin up server
const port = config.development.port || 5000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
