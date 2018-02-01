const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/projectportfolio", { useMongoClient : true })

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    
    id : String,
    description : String,
    category : String,
    uploadpic : String
});

const gallery = mongoose.model("gallery", gallerySchema);

module.exports = gallery;