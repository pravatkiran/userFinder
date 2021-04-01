const Sequelize = require('sequelize');

const sequelize = new Sequelize('demo', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});




module.exports = sequelize;