
const express = require('express');
const router = new express.Router();

const Book = require('../../db/models/index').Book
const Comment = require('../../db/models/index').Comment
const User = require('../../db/models/index').User

// MODEL

router.get('/prueba', (req, res) => {

    // Los libros comentados por ese usuario
    // User.findByPk(1,{
    //     include: [
    //         {
    //           model: Book,
    //         }
    //       ]
    //   })
    //     .then(result => {
    //         res.send(result)
    //     })


    // Los comentarios de un libro
    Book.findByPk(1, {
        include: [
            {
                model: User,
            }
        ]
    })
        .then(result => {
            res.send(result)
        })

})

router.post('/create', (req, res) => {

    // const comment = Comment.build({
    //     bookId: req.body.bookId,
    //     userId: 1, 
    //     // userId: req.body.bookId, ESTO VA VA CAMBIAR CUANDO TENGA EL USER LOGUEADO CON SU ID
    //     description: req.body.description
    // })
    // return comment.save()

    User.findByPk(1)
        .then(user => {
            Book.findByPk(req.body.bookId)
                .then(book => {
                    return user.addBook(book, { through: { description: req.body.description }})
                    .then((algo)=>{
                        res.send(book)
                    })
                })
        })
})

module.exports = router;


// INSERT INTO public.users(
// 	id, name, address, email, password, salt, "createdAt", "updatedAt")
// 	VALUES (1, 'Ale', 'Ale', 'Ale@gmail.com', 'Ale', 'Ale', '2019-02-02', '2019-02-02');