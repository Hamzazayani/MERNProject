const express = require('express')
const connectdb = require('./Config/connect')
const app = express()
const port = 5000
require("dotenv").config({path:"./Config/.env"})

connectdb()




const cors = require("cors");

const corsOptions = {
   origin: '*',
   credentials: true,
   optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use("/uploads",express.static(__dirname+"/uploads"))

//routes
app.use("/api/product",require("./Routes/ProductRoutes"))
app.use("/api/user",require("./Routes/UserRoutes"))





app.listen(port, (err) => err ? console.log(err) : console.log(`app listening on port ${port}!`))