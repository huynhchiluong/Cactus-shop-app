// const multer = require('multer');
// const path = require('path');

// module.exports = multer({
//     storage: multer.diskStorage({}),
//     fileFilter: (req,file,cb) =>{
//         let ext = path.extname(file.originalname);
//         if(ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".JPG"){
//             cb(new Error("File type is not support"),false);
//             return;
//         }
//         cb(null,true);
//     },
// });




const multer = require('multer');


module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {

     

        if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
           
            cb(new Error('File does not support'), false);
            return;
        }

      
        cb(null, true);
    }
});
