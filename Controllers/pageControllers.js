const Photo = require('../models/Photo');

exports.getIndex = (req, res) => {
  res.render('index');
};

exports.getAdd = (req, res) => {
  res.render('add');
};

exports.getAbout = (req, res) => {
  res.render('about');
};

exports.getEdit = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', { photo });
};
