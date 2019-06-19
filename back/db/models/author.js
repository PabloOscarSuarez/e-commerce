const Sequelize = require('sequelize');
const db = require('../../db');

var Author = db.define('author', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Author