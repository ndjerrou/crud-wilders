const mongoose = require('mongoose')

module.exports = async function connect(){
    try{
        // const url = 'mongodb://127.0.0.1:27017/wilderdb'
        const url = 'mongodb+srv://ndjerrou:ndjerrou@db.tounu.mongodb.net/ZeWilders?retryWrites=true&w=majority'

        await mongoose.connect(url)
        console.log('Connected sucessfully to MongoDB')
    }
    catch(err){
        console.error(err.message)
    } 
}