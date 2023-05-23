'use strict';

const express = require('express');
const router = require('./auth/router');

const app = express();
app.use(express.json());
app.use(router);

const start = (port) => app.listen(port, () => console.log('server running on', port));

module.exports = {
  app,
  start,
};