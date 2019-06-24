const db = require('../index');
const Book = require('./book');
const Author = require('./author');
const Genre = require('./genre');
const User = require('./user');
const Comment = require('./comment');

// Comment.belongsTo(Book)
// Comment.belongsTo(User)

Book.belongsTo(Author, { as: 'author' })
Author.hasMany(Book)

Book.belongsToMany(Genre, { through: 'book_genre', foreignKey: 'bookId' })
Genre.belongsToMany(Book, { through: 'book_genre', foreignKey: 'genreId' })
const BookGenre = require('./book_genre');

Book.belongsToMany(User, { through: Comment, foreignKey: 'bookId' })
User.belongsToMany(Book, { through: Comment, foreignKey: 'userId' })

module.exports = { db, Book, Author, Genre, User, BookGenre , Comment};