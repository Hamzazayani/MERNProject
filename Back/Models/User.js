const mongoose=require ("mongoose");



const userSchema = new mongoose.Schema({
    name:{type:String,require:true},
    email: {type:String},
    password:{type:String},
    role:{type:String,enum:["Admin","User","DeliveryPerson"],default:"User"},
    img:{type:String},
    address:{type:String},
    phone:{type:Number},
    command:{type:Boolean,default:false}
    });
const User=mongoose.model("user",userSchema)

module.exports=User