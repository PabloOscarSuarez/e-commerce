const express = require("express");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const router = new express.Router();

const Book = require("../../db/models/index").Book;
const Author = require("../../db/models/index").Author;
const Genre = require("../../db/models/index").Genre;

// MODEL
router.get("/", function (req, res) {
  Book.findAll({
    where: {
      stock: { [Op.gte]: 1 }
    },
    include: [
      {
        model: Author,
        as: "author"
      }
    ]
  }).then(books => res.send(books));
});

// ESTO ME VA A RETORNAR LOS LIBROS DE UN AUTHOR
router.get("/author/:authorId", function (req, res) {
  Book.findAll({
    where: {
      authorId: req.params.authorId
    }
  })
    .then(books => res.send(books));
});

router.get("/all", function (req, res) {
  Book.findAll({
    include: [{
      model: Author,
      as: 'author'
    }]
  })
    .then(books => res.send(books));
});

router.get("/search/:title", function (req, res, next) {

  Book.findAll({
    where: {
      title: { [Op.like]: `%${req.params.title}%` }
    }
  })
    .then(books => res.send(books))
    .catch(() => res.sendStatus(404));
});

router.route("/create").post((req, res) => {
  console.log("soy req.body del back", req.body);

  var arrayGenres = req.body.genres ? req.body.genres : [];

  Author.findOrCreate({ where: { id: req.body.authorId } }).then(function (
    values
  ) {
    var author = values[0];
    var book = Book.build({
      title: req.body.title,
      price: req.body.price,
      stock: req.body.stock,
      urlImage: req.body.urlImage,
      description: req.body.description
    });
    return book.save().then(function (book) {
      res.send(book);
      for (let i = 0; i < arrayGenres.length; i++) {
        const genreId = arrayGenres[i];
        Genre.findByPk(genreId).then(genre => {
          book.addGenre(genre);
        });
      }
      return book.setAuthor(author);
    });
  });
});


router.put("/edit_stock/:bookId", function (req, res) {
  Book.update({
    stock: req.body.stock,
  }, { returning: true, where: { id: req.params.bookId } })
    .then(function ([rowsUpdate, [updatedBook]]) {
      // console.log('SOY UPDATED BOOK DESDE ROUTES DE BOOK', updatedBook)
      return updatedBook
    })
    .then(book => {
      Book.findAll({
        include: [{
          model: Author,
          as: 'author'
        }]
      })
        .then(books => {
          // console.log('SOY BOOKS DEL RES.SEND', books)
          res.send(books)
        })
    })
});


router.put("/edit/:bookId", function (req, res, next) {

  // console.log("soy req.body del back DEL EDIT", req.body);

  var arrayGenres = req.body.genres ? req.body.genres : [];

  Author.findOrCreate({ where: { id: req.body.authorId } })
    .then(function (values) {
      var author = values[0];
      Book.update({
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock,
        urlImage: req.body.urlImage,
        description: req.body.description
      }, { returning: true, where: { id: req.params.bookId } })
        .then(function ([rowsUpdate, [updatedBook]]) {
          // console.log('SOY UPDATED BOOK DESDE ROUTES DE BOOK', updatedBook)
          return updatedBook
        })
        .then(function (book) {
          // res.send(book);

          Genre.findAll()
            .then(genres => {
              return book.removeGenres(genres)
            })
            .then(() => {
              for (let i = 0; i < arrayGenres.length; i++) {
                const genreId = arrayGenres[i];
                Genre.findByPk(genreId).then(genre => {
                  book.addGenre(genre);
                });
              }
            })
            .then(() => {
              return book.setAuthor(author);
            })
            .then(() => {
              Book.findAll({
                include: [{
                  model: Author,
                  as: 'author'
                }]
              })
                .then(books => {
                  // console.log('SOY BOOKS DEL RES.SEND', books)
                  res.send(books)
                })
            })

        });
    });
});

router.delete('/:bookId', (req, res) => {

  Book.destroy({
    where: {
      id: req.params.bookId
    }
  })
    .then(() => {
      Book.findAll({
        include: [{
          model: Author,
          as: 'author'
        }]
      })
        .then(books => {
          res.send(books)
        })
    })
})

router.route("/:id")
  .get(function (req, res, next) {
    Book.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Author,
          as: 'author',
        },
        {
          model: Genre,
        }
      ]
    })
      .then(function (Book) {
        res.send(Book);
      })
      .catch(next);
  });

module.exports = router;
