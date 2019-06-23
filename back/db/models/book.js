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
    urlImage: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

Book.beforeSave (function(book){
    console.log("entre aal hook", book)
    if(book.title){
        book.title = book.title.toLowerCase()
    }
 
})

module.exports = Book