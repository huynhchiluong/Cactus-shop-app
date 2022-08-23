const Users = require("../models/users")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const upload = require("./utils/multer");
const {cloudinary} = require("./utils/cloudinary");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
module.exports = {
    insert: async function(req,res){
        try {
            const saltRounds = 10;
            var username = req.body.username;
            var password = req.body.password;
            const salt = bcrypt.genSaltSync(saltRounds);
            const has_password = bcrypt.hashSync(password, salt);
            var email = req.body.email;
            var phone = req.body.phone;
            var role = req.body.role;
            var avatar = req.body.avatar;
            const users = new Users ({
                username : username,
                password : has_password,
                email : email,
                phone : phone,
                role: role,
                avatar: avatar
            })
            await users.save().then((doc) =>res.status(200).send(doc));
        }catch(error){
            res.status(500).send(error);
        }
    },
    update: async function(req,res){
        try {
            var id_condition = {_id:req.params.id}
            var  update ={username:'test3',phone:'19001900'}
            var user  = await Users.findByIdAndUpdate(id_condition,update,{new: true})
            res.status(200).send(user)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    delete: async function(req,res){
        try {
            var id = {_id:req.params.id }
            var user = await Users.findByIdAndDelete(id);
            res.status(200).send(user)
            console.log('delete successful')
        } catch (error) {
            res.status(500).send(error); 
        }
    },
    getone: async function(req,res){
        try {
            var name  = req.query.username;
            var user = await Users.findOne({username:name}); 
            if(user){
                res.json({success:true,user})
                console.log('find item');
            }
            else{
                res.status(500).send(error)
                console.log('not find item');
            }
        } catch (error) {
            console.log(error)
        }
    },
    auth: async function(req,res){
        try {
            var username = req.body.username;
            var password = req.body.password;
            var user = await Users.findOne({username:username})
            if(user){
                if(bcrypt.compareSync(password,user.password) == true){
                    res.status(200).send('login successfull')
                }else{
                    res.status(500).send('password is invalid')
                }
            }else{
                res.status(500).send('user is not exists')
            }
        } catch (error) {
            console.log(error)
        }
    },
    index: async function(req,res){
        try {
            var users = await Users.find();
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    check_user:  async function(req,res){
        try {
            const username = req.body.username;
            const user = await Users.findOne({username:username})
            if(user){
                res.status(200).json({Username_taken: true});
            }else{
                res.status(200).json({Username_taken: false});
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },
    register: async function(req,res){
        try {
            const {username,password,role,email,phone} = req.body
            if(!(username && password && role && email && phone)){
                res.status(400).send('All input is required');
            }
            const oldUser = await Users.findOne({email});
            if(oldUser){
                return res.status(409).send(`User Already Exist. Please Login`);
            }
            encryptedPassword = await bcrypt.hash(password, 10);
            const user = await Users.create({
                username,
                password : encryptedPassword,
                role,
                email: email.toLowerCase(),
                phone,
            });
            const token = jwt.sign(
                {user_id : user._id, email}, 
                process.env.TOKEN_KEY,
                {
                expiresIn: "2h",
                }   
            )
            user.token = token;
                res.status(201).json(user);
    
        } catch (error) {
            console.log(error);
        }
    },
    login: async function(req,res){
        try {
            const {email,password} = req.body
            if(!(email && password)){
                res.status(400).send("All input is required"); 
            }
            const user = await Users.findOne({email});
            if(user && ( bcrypt.compare(password,user.password))){
                const token = jwt.sign(
                    { user_id : user._id, email}, 
                    process.env.TOKEN_KEY,
                    {
                        expiresIn : "2h"
                    },
                );
                user.token = token;
                res.status(200).json(user);
            }else
            res.status(400).send("Invalid Credentials");
    
        } catch (error) {
             console.log(error);
        }
    
    }

}