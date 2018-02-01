const express = require("express");
const gallery = require("../model/gallerymodel");
const router = express.Router();

router.post("/post/profile", (req, res) => {
    
    
    // if (!req.files.image) {
    //     return res.status(400).send("No files were uploaded");
    // }

    let uploadpic = req.files.uploadpic;
    let date = new Date();
    let imageName = "uploads"+ date.getTime() + ".png"

    uploadpic.mv("./posting/" + imageName, (error) => {
        
        if (error) return res.status(500).send(error);
        
        let newObj = new gallery({
            id : req.body._id,
            description : req.body.description,
            category : req.body.category,
            uploadpic : "http://localhost:3000/" + imageName
        });
        
        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else{
                res.json(newObj);
            }
        });

    });

});


router.get("/category/", (req, res) => {
    
    gallery.find({category:req.params.category}, (error, result) => {
        if(error) res.send(error);
        else{
            res.json(result)
        }
    });

});



router.get("/", (req, res) => {
    
    gallery.find({id: req.query.id}, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });
});

router.get("/gett", (req, res) => {
    
    gallery.find({},(error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });
});

module.exports = (function(){
    return router;
})()