const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('user', {
    userid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: Sequelize.STRING, autoNull: false },
    lat: { type: Sequelize.STRING, autoNull: false },
    long: { type: Sequelize.STRING, autoNull: false },
    created_date: { type: Sequelize.DATE, autoNull: false }
});

module.exports = User;