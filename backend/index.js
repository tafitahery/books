const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'test',
});

app.get('/', (req, res) => {
  res.json('Hello this is the backend');
});

// If there is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'

app.get('/books', (req, res) => {
  const q = 'SELECT * FROM books';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/books', (req, res) => {
  const q = 'INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)';
  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Book has been created successfully');
  });
});

app.listen(8800, () => {
  console.log('Connected to backend!');
});
