/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const hbsSections = require('express-handlebars-sections');
const session = require('express-session');
const routes = require('./routes');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(session({
  secret: 'reserva@123',
  resave: true,
  saveUninitialized: true,
}));
app.use('/', express.static(`${__dirname}/public`));
app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());

app.engine('hbs', hbs({
  extname: 'hbs',
  layoutsDir: `${__dirname}/views/layouts/`,
  section: hbsSections(),
  defaultLayout: 'default',
  helpers: {
    section(name, options) {
      if (!this._sections) {
        this._sections = {};
      }
      this._sections[name] = options.fn(this);
      return null;
    },
  }
}));

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

app.use(routes);
app.listen(3300, console.log('Servidor rodando na porta 3300'));