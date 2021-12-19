//VadanescuCostinCristian - Gr 1151 - ID
//Tema 19 - Gestionare resurse de invatare online (integrare Facebook share pe grupuri/pagini)
//definire modele user si course
const sequelize = require('../database/sequelize');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: { error: 'Must be a valid address!' },
    },
  }, password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const Course = sequelize.define('course', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { error: 'Course must have a name!' },
      notEmpty: { error: 'name must not be empty!' },
    }
  },
  content: {
    type: DataTypes.TEXT
  }
});

module.exports = { User, Course };