// REQUIRED MODULES ////////////
require('dotenv').config()
const express = require('express')
const rowdy = require('rowdy-logger')
const methodOverride = require('method-override')


// VARIABLES //////////////
const app = express()
const PORT = 4000
const rowdyResults = rowdy.begin(app)
const artistController = require('./controller/artistController')


//////////MIDDLEWARE///////////
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))
// urlencoded has to go above app.use 'CONTROLLER' to add to db //////////
app.use(express.urlencoded({ extended: false })) /// allows create route to Adds to DB
app.use(express.static('public'))
app.use('/label', artistController);

//Homepage/////////
app.get('/' , (req, res) => {
    res.render('home.ejs')
})

/// START SERVER ////////////
app.listen(process.env.PORT || 4000, () => {
    console.log(` 💿 The server is running on port: ${PORT} 💿  `);
    rowdyResults.print()
})