const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

/// template engine
app.set('view engine', 'ejs');

/// middlewares
app.use(express.static('public'));

/// routes
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname + '/temp/index.html'));
  res.render('index');
});
app.get('/add', (req, res) => {
  // res.sendFile(path.resolve(__dirname + '/temp/index.html'));
  res.render('add');
});
app.get('/about', (req, res) => {
  // res.sendFile(path.resolve(__dirname + '/temp/index.html'));
  res.render('about');
});

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
