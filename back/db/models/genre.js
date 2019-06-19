const Sequelize = require('sequelize');
const db = require('../../db');

var Genre = db.define('genre', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Genre