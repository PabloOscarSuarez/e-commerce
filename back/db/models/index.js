const db = require ('../index');
const Book = require ('./book');
const Author = require ('./author');
const Genre = require ('./genre');
const User = require ('./user');

Book.belongsTo(Author, { as: 'author'})

// Book.belongsToMany(Genre, { as: 'Genres', through: 'book_genre', foreignKey: 'GenreId' })
// Genre.belongsToMany(Book, { as: 'Books', through: 'book_genre', foreignKey: 'Book' })


module.exports = {db, Book, Author, Genre, User};