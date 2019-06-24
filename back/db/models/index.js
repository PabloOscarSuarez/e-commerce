const db = require('../index');
const Book = require('./book');
const Author = require('./author');
const Genre = require('./genre');
const User = require('./user');
const Transaction = require ("./transactions");
const Status = require("./status")
const TransactionDetail = require ("./transactionDetail");

Book.belongsTo(Author, { as: 'author' })
Author.hasMany(Book)

Book.belongsToMany(Genre, { through: 'book_genre' })
Genre.belongsToMany(Book, { through: 'book_genre' })
Transaction.belongsTo(User, {as: "user"})
Transaction.belongsTo(Status, {as: "status"})
Transaction.belongsToMany(Book, {through: TransactionDetail })
Book.belongsToMany(Transaction, {through: TransactionDetail })

module.exports = { db, Book, Author, Genre, User, Transaction, Status, TransactionDetail };