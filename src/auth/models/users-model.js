'use strict';

// const { sequelize, DataTypes } = require('./index');

// Create a Sequelize model
const userModel = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Users;
};

module.exports = { userModel };