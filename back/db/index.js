const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/ecommerce_p5', {
    logging: false
})

module.exports = db;