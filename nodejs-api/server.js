'use strict';

// constants
const express = require('express');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://lab07.zpw.loc');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.json())

mongoose.connect('mongodb://172.16.241.1:27017/api');

var Schema = mongoose.Schema;

var Products = new Schema({
    categoryId: String,
    name: String,
    price: Number
});

mongoose.model('products', Products);
var ProductModel = mongoose.model('products');


var ProductCategories = new Schema({
    name: String
});

mongoose.model('product-categories', ProductCategories);
var ProductCategoryModel = mongoose.model('product-categories');


var Orders = new Schema({
    name: String,
    street: String,
    products: [String]
});

mongoose.model('orders', Orders);
var OrderModel = mongoose.model('orders');


app.get('/', function (req, res) {
    return res.end("api.zpw.loc");
});

/**
 * /products
 */
app.get('/products', function (req, res) {
    ProductModel.find().lean().exec(function (err, products) {
        var result = [];

        products.forEach(function(product) {
            result.push({
                id: product._id,
                categoryId: product.categoryId,
                name: product.name,
                price: product.price
            });
        });

        return res.end(JSON.stringify(result));
    })
})

app.post('/products', function (req, res) {
    var product = new ProductModel();

    var newProduct = req.body;

    product.categoryId = newProduct.categoryId;
    product.name = newProduct.name;
    product.price = newProduct.price;

    product.save(function(err) {
        if (err) {
            throw err;
        }
        console.log('Zadanie został o zapisane.');
    });

    return res.end();

})
app.put('/products/:productId', function (req, res) {
    var productId = req.params.productId;

    ProductModel.findOneAndUpdate({ _id: productId }, req.body, {upsert:true}, function(err, doc){
        return res.end();
    });

})
app.delete('/products/:productId', function (req, res) {
    var productId = req.params.productId;
    ProductModel.find({ _id:productId }).remove().exec();
    return res.end();
})

/**
 * /product-categories
 */
app.get('/product-categories', function (req, res) {
    ProductCategoryModel.find().lean().exec(function (err, productCategories) {
        var result = [];

        productCategories.forEach(function(productCategory) {
            result.push({
                id: productCategory._id,
                name: productCategory.name
            });
        });

        return res.end(JSON.stringify(result));
    })
})

/**
 * /orders
 */
app.get('/orders', function (req, res) {
    OrderModel.find().lean().exec(function (err, orders) {
        var result = [];

        orders.forEach(function(order) {
            result.push({
                id: order._id,
                name: order.name,
                street: order.street,
                products: order.products
            });
        });

        return res.end(JSON.stringify(result));
    })

})
app.post('/orders', function (req, res) {
    var order = new OrderModel();

    var newOrder = req.body;

    order.name = newOrder.name;
    order.street = newOrder.street;
    order.products = newOrder.products;

    order.save(function(err) {
        if (err) {
            throw err;
        }
        console.log('Zadanie został o zapisane.');
    });

    return res.end();
})

/**
 * /users
 */
app.post('/users/login', function (req, res) {


})

app.listen(8080);
