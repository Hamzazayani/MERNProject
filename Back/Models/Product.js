const mongoose=require ("mongoose");



const productSchema = new mongoose.Schema({
    title:{type:String,require:true},
    description: {type:String},
    price:{type:Number},
    img:{type:String},
    category:{type:String,enum:["HealthCare","Beautycare","MedicalMaterial"]}

}
);

const product=mongoose.model("product",productSchema)

module.exports=product