require('dotenv').config();

const express = require('express');
const upload = require("./utils/multer");
const {cloudinary} = require("./utils/cloudinary");
const { all } = require('async');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json({limit: "50m"}));
app.use(express.urlencoded({limit: "50mb", extended: false}));

app.get('/api/upload', async (req, res, next)=>{
    const all_image = await cloudinary.api.resources();
    console.log(all_image);
    const images = await all_image.resources;
    console.log(images);

res.render('index', {images});
});

app.post('/api/upload', upload.single('img') , async (req, res, next)=>{


    console.log("file details: ", req.file);
    const result = await cloudinary.uploader.upload(req.file.path);


    console.log("result: ", result);


    const post_details = {
        title: req.body.title,
        image: result.public_id
    }

    res.status(200).json({post_details});
});

const port = 6000;
app.listen(port, ()=> console.log('Server is running on : ' + port));