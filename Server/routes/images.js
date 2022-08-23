const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

router.post('/',upload.single('image') ,async (req,res)=>{
    try {
        const result = await cloudinary.v2.uploader.upload(req.file.path,{folder:'catus', use_filename: true})
        console.log('image url: ',result.url)
        res.json(result);
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;