
const express = require('express');
const router = new express.Router();

const Genre = require('../../db/models/index').Genre

// MODEL


router.route('/create')
    .post((req, res) => {
        console.log('soy req.body del back', req.body)

        var genre = Genre.build({
            name: req.body.name,
        });
        genre.save()
        res.send(genre)
    })


router.get('/',(req, res)=>{
    Genre.findAll()
    .then(genres=>{
        res.send(genres)
    })
})

module.exports = router;