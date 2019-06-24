const Sequelize = require('sequelize');
const db = require('../../db');


const Status = db.define('status', {

    name: {
        type: Sequelize.ENUM,
        validate: {
            notEmpty: true,

        },
        values:["carrito", "creado", "cancelado", "procesando", "completado"]
    },

})


module.exports = Status;