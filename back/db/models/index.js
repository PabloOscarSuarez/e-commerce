const db = require('../index');
const Book = require('./book');
const Author = require('./author');
const Genre = require('./genre');
const User = require('./user');
const Comment = require('./comment');
const Transaction = require("./transactions");
const Status = require("./status")
const TransactionDetail = require("./transactionDetail");

Book.belongsTo(Author, { as: 'author' })
Author.hasMany(Book)

Book.belongsToMany(Genre, { through: 'book_genre', foreignKey: 'bookId' })
Genre.belongsToMany(Book, { through: 'book_genre', foreignKey: 'genreId' })
const BookGenre = require('./book_genre');

Book.belongsToMany(User, { through: Comment, foreignKey: 'bookId' })
User.belongsToMany(Book, { through: Comment, foreignKey: 'userId' })

Transaction.belongsTo(User, { as: "user" })
Transaction.belongsTo(Status, { as: "status" })

Transaction.belongsToMany(Book, { through: TransactionDetail, foreignKey: 'transactionId' })
Book.belongsToMany(Transaction, { through: TransactionDetail, foreignKey: 'bookId' })

module.exports = { db, Book, Author, Genre, User, Transaction, Status, BookGenre, TransactionDetail, Comment };