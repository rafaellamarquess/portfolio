const router = require('express').Router()
const {showBio, showListaBio} = require("./contreller.js")


router.get('/show_bio', showBio)
router.get('/show_lista_bio', showListaBio)


module.exports = router
