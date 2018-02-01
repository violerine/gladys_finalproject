const express =require("express");
const user = require("../model/usermodel")
const jwt = require ("jsonwebtoken")
const router = express.Router();

router.post("/new", (req,res)=>{
    let newobj= new user({
       
        
        username : req.body.username,
        password : req.body.password,
        name : "",
        address : "",
        occupation :"",
        interests :"",
        image : ""
        
    })

    newobj.save((error)=>{
        if(error){
            res.status(500).send(error);
        }

        else{
            res.json(newobj);
        }
    });
})

// router.put("/put", (req, res) => {
        
//     let newObj = {
        
//         name : req.body.name,
//         address : req.body.address,
//         occupation : req.body.occupation,
//         interests : req.body.interests,
//         image :  "http://localhost:3000/public/" + imageName
        
//     };

//     user.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
//         if(error){
//             res.status(500).json(error);
//         }
//         else {
//             res.status(200).json({ message : "Data updated" })
//         }

    
//     });


router.get("/:id", (req, res) => {
    
    user.findById(req.params.id, (error, result) => {
        if(error){
            res.status(500).json(error);
        }
        else{
            res.json(result)
        }
    });

});

// });

// router.post("/post/:id", (req, res) => {
        
//     let newObj = {
        
//         name : req.body.name,
//         address : req.body.address,
//         occupation : req.body.occupation,
//         interests : req.body.interests
        
//     };

//     user.findById(req.body._id, newObj,  (error, result) => {
//         if(error){
//             res.status(500).json(error);
//         }
//         else {
//             res.status(200).json({ message : "Data updated" })
//         }
//     });

// });


router.post("/login",(req,res)=>{

    user.findOne({username : req.body.username, password:req.body.password},(error,result)=>{
        if(error){
            res.status(500).json(error);
        }
        else if(!result){
            res.status(404).json({message : "User not found !"});
        }

        else{
            const payload = {
                _id : result._id,
                name : result.name,
                address : result.address,
                occupation : result.occupation,
                interests : result.interests
                
            };

            const token = jwt.sign(payload,"secret",{ expiresIn : 300});
            res.json({token : token , _id : result._id});
        }

    })

})

router.put("/put", (req, res) => {
    
    let image = req.files.image;

    if (!req.files.image) {
        return res.status(400).send("No files were uploaded");
    }

    
    let date = new Date();
    let imageName = date.getTime() + ".png"

    image.mv("./public/" + imageName, (error) => {

        console.log(req.body._id)
        
        if (error) return res.status(500).send(error);
        
        let newObj = {
            name : req.body.name,
            address : req.body.address,
            occupation : req.body.occupation,
            interests : req.body.interests,
            image : "http://localhost:3000/" + imageName
        };
        
        user.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else {
                res.status(200).json({ message : "Data updated",_id :req.body._id})
            }
        });
    

    });

});

module.exports = (function(){
    return router;
})()