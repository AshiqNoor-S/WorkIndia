const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
app.use(bodyParser.json());

const JWT_SECRET = 'JWT_TOKEN';
const ADMIN_API_KEY = 'ADMIN_KEY';

const dbConfig = {
    host: 'localhost',
    user: 'zoomcar',
    password: 'zoom123',
    database: 'carrental',
};


const getConnection = async () => {
    return await mysql.createConnection(dbConfig);
};

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
