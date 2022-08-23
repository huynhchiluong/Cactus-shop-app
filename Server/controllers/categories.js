const Categories = require('../models/categories')
module.exports = {
    insert: async function(req,res){
        try {
            const title = req.body.title;
            const check = await Categories.findOne({title})
            if(check){
                res.status(200).send('Category is already ')
            }
            else{
                const category = await Categories.create({
                    title 
                })
                if(category)
                {
                    res.status(200).send('created')
                }else   res.status(500).send('not create')
            }
        } catch (error) {
           console.log(error)
        }
    },
    getall: async function(req,res){
        try {
            const category = await Categories.find();
            if(category){
                res.status(200).json(category)
            }else(
                res.status(500).send('error')
            )
        } catch (error) {
            res.status(500).send('error')
        }
    }

}
