const router = require('express').Router()
const {returnIndex, showBio} = require("./contreller.js")




router.get('/', returnIndex)
router.get('/show_bio', showBio)


module.exports = router
