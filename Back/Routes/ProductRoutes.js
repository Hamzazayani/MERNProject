const express = require('express');
const product = require('../Models/Product');
const upload=require('../Utils/multer');
const isAuth=require('../Middlewares/Autho')
const router = express.Router();

//Add new product
router.post("/", upload("products").single("file"),isAuth(),async (req, res) => {
    try {
      const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        // Create a new product instance using the request body
        const newProduct = new product(req.body);
        newProduct.img=url
        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Send a success response with the saved product
        res.send(  savedProduct );  
    } catch (error) {
        // Handle errors and send an error response to the client
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})

//get
router.get('/', async (req, res) => {
    try { 
      const products= await product.find();
      res.send(products);
      
    } catch (error) {
     console.log(error);
    }
  });

  router.get('oneproduct/:id', async (req, res) => {
    try { 
      const products= await product.findById(req.params.id);
      res.send(products);
      
    } catch (error) {
     console.log(error);
    }
  });
 


  router.get('/:query', async (req, res) => {
    try { 
      const {query}=req.params
      const products= await product.find({category:query});
      res.send(products);
      
    } catch (error) {
     console.log(error);
    }
  });
//put
router.put("/:id",upload("products").single("file"),isAuth(), async (req, res) => {
  try {
       const result = await product.updateOne({ _id: req.params.id }, { ...req.body })
          productUpdated = await  product.findOne({ _id: req.params.id })
           if(req.file)
           { const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
           productUpdated.img =url
            await productUpdated.save()
           }
   if (result.modifiedCount || req.file) {
          return res.send({ msg: "update suuccess", product: productUpdated });
        }
       res.status(400).send({ msg: " aleardy update " })
  }
   catch (error) {
      console.log(error)
      res.status(400).send(error.message)
  }
})

//delete
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
      result=await product.findByIdAndRemove(id);
      res.send( result );
    } catch (error) {

      console.log(error);
    }
  });

module.exports = router;