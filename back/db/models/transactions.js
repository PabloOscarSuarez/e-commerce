const Sequelize = require('sequelize');
const db = require('../../db');


const Transactions = db.define('transaction', {

    total: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    
})

module.exports = Transactions;