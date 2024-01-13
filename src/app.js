const express = require('express');
const sendError = require('@helpers/sendError');
const rateLimit = require('@middlewares/rateLimit');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(sendError);

app.use(...rateLimit);

app.use('/', routes);

module.exports = app;
