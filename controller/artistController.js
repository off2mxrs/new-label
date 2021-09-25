const express = require('express')
const router = express.Router();

// MONGOOSE DATABASE ///////////
const db = require('../models/index')

// base route '/label' //// 
///////// 🏁 INDEX ROUTE //////////////
router.get('/', (req, res) => {
    db.Artist.find({}, (err, allArtists) => {
        if (err) return console.log(err)
        res.render('index.ejs', {allArtists: allArtists})
        console.log(allArtists);
    })
    // res.send('index')
    // res.render('index.ejs')
})

///////// 🆕 NEW ROUTE //////////////()
router.get('/new', (req, res) => {
    res.render('new.ejs')
})


///////// 👩‍🎨 CREATE ROUTE //////////////
router.post('/', (req, res) => {
    db.Artist.create(req.body, (err, createdArtist) => {
        if (err) return console.log(err)
        res.redirect('/label')
    })
    console.log(req.body)
})

///////// 🎙 SHOW ROUTE //////////////
router.get('/:artistId', (req, res) => {
    db.Artist.findById(req.params.artistId, (err, showArtist) => {
        if (err) return console.log(err)
        res.render('show.ejs', { oneArtist: showArtist })
    })
})

///////// ✍️ EDIT ROUTE //////////////
router.get('/:artistId/edit', (req, res) => {
    db.Artist.findById(req.params.artistId, (err, showArtist) => {
        if (err) return console.log(err)
        res.render('edit.ejs', { oneArtist: showArtist})
    })
})

///////// 💻 UPDATE ROUTE //////////////
router.put('/:artistId', (req, res) => {
    db.Artist.findByIdAndUpdate(req.params.artistId, req.body, (err, updatedArtist) => {
        if (err) return console.log(err)
        res.redirect('/label/' + req.params.artistId)
    })
    console.log(req.body);
})

///////// 🗑 Delete ROUTE //////////////
router.delete('/:artistId', (req, res) => {
    const artistId = req.params.artistId

    db.Artist.findByIdAndDelete(artistId, (err) => {
        if (err) return console.log(err);
        res.redirect('/label')
    })
    console.log(req.body);
})




module.exports = router;