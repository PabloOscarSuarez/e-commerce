const Sequelize = require('sequelize');
const db = require('../../db');

const Comment = db.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

module.exports = Comment
