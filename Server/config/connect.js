const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
async function connect() {
    const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ikcie.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
    try{
        mongoose.connect(uri, ()=>{
           var status = mongoose.connection.readyState
           /* 0 = disconnected
            1 = connected
            2 = connecting
            3 = disconnecting
            4 = invalid credentials */
           if(status == 1){
            console.log('connect db successful'); 
           }else{
            console.log('not connect db ');
           }
        })
    }
    catch(e){
        console.error(e);
    }
}
module.exports = {connect};