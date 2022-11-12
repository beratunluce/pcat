const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const methodOverride = require('method-override');
const path = require('path');
const fs = require('fs');
const Photo = require('./models/Photo');
const { pathToFileURL } = require('url');
const photoController = require('./Controllers/photoControllers');
const pageController = require('./Controllers/pageControllers');

//mongodb connect
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/// template engine
app.set('view engine', 'ejs');

/// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

/// routes

app.get('/', photoController.getAllPhoto);

app.get('/photos/:id', photoController.getPhoto);

app.post('/photos', photoController.createPhoto);

app.put('/photos/:id', photoController.updatePhoto);

app.delete('/photos/:id', photoController.deletePhoto);

app.get('/index', pageController.getIndex);

app.get('/add', pageController.getAdd);
app.get('/about', pageController.getAbout);

app.get('/photos/edit/:id', pageController.getEdit);

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
