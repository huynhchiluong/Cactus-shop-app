const express = require("express");
const Users = require("../models/users")
const usersController = require("../controllers/users")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

router.get('/',usersController.index)
router.post('/',usersController.insert)
router.get('/getone',usersController.getone)
router.delete('/delete/:id',usersController.delete)
router.patch('/update/:id',usersController.update)
router.post('/auth',usersController.auth)
router.post('/checkuser',usersController.check_user)
router.post('/register',usersController.register)
router.post('/login',usersController.login)

module.exports = router;