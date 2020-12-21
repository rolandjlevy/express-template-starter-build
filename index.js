'use strict';

// Set up server with express.js
var express = require('express');
var app = express();
var path = require('path');
var env = require('dotenv');
var port = process.env.PORT || 3000;

// Set up ejs templates
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Set path for views directory
var views = path.join(__dirname, '/views');
console.log({ views: views });
app.set('views', views);

// For body parsing in POST routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware to capture current url
app.use(function (req, res, next) {
  res.locals.uri = req.originalUrl;
  next();
});

// Set up routes
app.get('/', function (req, res) {
  res.render('pages/index', { title: 'Home', uri: res.locals.uri });
});

app.get('/about', function (req, res) {
  res.render('pages/about', { title: 'About', uri: res.locals.uri });
});

app.listen(port, function () {
  console.log('Listening on port', port);
});