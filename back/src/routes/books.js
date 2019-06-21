const express = require("express");
const sequelize = require("sequelize");
const op = sequelize.Op;
const router = new express.Router();

const Book = require("../../db/models/index").Book;
const Author = require("../../db/models/index").Author;
const Genre = require("../../db/models/index").Genre;

// MODEL
router.get("/", function(req, res) {
  Book.findAll({
    where: {
      stock: { [op.gte]: 1 }
    },
    include: [
      {
        model: Author,
        as: "author"
      }
    ]
  }).then(books => res.send(books));
});

router.get("/search/:title", function(req, res, next) {
  Book.findAll({
    where: {
      title: req.params.title
    }
  })
    .then(books => res.send(books))
    .catch(() => res.sendStatus(404));
});

router.route("/create").post((req, res) => {
  console.log("soy req.body del back", req.body);

  var arrayGenres = req.body.genres ? req.body.genres : [];

  Author.findOrCreate({ where: { id: req.body.authorId } }).then(function(
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
    return book.save().then(function(book) {
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

router.route("/:id").get(function(req, res, next) {
  Book.findByPk(req.params.id)
    .then(function(Book) {
      res.send(Book);
    })
    .catch(next);
});

module.exports = router;
