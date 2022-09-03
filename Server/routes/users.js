const express = require("express");
const Users = require("../models/users")
const usersController = require("../controllers/users")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");

router.get('/',usersController.index)


router.get('/getone',usersController.getone)
router.delete('/delete/:id',usersController.delete)
router.patch('/update/:id',usersController.update)
router.post('/auth',usersController.auth)
router.post('/checkuser',usersController.check_user)
router.post('/register',usersController.register)
router.post('/login',usersController.login)
// router.post('/',upload.single('img'),usersController.insert)
router.post('/',upload.single('img'),async function(req,res){
    try {
        const result = await cloudinary.v2.uploader.upload(req.file.path,{folder:'catus', use_filename: true});
        const saltRounds = 10;
        var username = req.body.username;
        var password = req.body.password;
        const salt = bcrypt.genSaltSync(saltRounds);
        const has_password = bcrypt.hashSync(password, salt);
        console.log('firstname: ',req.body.firstname)
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var email = req.body.email;
        var phone = req.body.phone;
        var role = req.body.role;
        var avatar = result.url;
        console.log(`name: ${username}, password: ${password} ,email: ${email} ,phone: ${phone}, role:${role}, avatar: ${avatar}  `)
        const users = new Users ({
            firstname : firstname, 
            lastname : lastname,
            username : username,
            password : has_password,
            email : email,
            phone : phone,
            role: role,
            avatar: avatar
        })
        console.log(users)
        await users.save().then((doc) =>res.render('home'));
    }catch(error){
        res.status(500).send(error);
    }
})
module.exports = router;