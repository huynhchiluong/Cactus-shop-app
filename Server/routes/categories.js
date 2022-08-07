const express = require("express");
const Categories = require("../models/categories")
const usersController = require("../controllers/categories")
const router = express.Router()

router.post('/insert',usersController.insert)
router.get('/getall',usersController.getall)

module.exports = router;