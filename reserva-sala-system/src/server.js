/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const routes = require('./routes');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', express.static(`${__dirname}/public`));
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    layoutsDir: `${__dirname}/views/layouts/`,
    defaultLayout: 'default',
  }),
);
app.use(routes);
app.listen(3300, console.log('Servidor rodando na porta 3300'));
