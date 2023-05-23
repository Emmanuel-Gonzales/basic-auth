'use strict';

// 3rd Party Resources
require('dotenv').config();
const { start } = require('./src/server');
const { sequelizeDatabase } = require('./src/auth/models/index');


// Prepare the express app


// Process JSON input and put the data on req.body



const PORT = process.env.PORT;

// make sure our tables are created, start up the HTTP server.
sequelizeDatabase.sync()
  .then(() => {
    start(PORT);
  }).catch(e => {
    console.error('Could not start server', e.message);
  });