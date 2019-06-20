const db = require('../index');
const Book = require('./book');
const Author = require('./author');
const Genre = require('./genre');
const User = require('./user');

Book.belongsTo(Author, { as: 'author' })
Author.hasMany(Book)

Book.belongsToMany(Genre, { through: 'book_genre' })
Genre.belongsToMany(Book, { through: 'book_genre' })


module.exports = { db, Book, Author, Genre, User };