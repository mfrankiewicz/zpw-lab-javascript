'use strict';

const express = require('express');
const app = express();
const server = app.listen(8080);

app.get('/', function (req, res) {
    return res.end('api.zpw.loc');
});
