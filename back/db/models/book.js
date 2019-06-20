const Sequelize = require('sequelize');
const db = require('../../db');

var Book = db.define('book', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate :{
            min: 0
        }
    },
});

Book.beforeCreate (function(book){
    if(book.title){
        book.title.toLowerCase()
    }
})

module.exports = Book