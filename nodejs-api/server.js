'use strict';

// constants
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://172.16.241.1:27017/db');

app.get('/', function (req, res) {
  res.send('api.zpw.loc');
});

/**
 * /products
 */
app.get('/products', function (req, res) {

})
app.post('/products', function (req, res) {

})
app.put('/products', function (req, res) {

})
app.delete('/products', function (req, res) {

})

/**
 * /product-categories
 */
app.get('/product-categories', function (req, res) {

})

/**
 * /orders
 */
app.get('/orders', function (req, res) {

})
app.post('/orders', function (req, res) {

})

/**
 * /users
 */
app.post('/users/login', function (req, res) {

})

app.listen(8080);
