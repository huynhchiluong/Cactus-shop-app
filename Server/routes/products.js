const express = require('express')
const productsController = require('../controllers/products')
const router = express.Router()

router.post('/insert',productsController.insert)
router.post('/getall',productsController.getall)

module.exports = router ; 