const express = require('express');
const router = express.Router()
const images = require('./images')



router
.route('/')
.get (async (req,res) => {
  res.status(200).json(images)
})


module.exports = router
