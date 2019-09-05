/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', express.static(__dirname + '/public'));
app.use(routes);
app.listen(3300, console.log('Servidor rodando na porta 3300'));