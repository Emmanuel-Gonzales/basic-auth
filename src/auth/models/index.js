'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const { userModel } = require('./users-model');
const sequelizeDatabase = new Sequelize(process.env.DATABASE_URL);

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let Users = userModel(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase, Users };