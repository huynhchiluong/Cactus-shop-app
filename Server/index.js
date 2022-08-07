const express = require('express'); 
const bodyParser = require('body-parser');

require('dotenv').config();
const PORT =  process.env.PORT;
const app = express();
const db = require('./config/connect');

const routerUsers = require('./routes/users');
const routerCategories = require('./routes/categories')

db.connect();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/users',routerUsers)
app.use('/api/categories',routerCategories)

app.listen(PORT,(req,res)=>{
    console.log(`server is run  port: ${PORT}`)
})