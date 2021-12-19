//initializare bd, cu definirea dialectului si a storage-ului 
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/platform.db',
  define: {
    timestamps: false
  }
});

module.exports = sequelize; 