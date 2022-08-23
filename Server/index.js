const express = require('express'); 
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('passport')
const jwt = require('jsonwebtoken');
require('dotenv').config();
require('./auth_google');
const PORT =  process.env.PORT;
const app = express();
const db = require('./config/connect');
const path = require('path')
const authenticateToken = require('./middleware/auth')
const routerUsers = require('./routes/users');
const routerCategories = require('./routes/categories')
const routerProducts = require('./routes/products')
const routerImages = require('./routes/images');
db.connect();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use('/images', express.static(path.join(__dirname, '/public/images')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// auth google
/*
function isLoggedIn(req,res,next){
    req.user ? next() : res.sendStatus(401);
}
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.send('<a href="/auth/google"> Authenticate with Google </a> ')
})
app.get('/auth/google',
    passport.authenticate('google',{scope: ['email','profile']}));
app.get('/auth/google/callback',
    passport.authenticate('google',{
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
}))
app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
  });
  
app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
});
app.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});
*/

app.get('/',(req,res)=>{
    res.render('index')

})




app.use('/api/users',routerUsers)
app.use('/api/categories',authenticateToken,routerCategories)
app.use('/api/products',authenticateToken,routerProducts)
app.use('/api/upload',routerImages)
app.listen(PORT,(req,res)=>{
    console.log(`server is run  port: ${PORT}`)
})