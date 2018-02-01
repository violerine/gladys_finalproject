const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/projectportfolio",{useMongoClient : true})

const schema = mongoose.Schema;

const userSchema = new schema({
    
    username : String,
    password : Number,
    name : String,
    address : String,
    occupation : String,
    interests : String,
    image : String
})

const user = mongoose.model("project",userSchema)

module.exports = user