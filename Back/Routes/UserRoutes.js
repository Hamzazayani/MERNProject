const express = require('express');
const user= require('../Models/User');
const { registerCheck,validator,loginCheck } = require('../Middlewares/Validator');
const bcrypt = require('bcrypt')
const router = express.Router(); 
const jwt = require("jsonwebtoken")
const isAuth=require("../Middlewares/Autho")
const upload=require('../Utils/multer')
const isAdmin=require("../Middlewares/Admin")


//Add new user
router.post("/register",upload("users").single("file"),registerCheck(), validator, async (req, res) => {
    const { email, password, role } = req.body
    try {
        const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        const newuser = new user(req.body);
        newuser.img=url
        if (role=="Admin") {
            return res.status(401).send({ msg: "not auth !!" })
        }
        const exist= await user.findOne({email})
        if(exist){
           return res.status(400).send({msg:"already exist"})
        }

        
        const hashedPassword = await bcrypt.hash(password, 10)
        newuser.password = hashedPassword
        await newuser.save();
        
     
        const payload = { _id: newuser._id }
        const token = jwt.sign(payload, process.env.secretKey)
        res.send({ user: newuser, token })
    } catch (error) {
      
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})


//login user 
router.post('/login', loginCheck(), validator, async (req, res) => {
    const { email, password } = req.body
    try { 
        
        const existUser = await user.findOne({ email })
        if (!existUser) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const isMatched = await bcrypt.compare(password, existUser.password)

        if (!isMatched) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        existUser.password = undefined
        const payload = { _id: existUser._id }
        const token = jwt.sign(payload, process.env.secretKey)
        res.send({ user: existUser, token })
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: error.message })
}})


// get current user ==>private
router.get("/current",isAuth(), (req, res) => {
  
   
    res.send({User:req.user} );
   
})


//get
router.get('/', async (req, res) => {
    try {
      const users= await user.find();
      res.send(users);
    } catch (error) {
     console.log(error);
    }
  });


//put
  router.put("/:id",upload("user").single("file"),isAuth(), async (req, res) => {
    const { password,name} = req.body
    try {
        const existName = await user.findOne({ name })
           if (existName &&existName._id==!req.params.id) {
            return res.status(400).send({ msg:"name exist,please change user name"})
        }
      if(req.body.password){
            const hashedPassword = await bcrypt.hash(password, 10)
             req.body.password=hashedPassword
           }
           const result = await user.updateOne({ _id: req.params.id }, { ...req.body })
           const UserUpdated = await  user.findOne({ _id: req.params.id })
      if(req.file)
             { const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
             UserUpdated.img =url
              await UserUpdated.save()
                }
             console.log((result.modifiedCount) || (req.file));
         if ((result.modifiedCount) || (req.file)||(req.password)) {
            
            return res.send({ msg: "update suuccess", user: UserUpdated });
          }
        return res.status(400).send({ msg: " aleardy update " })
    }
     catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})


//delete
   router.delete("/:id",isAuth(), async (req, res) => {
    try {
        const result = await user.deleteOne({ _id: req.params.id })
        if (result.deletedCount) {
            return res.send({ msg: "delete  success" })
        } res.status(400).send({ msg: "aleardy delete" })
    } catch (error) {
        console.log(error)
     
    }})
  
module.exports = router;