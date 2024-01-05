const express = require('express');

const routes = express.Router();

const libControl = require('../controller/libController');

routes.get('/', libControl.getBook);
routes.post('/', libControl.addBook);

module.exports = routes;