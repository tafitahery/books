const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'test',
});

app.get('/', (req, res) => {
  res.json('Hello this is the backend');
});

app.listen(8800, () => {
  console.log('Connected to backend!');
});
