const express = require('express'); 
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware/auth')
require('dotenv').config();
const PORTAUTH =  process.env.PORTAUTH;
const app = express();
const db = require('./config/connect');
db.connect();
const Users = require("./models/users")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// const posts = [
//     {
//     username : 'test'
//     },
//     {username: 'nhanphan'}
// ]
let refreshTokens = [] 
/*
app.post('/posts',authenticateToken,(req,res)=>{
    res.json(posts.filter(post => post.username === req.user.username))
})
*/
app.post('/posts',authenticateToken,async (req,res)=>{
    const users =  await Users.find()
    console.log(users)
    res.json(users.filter(user => user.username === req.user.username))
})
app.post('/token',(req,res)=>{
    const refreshToken = req.body.token;
    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        const accessToken = generateAccesToken({username : user.username})
        res.json({accessToken : accessToken})
    })
})

app.delete('/logout',(req,res)=>{
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})
app.post('/login',(req,res)=>{
    const username = req.body.username;
    const user = {username : username}
    const accessToken = generateAccesToken(user)
    const refreshToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({accessToken: accessToken, refreshToken : refreshToken})
})

function generateAccesToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'})
}
app.listen(PORTAUTH,(req,res)=>{
    console.log(`Authserver is run  port: ${PORTAUTH}`)
})