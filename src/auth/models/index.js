'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { userModel } = require('./users-model');
const sequelizeDatabase = new Sequelize(process.env.DATABASE_URL);

let Users = userModel(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase, Users };